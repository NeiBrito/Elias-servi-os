import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#1e40af] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 transition-all hover:bg-white/10">
              <div className="mb-6 p-4 rounded-2xl bg-[#fbbf24] text-[#1e40af] shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-montserrat font-extrabold mb-4 uppercase tracking-tighter tracking-widest">{feature.title}</h4>
              <p className="text-blue-100 leading-relaxed text-sm font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;