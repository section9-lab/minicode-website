import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  slug: string;
  data: {
    title: string;
    description: string;
    author: string;
    tags: string[];
    publishDate: Date;
    updatedDate?: Date;
    heroImage?: string;
    featured: boolean;
    locale: string;
  };
}

interface BlogListProps {
  posts: BlogPost[];
  locale?: string;
}

const BlogList: React.FC<BlogListProps> = ({ posts, locale = 'en' }) => {
  const formatDate = (date: Date) => {
    const dateObj = new Date(date);
    if (locale === 'zh') {
      return dateObj.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } else if (locale === 'ja') {
      return dateObj.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } else {
      return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  };

  const featuredPosts = posts.filter(post => post.data.featured);
  const regularPosts = posts.filter(post => !post.data.featured);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {locale === 'zh' ? '最新文章' : locale === 'ja' ? '最新の記事' : 'Latest Articles'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === 'zh' ? '来自 MiniCode 团队的洞见、教程和更新' :
             locale === 'ja' ? 'MiniCodeチームからの洞察、チュートリアル、更新情報' :
             'Insights, tutorials, and updates from the MiniCode team'}
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              {locale === 'zh' ? '精选' : locale === 'ja' ? '注目' : 'Featured'}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  className="glass-morphism rounded-2xl overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {post.data.heroImage && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.data.heroImage}
                        alt={post.data.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <time>{formatDate(post.data.publishDate)}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.data.author}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                      {post.data.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.data.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.data.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={`/${locale === 'en' ? '' : locale + '/'}blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {locale === 'zh' ? '阅读文章' : locale === 'ja' ? '記事を読む' : 'Read Article'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              {locale === 'zh' ? '最近文章' : locale === 'ja' ? '最近の記事' : 'Recent Articles'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  className="glass-morphism rounded-xl p-6 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <time>{formatDate(post.data.publishDate)}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.data.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {post.data.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.data.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.data.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={`/${locale === 'en' ? '' : locale + '/'}blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {locale === 'zh' ? '阅读更多' : locale === 'ja' ? 'もっと読む' : 'Read More'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.a>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* No Posts Message */}
        {posts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {locale === 'zh' ? '暂无文章' : locale === 'ja' ? '記事がまだありません' : 'No articles yet'}
              </h3>
              <p className="text-gray-600">
                {locale === 'zh' ? '请稍后查看我们团队的最新洞见和更新。' :
                 locale === 'ja' ? '私たちのチームからの最新の洞察と更新情報をお待ちください。' :
                 'Check back soon for the latest insights and updates from our team.'}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogList;