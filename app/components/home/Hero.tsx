"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[400px] overflow-hidden bg-gray-100 dark:bg-gray-900 sm:min-h-[500px] lg:min-h-[600px]">
      <div className="container">
        <div className="mx-auto max-w-[1440px] px-4">
          <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl space-y-4 text-left sm:space-y-6"
            >
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                আপনার পছন্দের{" "}
                <span className="text-primary-600">সেরা পণ্য</span>
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl">
                আমাদের ই-কমার্স সাইটে পাচ্ছেন সেরা মানের পণ্য সর্বনিম্ন মূল্যে। 
                এখনই কিনুন এবং পেয়ে যান আকর্ষণীয় ছাড়।
              </p>
              <div className="flex flex-col items-start gap-4 sm:flex-row">
                <Link
                  href="/category/fashion"
                  className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-700 sm:text-base"
                >
                  শপিং করুন
                </Link>
                <Link
                  href="/category/electronics"
                  className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:text-base"
                >
                  ক্যাটাগরি দেখুন
                </Link>
              </div>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative hidden md:block w-full max-w-md lg:max-w-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
                  alt="Hero Image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
