export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  category: string;
  progress?: number;
  image: string;
}

export interface LibraryItem {
  id: string;
  title: string;
  type: 'PDF' | 'Excel' | 'Word' | 'Book';
  category: string;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}
