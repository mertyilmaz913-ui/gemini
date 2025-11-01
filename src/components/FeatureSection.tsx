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
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-primary">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-bold leading-tight">7/24 Erişim</h3>
              <p className="text-white/70 text-sm font-normal leading-normal">Gece veya gündüz fark etmeksizin, ihtiyacınız olduğu her an bir uzmana danışın.</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-primary">
              <span className="material-symbols-outlined">cases</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-bold leading-tight">Çoklu Uzmanlık Alanı</h3>
              <p className="text-white/70 text-sm font-normal leading-normal">Finanstan sağlığa, hukuktan teknolojiye kadar geniş bir yelpazede uzmanlık.</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-primary">
              <span className="material-symbols-outlined">bolt</span>
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
