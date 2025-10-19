import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart } from 'lucide-react';

interface BlogPostProps {
  post: {
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
  };
  locale?: string;
  onBack?: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, locale = 'en', onBack }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.data.title,
        text: post.data.description,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <article className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Back Button */}
        {onBack && (
          <motion.button
            onClick={onBack}
            className="flex items-center space-x-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </motion.button>
        )}

        {/* Article Header */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {post.data.heroImage && (
            <motion.div
              className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={post.data.heroImage}
                alt={post.data.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.data.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                {post.data.featured && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-400/90 backdrop-blur-sm text-yellow-900 text-sm rounded-full mb-4">
                    <span>⭐ Featured</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          <div className="text-center mb-8">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {post.data.title}
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {post.data.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.data.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.data.publishDate.toISOString()}>
                  {formatDate(post.data.publishDate)}
                </time>
              </div>
              {post.data.updatedDate && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Updated {formatDate(post.data.updatedDate)}</span>
                </div>
              )}
            </motion.div>
          </div>
        </motion.header>

  
        {/* Article Footer */}
        <motion.footer
          className="mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {post.data.tags.map((tag) => (
                <a
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 text-sm rounded-full transition-colors"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </motion.button>

              <motion.button
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-4 h-4" />
                <span>Like</span>
              </motion.button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Related Articles</h3>
            <div className="text-center py-8">
              <p className="text-gray-600">
                More articles coming soon! Check back later for related content.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </article>
  );
};

export default BlogPost;