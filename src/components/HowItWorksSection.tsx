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
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-gold/20 text-brand-gold">
              {/* Placeholder for "Select Expert" icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-white">1. Uzmanınızı Seçin</h3>
              <p className="text-sm text-white/70">Geniş uzmanlık alanlarımızdan ihtiyacınıza uygun AI avatarını seçin.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-gold/20 text-brand-gold">
              {/* Placeholder for "Connect Instantly" icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55a2.5 2.5 0 01.955 1.888V17a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4.112A2.5 2.5 0 0113.45 4.955L15 10z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l-4 4-4-4" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-white">2. Anında Bağlanın</h3>
              <p className="text-sm text-white/70">Tek bir tıkla beklemeden anında görüntülü görüşmeyi başlatın.</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-gold/20 text-brand-gold">
              {/* Placeholder for "Get Answers" icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.745A9.863 9.863 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
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
