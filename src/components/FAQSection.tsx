"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import clsx from "clsx"

const faqs = [
  {
    question: "What services are included in your packages?",
    answer: (
      <div>
        Our services are bundled into three boxes:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Small Box:</strong> Digital foundation (website, social posts, reviews).</li>
          <li><strong>Medium Box:</strong> Data-driven growth (paid ads, video content, email marketing).</li>
          <li><strong>Large Box:</strong> Full digital transformation (online ordering, loyalty programs, delivery platform setup).</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can we choose between the Small, Medium, or Large Box?",
    answer:
      "No, every restaurant starts with the Small Box to build a solid digital foundation. Once that’s in place and delivering results, we’ll move you up to the Medium and Large Boxes as your restaurant grows and is ready for the next stage.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "Nope! We believe in results, not contracts. You can cancel anytime if you’re not satisfied, but most restaurants stay because they love the growth they see.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track real business metrics, such as foot traffic and revenue, not just likes and followers. You’ll also get a monthly performance report to see exactly how your restaurant is growing.",
  },
  {
    question: "How soon can I see results?",
    answer:
      "While social media growth takes consistency, many restaurants see improvements in engagement and foot traffic within 2–3 months of working with us.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "No, every restaurant starts with the Small Box to build a solid digital foundation. Once that’s in place and delivering results, we’ll move you up to the Medium and Large Boxes as your restaurant grows and is ready for the next stage.",
  },
  {
    question: "Will I have to share my login credentials?",
    answer:
      "No, you don’t need to share your personal login details. We use secure, approved tools that allow us to manage your social accounts without compromising your privacy.",
  },
  {
    question: "What kind of content will you post?",
    answer:
      "We create custom, high-quality content tailored to your restaurant. We’ll use the raw photos, videos, and details you provide and turn them into scroll-stopping, polished posts—no random stock images unless absolutely necessary.",
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0, transition: { duration: 0.6 } } : { opacity: 0, y: 40, transition: { duration: 0.6 } }}
      className="max-w-5xl mx-auto px-4 pb-20"
    >
      <h2 className="text-3xl md:text-4xl font-apfel font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        <Accordion
          type="single"
          collapsible
          className="space-y-2"
          onValueChange={(value) => {
            const index = parseInt(value.split("-")[1]);
            setActiveIndex(index === activeIndex ? null : index);
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger
                  className={clsx(
                    "font-bold px-4 rounded hover:no-underline text-start",
                    activeIndex === index
                      ? "bg-primary-blue text-white"
                      : "hover:bg-primary-blue hover:text-white transition-colors duration-300"
                  )}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
