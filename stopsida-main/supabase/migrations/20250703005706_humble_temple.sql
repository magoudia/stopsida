/*
  # Données d'exemple pour la plateforme

  1. Insertion des cours d'exemple
  2. Insertion des leçons pour chaque cours
  3. Données réalistes pour tester la plateforme
*/

-- Insérer les cours d'exemple
INSERT INTO courses (id, title, description, instructor, duration, level, category, price, rating, students_count, image_url, is_premium) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'React & TypeScript - Guide Complet', 'Maîtrisez React et TypeScript pour créer des applications web modernes et performantes.', 'Marie Dupont', '12h 30min', 'Intermédiaire', 'Développement Web', 99, 4.8, 1250, 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400', true),
('550e8400-e29b-41d4-a716-446655440002', 'Design UI/UX avec Figma', 'Apprenez à créer des interfaces utilisateur attrayantes avec Figma.', 'Jean Martin', '8h 45min', 'Débutant', 'Design', 79, 4.6, 890, 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400', true),
('550e8400-e29b-41d4-a716-446655440003', 'Python pour les Débutants', 'Découvrez la programmation avec Python, langage idéal pour commencer.', 'Sophie Bernard', '15h 20min', 'Débutant', 'Programmation', 59, 4.7, 2100, 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400', false),
('550e8400-e29b-41d4-a716-446655440004', 'Marketing Digital Avancé', 'Stratégies avancées de marketing digital pour développer votre business.', 'Pierre Lemoine', '10h 15min', 'Avancé', 'Marketing', 129, 4.9, 650, 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400', true),
('550e8400-e29b-41d4-a716-446655440005', 'Photographie Numérique', 'Techniques de photographie et retouche pour créer des images professionnelles.', 'Léa Moreau', '6h 30min', 'Intermédiaire', 'Créatif', 69, 4.5, 450, 'https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=400', false),
('550e8400-e29b-41d4-a716-446655440006', 'Gestion de Projet Agile', 'Méthodologies agiles et outils pour gérer efficacement vos projets.', 'Thomas Roux', '9h 45min', 'Intermédiaire', 'Gestion', 89, 4.4, 780, 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400', true);

-- Insérer les leçons pour le cours React & TypeScript
INSERT INTO lessons (course_id, title, duration, type, order_index) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'Introduction à React', '15min', 'video', 1),
('550e8400-e29b-41d4-a716-446655440001', 'Configuration TypeScript', '20min', 'video', 2),
('550e8400-e29b-41d4-a716-446655440001', 'Composants et Props', '25min', 'video', 3),
('550e8400-e29b-41d4-a716-446655440001', 'Quiz - Bases de React', '10min', 'quiz', 4);

-- Insérer les leçons pour le cours Design UI/UX
INSERT INTO lessons (course_id, title, duration, type, order_index) VALUES
('550e8400-e29b-41d4-a716-446655440002', 'Interface Figma', '12min', 'video', 1),
('550e8400-e29b-41d4-a716-446655440002', 'Outils de base', '18min', 'video', 2),
('550e8400-e29b-41d4-a716-446655440002', 'Créer un wireframe', '30min', 'video', 3);

-- Insérer les leçons pour le cours Python
INSERT INTO lessons (course_id, title, duration, type, order_index) VALUES
('550e8400-e29b-41d4-a716-446655440003', 'Installation Python', '10min', 'video', 1),
('550e8400-e29b-41d4-a716-446655440003', 'Variables et types', '20min', 'video', 2),
('550e8400-e29b-41d4-a716-446655440003', 'Structures conditionnelles', '25min', 'video', 3);

-- Insérer les leçons pour le cours Marketing Digital
INSERT INTO lessons (course_id, title, duration, type, order_index) VALUES
('550e8400-e29b-41d4-a716-446655440004', 'Stratégie SEO avancée', '45min', 'video', 1),
('550e8400-e29b-41d4-a716-446655440004', 'Publicité Facebook', '35min', 'video', 2),
('550e8400-e29b-41d4-a716-446655440004', 'Analytics et métriques', '40min', 'video', 3);

-- Insérer les leçons pour le cours Photographie
INSERT INTO lessons (course_id, title, duration, type, order_index) VALUES
('550e8400-e29b-41d4-a716-446655440005', 'Réglages de base', '15min', 'video', 1),
('550e8400-e29b-41d4-a716-446655440005', 'Composition', '20min', 'video', 2),
('550e8400-e29b-41d4-a716-446655440005', 'Retouche Lightroom', '30min', 'video', 3);

-- Insérer les leçons pour le cours Gestion de Projet
INSERT INTO lessons (course_id, title, duration, type, order_index) VALUES
('550e8400-e29b-41d4-a716-446655440006', 'Principes Agile', '25min', 'video', 1),
('550e8400-e29b-41d4-a716-446655440006', 'Scrum Framework', '30min', 'video', 2),
('550e8400-e29b-41d4-a716-446655440006', 'Outils de gestion', '20min', 'video', 3);