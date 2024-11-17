import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:col-span-3 bg-white rounded-3xl p-8 shadow-lg text-center"
    >
      <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Looking for a developer to bring your ideas to life? I'm always open to discussing new projects and opportunities.
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="mailto:saikumar.c17@gmail.com"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;