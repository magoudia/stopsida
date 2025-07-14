/*
  # Schéma initial pour la plateforme de cours

  1. Nouvelles tables
    - `profiles` - Profils utilisateurs étendus
      - `id` (uuid, référence auth.users)
      - `name` (text)
      - `avatar_url` (text, optionnel)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `courses` - Catalogue des cours
      - `id` (uuid, clé primaire)
      - `title` (text)
      - `description` (text)
      - `instructor` (text)
      - `duration` (text)
      - `level` (text)
      - `category` (text)
      - `price` (numeric)
      - `rating` (numeric)
      - `students_count` (integer)
      - `image_url` (text)
      - `is_premium` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `lessons` - Leçons des cours
      - `id` (uuid, clé primaire)
      - `course_id` (uuid, référence courses)
      - `title` (text)
      - `duration` (text)
      - `type` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
    
    - `enrollments` - Inscriptions aux cours
      - `id` (uuid, clé primaire)
      - `user_id` (uuid, référence auth.users)
      - `course_id` (uuid, référence courses)
      - `enrolled_at` (timestamp)
      - `progress` (numeric, défaut 0)
    
    - `lesson_progress` - Progression des leçons
      - `id` (uuid, clé primaire)
      - `user_id` (uuid, référence auth.users)
      - `lesson_id` (uuid, référence lessons)
      - `completed` (boolean, défaut false)
      - `completed_at` (timestamp, optionnel)

  2. Sécurité
    - Activer RLS sur toutes les tables
    - Politiques pour les utilisateurs authentifiés
    - Accès en lecture publique pour les cours
    - Accès privé pour les inscriptions et progression
</sql>

-- Créer la table des profils utilisateurs
CREATE TABLE IF NOT EXISTS profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name text NOT NULL,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Créer la table des cours
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  instructor text NOT NULL,
  duration text NOT NULL,
  level text NOT NULL CHECK (level IN ('Débutant', 'Intermédiaire', 'Avancé')),
  category text NOT NULL,
  price numeric DEFAULT 0,
  rating numeric DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  students_count integer DEFAULT 0,
  image_url text NOT NULL,
  is_premium boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Créer la table des leçons
CREATE TABLE IF NOT EXISTS lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  duration text NOT NULL,
  type text NOT NULL CHECK (type IN ('video', 'text', 'quiz')),
  order_index integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Créer la table des inscriptions
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  enrolled_at timestamptz DEFAULT now(),
  progress numeric DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  UNIQUE(user_id, course_id)
);

-- Créer la table de progression des leçons
CREATE TABLE IF NOT EXISTS lesson_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lesson_id uuid REFERENCES lessons(id) ON DELETE CASCADE NOT NULL,
  completed boolean DEFAULT false,
  completed_at timestamptz,
  UNIQUE(user_id, lesson_id)
);

-- Activer RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;

-- Politiques pour les profils
CREATE POLICY "Les utilisateurs peuvent voir leur propre profil"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Les utilisateurs peuvent mettre à jour leur propre profil"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Les utilisateurs peuvent insérer leur propre profil"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Politiques pour les cours (lecture publique)
CREATE POLICY "Tout le monde peut voir les cours"
  ON courses FOR SELECT
  TO anon, authenticated
  USING (true);

-- Politiques pour les leçons (lecture publique)
CREATE POLICY "Tout le monde peut voir les leçons"
  ON lessons FOR SELECT
  TO anon, authenticated
  USING (true);

-- Politiques pour les inscriptions
CREATE POLICY "Les utilisateurs peuvent voir leurs propres inscriptions"
  ON enrollments FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent s'inscrire aux cours"
  ON enrollments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent mettre à jour leurs inscriptions"
  ON enrollments FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Politiques pour la progression des leçons
CREATE POLICY "Les utilisateurs peuvent voir leur propre progression"
  ON lesson_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent créer leur progression"
  ON lesson_progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent mettre à jour leur progression"
  ON lesson_progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Fonction pour créer automatiquement un profil lors de l'inscription
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, name)
  VALUES (new.id, COALESCE(new.raw_user_meta_data->>'name', 'Utilisateur'));
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger pour créer automatiquement un profil
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();