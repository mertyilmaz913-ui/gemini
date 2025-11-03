import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="flex flex-col gap-10 px-4 @container">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl">Platformun Öne Çıkan Özellikleri</h2>
          <p className="text-white/80 text-base font-normal leading-normal">İhtiyacınız olan her an, her konuda uzman desteği parmaklarınızın ucunda.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-0">
          <div className="flex flex-1 flex-col gap-4 rounded-xl bg-white/5 p-6 border border-white/10">
            <div className="text-brand-gold">
              {/* Placeholder for a minimalist 24/7 icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-bold leading-tight">7/24 Erişim</h3>
              <p className="text-white/70 text-sm font-normal leading-normal">Gece veya gündüz fark etmeksizin, ihtiyacınız olduğu her an bir uzmana danışın.</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-xl bg-white/5 p-6 border border-white/10">
            <div className="text-brand-gold">
              {/* Placeholder for a multi-specialty icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-bold leading-tight">Çoklu Uzmanlık Alanı</h3>
              <p className="text-white/70 text-sm font-normal leading-normal">Finanstan sağlığa, hukuktan teknolojiye kadar geniş bir yelpazede uzmanlık.</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-xl bg-white/5 p-6 border border-white/10">
            <div className="text-brand-gold">
              {/* Placeholder for an instant connection icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-bold leading-tight">Anında Bağlantı</h3>
              <p className="text-white/70 text-sm font-normal leading-normal">Bekleme süreleri olmadan saniyeler içinde görüntülü görüşme başlatın.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
