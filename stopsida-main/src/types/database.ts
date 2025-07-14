export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name: string;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      courses: {
        Row: {
          id: string;
          title: string;
          description: string;
          instructor: string;
          duration: string;
          level: 'Débutant' | 'Intermédiaire' | 'Avancé';
          category: string;
          price: number;
          rating: number;
          students_count: number;
          image_url: string;
          is_premium: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          instructor: string;
          duration: string;
          level: 'Débutant' | 'Intermédiaire' | 'Avancé';
          category: string;
          price?: number;
          rating?: number;
          students_count?: number;
          image_url: string;
          is_premium?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          instructor?: string;
          duration?: string;
          level?: 'Débutant' | 'Intermédiaire' | 'Avancé';
          category?: string;
          price?: number;
          rating?: number;
          students_count?: number;
          image_url?: string;
          is_premium?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      lessons: {
        Row: {
          id: string;
          course_id: string;
          title: string;
          duration: string;
          type: 'video' | 'text' | 'quiz';
          order_index: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          title: string;
          duration: string;
          type: 'video' | 'text' | 'quiz';
          order_index: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          course_id?: string;
          title?: string;
          duration?: string;
          type?: 'video' | 'text' | 'quiz';
          order_index?: number;
          created_at?: string;
        };
      };
      enrollments: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          enrolled_at: string;
          progress: number;
        };
        Insert: {
          id?: string;
          user_id: string;
          course_id: string;
          enrolled_at?: string;
          progress?: number;
        };
        Update: {
          id?: string;
          user_id?: string;
          course_id?: string;
          enrolled_at?: string;
          progress?: number;
        };
      };
      lesson_progress: {
        Row: {
          id: string;
          user_id: string;
          lesson_id: string;
          completed: boolean;
          completed_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          lesson_id: string;
          completed?: boolean;
          completed_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          lesson_id?: string;
          completed?: boolean;
          completed_at?: string | null;
        };
      };
    };
  };
}