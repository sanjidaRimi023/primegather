
"use client"
import { motion } from 'framer-motion';
import { LucideIcon, Zap, Target, PartyPopper, ClipboardList, Sparkles, GanttChart, Trophy, ArrowRight } from 'lucide-react';
import Image from 'next/image';


interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const coreValues: Value[] = [
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We push boundaries, integrating the latest technology and creative concepts for truly unique events.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Every detail is meticulously planned and flawlessly executed, ensuring a seamless and stress-free experience.',
  },
  {
    icon: PartyPopper,
    title: 'Experience',
    description: 'Our focus is on the human element—creating joy, deep connection, and lasting, positive impressions.',
  },
];

const processSteps: ProcessStep[] = [
  {
    icon: ClipboardList,
    title: 'Discovery & Vision',
    description: 'We start by deeply listening to your goals, audience, and core vision for the event.',
    delay: 0.1,
  },
  {
    icon: Sparkles,
    title: 'Strategic Conceptualization',
    description: 'Our team crafts a unique theme, budget, and logistical strategy tailored specifically to your needs.',
    delay: 0.3,
  },
  {
    icon: GanttChart,
    title: 'Flawless Execution',
    description: 'We manage all vendors, timelines, and on-site logistics, guaranteeing smooth, professional delivery.',
    delay: 0.5,
  },
  {
    icon: Trophy,
    title: 'Post-Event Review',
    description: 'We follow up with detailed analysis and feedback to ensure continuous improvement and celebrate success.',
    delay: 0.7,
  },
];



const ValueCard: React.FC<Value> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="p-6 md:p-8 bg-orange-400/5 border border-orange-100/50 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
   
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <Icon className="w-8 h-8 text-orange-600 mb-4" />
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ProcessStep: React.FC<ProcessStep> = ({ icon: Icon, title, description, delay }) => {
  
    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { delay, duration: 0.6 } 
        },
    };

    return (
        <motion.div
            className="flex items-start space-x-4 p-4 rounded-lg bg-white"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className="shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
                <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </motion.div>
    );
};




export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
     
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/event-hero.jpg")', filter: 'brightness(0.5)' }} /> 
        <div className="absolute inset-0 bg-orange-900/40" />
        
        <motion.div
          className="relative text-center max-w-4xl p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
            variants={itemVariants}
          >
            Gathering Excellence.
          </motion.h1>
          <motion.p
            className="mt-4 text-xl md:text-2xl text-orange-200"
            variants={itemVariants}
          >
            We dont just plan events; we **orchestrate memories**. Welcome to PrimeGather.
          </motion.p>
        </motion.div>
      </div>

      {/* 2. Our Story / Mission */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
            >
                {/*  */}
                <div className="w-full h-80 rounded-xl shadow-2xl relative overflow-hidden">
                    <Image width={1000} height={1000} src="/image2.jpg" alt="Our founding team collaborating" className=" object-cover" />
                </div>
            </motion.div>
            
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 md:order-2"
            >
                <h2 className="text-base font-semibold text-orange-600 tracking-wider uppercase">Our Foundation</h2>
                <h3 className="mt-2 text-4xl font-extrabold text-gray-900">
                    From Vision to Flawless Execution
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                    PrimeGather was founded on the simple belief that events should elevate and inspire. Tired of the logistical headaches and predictable outcomes, our founders envisioned a service where creativity meets military-grade precision. Today, we stand as a trusted partner for global brands and private clients alike, ensuring every gathering is a strategic success and a profound experience.
                </p>
                <p className="mt-4 text-lg font-semibold text-gray-800 border-l-4 border-orange-500 pl-3 italic">
                Our mission is to transform your highest expectations into a tangible, celebrated reality
                </p>
            </motion.div>
        </div>
      </section>
      
      <hr className="max-w-6xl mx-auto border-gray-200" />

      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-base font-semibold text-orange-600 tracking-wider uppercase">The Core</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            Principles that Guide Every PrimeGather Event
          </h3>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>
      
      <hr className="max-w-6xl mx-auto border-gray-200" />

      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-base font-semibold text-orange-600 tracking-wider uppercase text-center">Our Methodology</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
            The Four Steps to Unforgettable Events
          </h3>
          
       
          <div className="max-w-3xl mx-auto space-y-6 relative">
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block" />

            {processSteps.map((step, index) => (
              <div 
                key={step.title} 
                className={`relative flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-4 w-4 h-4 bg-orange-600 rounded-full z-10 ring-8 ring-white" />
                
                <div className="w-full md:w-[45%]">
                    <ProcessStep {...step} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      
      <hr className="max-w-6xl mx-auto border-gray-200" />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-orange-600 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">
                Ready to orchestrate your next unforgettable event?
            </h3>
            <p className="mt-4 text-xl text-orange-200">
                Lets discuss your vision and turn it into a celebrated reality.
            </p>
            
            <motion.a
                href="/contact" 
                className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-orange-700 bg-white hover:bg-orange-50 transition duration-300"
                
                initial="initial"
                animate="animate"
            >
                Start Planning Now <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
        </motion.div>
      </section>
      
   
    </div>
  );
}