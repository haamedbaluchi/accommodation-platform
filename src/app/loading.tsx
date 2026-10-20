"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="w-16 h-16 border-6 border-gray-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-medium">
        Loading...
      </p>
    </div>
  );
}
