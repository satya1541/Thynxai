import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ThynxAI and how does it work?",
    answer: "ThynxAI is an all-in-one technology platform that helps you go from idea to launch. It combines four powerful services: Idea Lab for AI-powered planning, Thynx Studio for team management, Thynx Repo for code hosting, and Thynx Free Market for selling your creations. Each service is powered by advanced AI to maximize your productivity.",
  },
  {
    question: "How does the Idea Lab AI consultant work?",
    answer: "Idea Lab uses advanced AI to analyze your project idea and provide comprehensive feasibility analysis, requirement mapping, cost estimates, and recommended team structures. Simply describe your idea, and our AI generates a detailed Idea Lab Report that serves as your project blueprint.",
  },
  {
    question: "What platforms does Thynx Studio integrate with?",
    answer: "Thynx Studio integrates with major hiring platforms including LinkedIn, Fiverr, Indeed, and Naukri. This allows you to find and connect with talent across multiple platforms from a single dashboard, along with built-in project management tools similar to Jira.",
  },
  {
    question: "Is there really zero commission on the marketplace?",
    answer: "Yes, Thynx Free Market charges absolutely zero commission on sales. Creators keep 100% of their earnings. We believe in empowering creators and developers by eliminating unnecessary fees that cut into your profits.",
  },
  {
    question: "How secure is the Thynx Repo for my code?",
    answer: "Thynx Repo uses enterprise-grade security including end-to-end encryption, secure access controls, and regular security audits. Your code is protected with the same level of security used by major financial institutions.",
  },
  {
    question: "Can I try ThynxAI before committing to a plan?",
    answer: "Absolutely! All our plans come with a 14-day free trial with full access to all features. No credit card required to start. This gives you plenty of time to explore the platform and see how it can benefit your projects.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer email support for Starter plans, priority support for Professional plans, and dedicated account managers for Enterprise customers. Our support team is available to help you get the most out of ThynxAI.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-100 px-6"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger className="text-left text-gray-900 font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
