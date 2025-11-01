import React from 'react';

const ExpertProfileCard: React.FC = () => {
  return (
    <div className="md:col-span-1 lg:col-span-4 flex flex-col items-center md:items-start space-y-6">
      <div className="w-full max-w-sm md:max-w-none p-6 bg-black/20 rounded-xl border border-white/10 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="relative w-full aspect-[3/4] mb-6">
          <div className="bg-center bg-no-repeat bg-cover rounded-lg w-full h-full" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfwETn_HlT7Urg8AGSxb4ETaRnNR0FIxjYZA2Se351YMB1T0Wf5Sak4bnOUwC4ZR9vODyHgffUHxfJmiwtv2gV3ZWn48CN-kFpSxEl6jTQK_zmKrz3RK_EG3Lu6iM4J6vJys8vba8lyV7SVaumYkYSDnAtQ1un15cX5KoQd1JK19NOwMPQgbftbtpT5m2jgouEdy8WeXhOyufwN9i829E8KjSHSw5A7txo0OGaHBiZu7B-de6fXMCjscYq4_dMVz1x6FFH15btoSE")'}}></div>
        </div>
        <h1 className="text-white text-3xl font-bold leading-tight tracking-tight">Dr. Elara Vance</h1>
        <p className="text-[#A0A0A0] text-lg font-normal leading-normal mt-1">Kuantum Fizik Uzmanı</p>
        <div className="flex items-center gap-2 mt-4">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          <p className="text-[#A0A0A0] text-sm font-normal leading-normal">Çevrimiçi</p>
        </div>
        <div className="flex w-full flex-col gap-4 mt-6">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-4 bg-primary text-[#121212] text-base font-bold leading-normal tracking-wide w-full hover:bg-primary/90 transition-colors" onClick={() => {}}>
            <span className="material-symbols-outlined">videocam</span>
            <div className="flex flex-col items-center flex-1 -ml-6">
              <span className="truncate">Görüntülü Görüşme Başlat</span>
              <span className="text-xs font-normal text-black/60">₺150 / 30 dk</span>
            </div>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-4 bg-white/10 text-white text-base font-bold leading-normal tracking-wide w-full hover:bg-white/20 transition-colors" onClick={() => {}}>
            <span className="material-symbols-outlined">call</span>
            <div className="flex flex-col items-center flex-1 -ml-6">
              <span className="truncate">Sesli Görüşme Başlat</span>
              <span className="text-xs font-normal text-white/60">₺100 / 30 dk</span>
            </div>
          </button>
        </div>
        <div className="flex flex-wrap gap-3 mt-6 w-full">
          <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-white/10 p-4 items-start bg-black/20">
            <p className="text-white tracking-light text-2xl font-bold leading-tight">1,250</p>
            <div className="flex items-center gap-2">
              <p className="text-[#A0A0A0] text-sm font-normal leading-normal">Toplam Görüşme</p>
            </div>
          </div>
          <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-white/10 p-4 items-start bg-black/20">
            <p className="text-white tracking-light text-2xl font-bold leading-tight">4.9/5</p>
            <div className="flex items-center gap-2">
              <p className="text-[#A0A0A0] text-sm font-normal leading-normal">Ortalama Puan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfileCard;
