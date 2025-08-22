import { getDictionary } from '@/app/dictionaries';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import BlogPageClient from './BlogPageClient';

export default async function BlogPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const posts = getAllPosts();
  const categories = getAllCategories();
  
  return <BlogPageClient dict={dict} lang={lang} posts={posts} categories={categories} />;
}