import { notFound } from 'next/navigation';
import Link from 'next/link';
import { HiClock, HiCalendar,  HiArrowLeft,  } from 'react-icons/hi';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { getDictionary } from '@/app/dictionaries';
import ReactMarkdown from 'react-markdown';
import ShareButtons from '@/app/components/ShareButtons';


export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post non trovato',
    };
  }

  const baseUrl = 'https://clein.it';
  const postUrl = `${baseUrl}/${lang}/blog/${slug}`;
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: 'CLEIN',
      images: [
        {
          url: post.heroImage.startsWith('http') ? post.heroImage : `${baseUrl}${post.heroImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: lang === 'it' ? 'it_IT' : 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage.startsWith('http') ? post.heroImage : `${baseUrl}${post.heroImage}`],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();

  if (!post) {
    notFound();
  }

  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
      <main>
        {/* Hero Section */}
        <section className="relative pb-20 pt-32 lg:pt-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8] to-[#4C9AFF]">
            <div className="absolute inset-0 gradient-mesh opacity-30" />
          </div>
          
          <div className="relative z-10 container-custom">
            <Link
              href={`/${lang}/blog`}
              className="inline-flex items-center gap-2 text-white hover:text-white/90 mb-8 transition-colors"
            >
              <HiArrowLeft className="w-5 h-5" />
              {dict?.blog?.post?.backToBlog || "Back to Blog"}
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 text-white text-sm mb-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <HiCalendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('it-IT', { 
                    month: 'numeric', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <HiClock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center" >
                <span className='text-3xl font-bold text-white'>C</span>
                </div>
                <div>
                  <p className="text-white font-medium">{post.author}</p>
                  <p className="text-white/70 text-sm">{dict?.blog?.post?.authorByline || "CLEIN Content Team"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-2">
                {/* Featured Image */}
                <div className="aspect-w-16 aspect-h-9 mb-8 rounded-2xl overflow-hidden">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
                
                {/* Article Body */}
                <div className="prose prose-lg !max-w-screen-lg prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-[#0057B8] prose-a:no-underline hover:prose-a:underline">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                {/* Share Section */}
                <ShareButtons post={post} lang={lang} dict={dict} />
              </article>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-[#0057B8] to-[#4C9AFF] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    {dict?.hero?.readyToExperience || "Ready to Experience CLEIN?"}
                  </h3>
                  <p className="mb-6">
                    {dict?.hero?.downloadAppToday || "Download our app and book your first service today"}
                  </p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.clein.homeservices&hl=it&gl=IT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-[#0057B8] hover:bg-gray-100 w-full justify-center"
                  >
                    {dict?.hero?.downloadApp || "Download App"}
                  </a>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      {dict?.blog?.post?.relatedPosts || "Related Articles"}
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/${lang}/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <div className="bg-white rounded-xl p-4 shadow-soft hover:shadow-card transition-all duration-300">
                            <h4 className="font-semibold text-gray-900 group-hover:text-[#0057B8] transition-colors mb-2 line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <HiClock className="w-4 h-4" />
                              {relatedPost.readTime}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Categories */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {dict?.blog?.post?.categories || "Categories"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(allPosts.map(p => p.category))].map((category) => {
                      const postCount = allPosts.filter(p => p.category === category).length;
                      return (
                        <Link
                          key={category}
                          href={`/${lang}/blog`}
                          className="group px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-[#0057B8] hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-2"
                        >
                          <span>{category}</span>
                          <span className="px-1.5 py-0.5 bg-gray-200 group-hover:bg-white/20 text-gray-600 group-hover:text-white rounded-full text-xs">
                            {postCount}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
  );
}