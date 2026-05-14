import { Service, Course, LibraryItem, Article } from '../types';

export const SERVICES: Service[] = [
  { id: '1', title: 'Financial Accounting', description: 'Comprehensive financial reporting and bookkeeping services for businesses of all sizes.', icon: 'Calculator', category: 'Accounting' },
  { id: '2', title: 'Tax Consulting', description: 'Expert tax planning and compliance services tailored to Egyptian tax laws.', icon: 'FileText', category: 'Tax' },
  { id: '3', title: 'ERP & Systems', description: 'Implementation and optimization of modern accounting and ERP software systems.', icon: 'Monitor', category: 'Technology' },
  { id: '4', title: 'Payroll Management', description: 'Accurate and timely payroll processing including social insurance and income tax.', icon: 'Users', category: 'HR' },
  { id: '5', title: 'HR Management', description: 'Full-spectrum HR solutions from policy drafting to organizational development.', icon: 'Briefcase', category: 'HR' },
  { id: '6', title: 'Recruitment Support', description: 'Finding the right talent for your finance and administrative needs.', icon: 'UserPlus', category: 'HR' },
  { id: '7', title: 'Financial Analysis', description: 'In-depth analysis of financial statements to drive business growth.', icon: 'TrendingUp', category: 'Consulting' },
  { id: '8', title: 'Cost Accounting', description: 'Precision cost tracking and management for industrial and commercial sectors.', icon: 'PieChart', category: 'Accounting' },
  { id: '9', title: 'Feasibility Studies', description: 'Evidence-based studies for new projects and business expansions.', icon: 'BarChart', category: 'Consulting' },
  { id: '10', title: 'Internal Auditing', description: 'Independent assessment of internal controls and risk management.', icon: 'ShieldCheck', category: 'Auditing' },
  { id: '11', title: 'Business Consulting', description: 'Strategic advice on business setup, structure, and international growth.', icon: 'Globe', category: 'Consulting' },
];

export const COURSES: Course[] = [
  { id: '1', title: 'Accounting Fundamentals', instructor: 'Dr. Ahmed Khalil', duration: '12 Hours', category: 'Accounting', image: 'https://picsum.photos/seed/acc1/800/450' },
  { id: '2', title: 'Excel for Accountants', instructor: 'Eng. Sarah Ahmed', duration: '8 Hours', category: 'Technology', image: 'https://picsum.photos/seed/exl1/800/450' },
  { id: '3', title: 'HR Management Basics', instructor: 'Laila Mahmoud', duration: '10 Hours', category: 'HR', image: 'https://picsum.photos/seed/hr1/800/450' },
  { id: '4', title: 'Tax Accounting in Egypt', instructor: 'Mohamed Ali', duration: '15 Hours', category: 'Tax', image: 'https://picsum.photos/seed/tax1/800/450' },
];

export const LIBRARY_ITEMS: LibraryItem[] = [
  { id: '1', title: 'IFRS 2024 Guide', type: 'PDF', category: 'Accounting', date: '2024-01-15' },
  { id: '2', title: 'Egyptian Tax Law 2023', type: 'PDF', category: 'Tax', date: '2023-12-10' },
  { id: '3', title: 'Payroll Template', type: 'Excel', category: 'HR', date: '2024-02-01' },
  { id: '4', title: 'Employee Handbook Sample', type: 'Word', category: 'HR', date: '2024-03-12' },
  { id: '5', title: 'Cost Accounting Basics', type: 'Book', category: 'Accounting', date: '2023-11-20' },
];

export const ARTICLES: Article[] = [
  { id: '1', title: 'How to Build a Strong Accounting System', author: 'AKP Editorial', date: 'May 10, 2024', category: 'Accounting', readTime: '5 min', image: 'https://picsum.photos/seed/art1/800/450' },
  { id: '2', title: 'Common Tax Mistakes in Egypt', author: 'Tax Expert Team', date: 'April 28, 2024', category: 'Tax', readTime: '8 min', image: 'https://picsum.photos/seed/art2/800/450' },
  { id: '3', title: 'Best HR Practices for Companies', author: 'HR Solutions', date: 'March 15, 2024', category: 'HR', readTime: '6 min', image: 'https://picsum.photos/seed/art3/800/450' },
  { id: '4', title: 'Financial Planning for Startups', author: 'Finance Hub', date: 'February 20, 2024', category: 'Finance', readTime: '7 min', image: 'https://picsum.photos/seed/art4/800/450' },
];
