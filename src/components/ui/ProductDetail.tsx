import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, ExternalLink } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  learnMore: string;
  icon: string;
  gradient: string;
  features: string[];
  link?: string;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <motion.button
          onClick={handleBack}
          className="flex items-center space-x-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </motion.button>

        {/* Product Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${product.gradient} text-white text-4xl mb-6`}
            whileHover={{
              rotate: 360,
              scale: 1.1
            }}
            transition={{ duration: 0.6 }}
          >
            {product.icon}
          </motion.div>

          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {product.name}
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center space-x-4">
            {product.link && (
              <motion.a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${product.gradient} text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-5 h-5 mr-2" />
                Visit Website
                <ExternalLink className="w-4 h-4 ml-2" />
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={feature}
                className={`glass-morphism rounded-xl p-6 text-center border border-white/20`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${product.gradient} text-white mb-4`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature}
                </h3>
                <p className="text-gray-600 text-sm">
                  Experience the power of {feature} in our innovative solution.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          className="max-w-4xl mx-auto mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-morphism rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Why Choose {product.name}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.name} represents the cutting edge of technology, designed to solve real-world problems with elegant and efficient solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Reliability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built with robust architecture and best practices, ensuring consistent performance and user satisfaction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">User Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Intuitive design and seamless integration make {product.name} accessible to users of all skill levels.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive documentation and responsive support ensure you get the most out of {product.name}.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;