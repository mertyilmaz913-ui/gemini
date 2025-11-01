import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="flex flex-col gap-12 px-4">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl">Nasıl Çalışır?</h2>
          <p className="text-white/80 text-base font-normal leading-normal">Sadece üç basit adımda ihtiyacınız olan uzman bilgisine ulaşın.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/20 text-primary">
              <span className="material-symbols-outlined">person_search</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-white">1. Uzmanınızı Seçin</h3>
              <p className="text-sm text-white/70">Geniş uzmanlık alanlarımızdan ihtiyacınıza uygun AI avatarını seçin.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/20 text-primary">
              <span className="material-symbols-outlined">video_call</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-white">2. Anında Bağlanın</h3>
              <p className="text-sm text-white/70">Tek bir tıkla beklemeden anında görüntülü görüşmeyi başlatın.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/20 text-primary">
              <span className="material-symbols-outlined">forum</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-white">3. Cevaplarınızı Alın</h3>
              <p className="text-sm text-white/70">Sorularınızı sorun, projeleriniz için danışmanlık alın ve çözümlere ulaşın.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
