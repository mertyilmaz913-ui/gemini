import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl rounded-xl bg-white/5 border border-white/10 px-6 py-16 text-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-white sm:text-4xl">Geleceğin Danışmanlık Deneyimine Hazır mısınız?</h2>
          <p className="max-w-2xl text-base text-white/70">Yapay zeka destekli uzmanlarımızla tanışın ve bilgiye erişimin en hızlı yolunu keşfedin.</p>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" onClick={() => {}}>
            <span className="truncate">Şimdi Başlayın</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
