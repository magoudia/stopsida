import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { User, AuthContextType, Enrollment } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);

  useEffect(() => {
    // Récupérer la session actuelle
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        await loadUserProfile(session.user);
      }
      setLoading(false);
    };

    getSession();

    // Écouter les changements d'authentification
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        await loadUserProfile(session.user);
      } else {
        setUser(null);
        setEnrollments([]);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadUserProfile = async (supabaseUser: SupabaseUser) => {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', supabaseUser.id)
        .single();

      if (error) {
        console.error('Erreur lors du chargement du profil:', error);
        return;
      }

      if (profile) {
        const userData: User = {
          id: profile.id,
          email: supabaseUser.email || '',
          name: profile.name,
          avatar_url: profile.avatar_url || undefined
        };
        setUser(userData);
        await loadUserEnrollments(profile.id);
      }
    } catch (error) {
      console.error('Erreur lors du chargement du profil:', error);
    }
  };

  const loadUserEnrollments = async (userId: string) => {
    try {
      const { data: enrollments, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('user_id', userId);

      if (error) {
        console.error('Erreur lors du chargement des inscriptions:', error);
        return;
      }

      setEnrollments(enrollments || []);
    } catch (error) {
      console.error('Erreur lors du chargement des inscriptions:', error);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        console.error('Erreur de connexion:', error);
        return false;
      }

      return !!data.user;
    } catch (error) {
      console.error('Erreur de connexion:', error);
      return false;
    }
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name
          }
        }
      });

      if (error) {
        console.error('Erreur d\'inscription:', error);
        return false;
      }

      return !!data.user;
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Erreur de déconnexion:', error);
      }
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
    }
  };

  const enrollInCourse = async (courseId: string): Promise<boolean> => {
    if (!user) return false;

    try {
      const { data, error } = await supabase
        .from('enrollments')
        .insert({
          user_id: user.id,
          course_id: courseId
        })
        .select()
        .single();

      if (error) {
        console.error('Erreur lors de l\'inscription au cours:', error);
        return false;
      }

      if (data) {
        setEnrollments(prev => [...prev, data]);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Erreur lors de l\'inscription au cours:', error);
      return false;
    }
  };

  const isEnrolled = (courseId: string): boolean => {
    return enrollments.some(enrollment => enrollment.course_id === courseId);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    enrollInCourse,
    isEnrolled,
    enrollments
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};