import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

// todo: remove mock functionality
const testimonials = [
  {
    quote: "ThynxAI transformed how we approach product development. The Idea Lab alone saved us months of research and planning.",
    name: "Sarah Chen",
    role: "CTO",
    company: "TechStart Inc",
    initials: "SC",
  },
  {
    quote: "The integration with major hiring platforms through Thynx Studio made building our team incredibly efficient. Highly recommended.",
    name: "Michael Rodriguez",
    role: "Founder",
    company: "DevFlow",
    initials: "MR",
  },
  {
    quote: "Zero commission on the marketplace is a game-changer. We've increased our revenue by 30% since switching to Thynx Free Market.",
    name: "Emily Watson",
    role: "Product Lead",
    company: "CodeCraft",
    initials: "EW",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Loved by Teams Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience with ThynxAI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="p-8 h-full border-gray-100/50 bg-white shadow-md"
                data-testid={`card-testimonial-${index}`}
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
