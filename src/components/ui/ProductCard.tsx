import React from "react";
import { motion } from "framer-motion";
import { Globe } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  learnMore: string;
  icon: string;
  gradient: string;
  features: string[];
  link?: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      className="glass-morphism rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white/80 group relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

      {/* Product Icon */}
      <motion.div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${product.gradient} text-white text-2xl mb-6`}
        whileHover={{
          rotate: 360,
          scale: 1.1
        }}
        transition={{ duration: 0.6 }}
      >
        {product.icon}
      </motion.div>

      {/* Product Content */}
      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
        {product.name}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {product.description}
      </p>

      {/* Features */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <motion.a
        href={`/products/${product.name.toLowerCase()}`}
        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${product.gradient} text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg`}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        {product.learnMore}
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        </motion.a>

      {/* Globe Icon */}
      {product.link && (
        <motion.a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 ml-3 rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:shadow-lg z-10 relative"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            backgroundColor: "#f3f4f6"
          }}
          whileTap={{ scale: 0.95 }}
          title="Visit Website"
          onClick={(e) => {
            // Also try to open manually as backup
            window.open(product.link, '_blank');
            e.stopPropagation();
          }}
        >
          <Globe className="w-5 h-5" />
        </motion.a>
      )}

      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full opacity-10 group-hover:scale-125 transition-transform duration-700"></div>
    </motion.div>
  );
};