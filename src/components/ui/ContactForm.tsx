import React from "react";
import { motion } from "framer-motion";
import { Mail, Globe, MapPin } from 'lucide-react';

interface ContactFormProps {
  locale?: string;
  translations: any;
}

const ContactForm: React.FC<ContactFormProps> = ({ locale = 'en', translations }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {translations.contact?.title || 'Contact Us'}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {translations.contact?.description || 'We are here to help and answer any questions you may have about our AI-powered tools.'}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="glass-morphism rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <motion.div
            variants={itemVariants}
            className="text-center group cursor-pointer"
            onClick={() => window.location.href = 'mailto:support@minicode.net.cn'}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {translations.contact?.info?.email || 'Email'}
            </h3>
            <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
              support@minicode.net.cn
            </p>
          </motion.div>

          {/* Website */}
          <motion.div
            variants={itemVariants}
            className="text-center group cursor-pointer"
            onClick={() => window.open('https://www.minicode.net.cn', '_blank')}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <Globe className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {translations.contact?.info?.website || 'Website'}
            </h3>
            <p className="text-gray-600 group-hover:text-green-600 transition-colors">
              www.minicode.net.cn
            </p>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {translations.contact?.info?.location || 'Location'}
            </h3>
            <p className="text-gray-600">
              China
            </p>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              {locale === 'en' ? 'We typically respond to inquiries within 24 hours during business days.' :
               locale === 'zh' ? '我们通常在工作日24小时内回复您的咨询。' :
               '営業日内は24時間以内にご返信いたします。'}
            </p>
            <p className="text-sm text-gray-500">
              {locale === 'en' ? 'Monday - Friday: 9:00 AM - 6:00 PM (CST)' :
               locale === 'zh' ? '周一至周五：上午9:00 - 下午6:00 (中国标准时间)' :
               '月曜日～金曜日：午前9時～午後6時 (中国標準時)'}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;