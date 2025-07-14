export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
}

export interface Course {
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
  lessons: Lesson[];
  is_premium: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Lesson {
  id: string;
  course_id?: string;
  title: string;
  duration: string;
  type: 'video' | 'text' | 'quiz';
  order_index?: number;
  is_completed?: boolean;
  created_at?: string;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  progress: number;
}

export interface LessonProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at: string | null;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => Promise<void>;
  enrollInCourse: (courseId: string) => Promise<boolean>;
  isEnrolled: (courseId: string) => boolean;
  enrollments: Enrollment[];
}