import React, { useState } from 'react';

const MockTranscript: React.FC = () => (
  <>
    <div className="mb-4">
      <p className="font-bold text-brand-gold">AI Psikolog</p>
      <p className="text-white/90">
        Merhaba, bugünkü seansımıza hoş geldiniz. Sizi dinliyorum, nasılsınız?
      </p>
    </div>
    <div className="mb-4">
      <p className="font-bold text-white">Siz</p>
      <p className="text-white/90">
        Merhaba, teşekkür ederim. Son zamanlarda biraz bunalmış hissediyorum. İş
        yerindeki baskı oldukça arttı.
      </p>
    </div>
    <div>
      <p className="font-bold text-brand-gold">AI Psikolog</p>
      <p className="text-white/90">
        Anlıyorum. Bu baskının kaynağı hakkında biraz daha detay verebilir
        misiniz? Belki birlikte çözüm yolları bulabiliriz.
      </p>
    </div>
  </>
);

const VideoCallUI: React.FC = () => {
  const [isTranscriptVisible, setIsTranscriptVisible] = useState(false);

  return (
    <div className="relative flex h-screen w-full overflow-hidden">
      {/* Main Video Stream (AI Avatar) */}
      <div className="flex-grow h-full bg-cover bg-center transition-all duration-300" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNZWSHL-3LneR_e7QD5BlHxh6e1jW0SsvbqKa-s67nc9WlSJEHgZu1KeP44n2svhtIpwVwXhPE_Q93XUnPlgILrhRQomQRVm0LjhGbtKnkYKRH6oJTbTLJnnMArVdYlofwK-PQZxo3C8qo3DYkaTl4jIQZJ8y0kViI7Ymc6PcVkTOCmjaV_3Xhz6PF88oOu4Y6BSixjxkfhWrAMY22Cm_XeB6Evi3YZ5fUbnKTGmlfDwtegNJkkiwzJ7l7t0WSaahaOjxjoZLpRnM')" }}>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Transcript Sidebar */}
      <div className={`w-96 bg-brand-dark/80 backdrop-blur-md transition-all duration-300 ease-in-out ${isTranscriptVisible ? 'ml-0' : '-ml-96'}`}>
        <div className="p-6 h-full overflow-y-auto">
          <h2 className="text-xl font-bold text-white mb-6">Canlı Transkript</h2>
          <MockTranscript />
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center justify-center gap-4 rounded-full bg-black/50 p-3 backdrop-blur-md">
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
            {/* Mute Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
            {/* Camera Off Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55a2.5 2.5 0 01.955 1.888V17a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4.112A2.5 2.5 0 0113.45 4.955L15 10z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1l22 22" /></svg>
          </button>
           <button onClick={() => setIsTranscriptVisible(!isTranscriptVisible)} className={`flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors ${isTranscriptVisible ? 'bg-brand-gold/80' : 'bg-white/10 hover:bg-white/20'}`}>
            {/* Transcript Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </button>
          <div className="mx-2 h-6 w-px bg-white/20"></div>
          <button className="flex h-14 w-28 items-center justify-center rounded-full bg-brand-gold text-brand-dark font-bold transition-transform hover:scale-105">
            Görüşmeyi Bitir
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCallUI;
