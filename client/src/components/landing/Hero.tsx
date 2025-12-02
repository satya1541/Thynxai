import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import dashboardImage from "@assets/generated_images/ai_dashboard_ui_mockup.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-white/40 to-white pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              AI-Powered Innovation
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              The Operating System{" "}
              <span className="text-primary">of Technology</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              From idea to launch — powered by AI-driven innovation. Transform your vision into reality with our comprehensive technology platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="w-full sm:w-auto gap-2" data-testid="button-hero-start">
                Start with Idea Lab
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2" data-testid="button-hero-explore">
                <Play className="w-4 h-4" />
                Explore ThynxAI
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900" data-testid="text-stat-startups">500+</p>
                <p className="text-sm text-gray-500">Startups Launched</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900" data-testid="text-stat-developers">10k+</p>
                <p className="text-sm text-gray-500">Developers</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900" data-testid="text-stat-uptime">99.9%</p>
                <p className="text-sm text-gray-500">Uptime</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100/50">
              <img
                src={dashboardImage}
                alt="ThynxAI Dashboard"
                className="w-full h-auto"
                data-testid="img-hero-dashboard"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg border border-gray-100 p-4 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">New Project</p>
                  <p className="text-xs text-gray-500">Created just now</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-lg border border-gray-100 p-4 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg">AI</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Analysis Complete</p>
                  <p className="text-xs text-gray-500">Ready to review</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
