import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Course, Lesson } from '../types';

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      setError(null);

      // Charger les cours
      const { data: coursesData, error: coursesError } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (coursesError) {
        throw coursesError;
      }

      // Charger les leçons pour chaque cours
      const { data: lessonsData, error: lessonsError } = await supabase
        .from('lessons')
        .select('*')
        .order('order_index', { ascending: true });

      if (lessonsError) {
        throw lessonsError;
      }

      // Associer les leçons aux cours
      const coursesWithLessons: Course[] = (coursesData || []).map(course => ({
        id: course.id,
        title: course.title,
        description: course.description,
        instructor: course.instructor,
        duration: course.duration,
        level: course.level,
        category: course.category,
        price: course.price,
        rating: course.rating,
        students_count: course.students_count,
        image_url: course.image_url,
        is_premium: course.is_premium,
        created_at: course.created_at,
        updated_at: course.updated_at,
        lessons: (lessonsData || [])
          .filter(lesson => lesson.course_id === course.id)
          .map(lesson => ({
            id: lesson.id,
            course_id: lesson.course_id,
            title: lesson.title,
            duration: lesson.duration,
            type: lesson.type,
            order_index: lesson.order_index,
            created_at: lesson.created_at
          }))
      }));

      setCourses(coursesWithLessons);
    } catch (err) {
      console.error('Erreur lors du chargement des cours:', err);
      setError('Erreur lors du chargement des cours');
    } finally {
      setLoading(false);
    }
  };

  const getCourseById = (id: string): Course | undefined => {
    return courses.find(course => course.id === id);
  };

  return {
    courses,
    loading,
    error,
    getCourseById,
    refetch: loadCourses
  };
};