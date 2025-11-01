import React from 'react';

const VideoCallUI: React.FC = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Main Video Stream (AI Avatar) */}
      <div className="absolute inset-0 z-0 h-full w-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNZWSHL-3LneR_e7QD5BlHxh6e1jW0SsvbqKa-s67nc9WlSJEHgZu1KeP44n2svhtIpwVwXhPE_Q93XUnPlgILrhRQomQRVm0LjhGbtKnkYKRH6oJTbTLJnnMArVdYlofwK-PQZxo3C8qo3DYkaTl4jIQZJ8y0kViI7Ymc6PcVkTOCmjaV_3Xhz6PF88oOu4Y6BSixjxkfhWrAMY22Cm_XeB6Evi3YZ5fUbnKTGmlfDwtegNJkkiwzJ7l7t0WSaahaOjxjoZLpRnM')"}}>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-6 md:p-8 lg:p-10">
        {/* Top Bar: Avatar Info & Timer */}
        <div className="flex items-start justify-between">
          <div className="rounded-lg bg-black/40 p-4 backdrop-blur-sm">
            <h1 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] font-display">Dr. Ada Lovelace</h1>
            <p className="text-white/80 text-base font-normal leading-normal font-display">Finans Uzmanı</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-black/40 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <p className="text-white text-base font-bold leading-tight tracking-[-0.015em] font-display">12:34</p>
          </div>
        </div>
        {/* Bottom Section: User Video and Controls */}
        <div className="flex w-full flex-col items-center gap-6">
          {/* User Video (Picture-in-Picture) */}
          <div className="ml-auto h-40 w-64 self-end overflow-hidden rounded-xl border-2 border-white/20 shadow-lg md:h-48 md:w-80">
            <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA5kUJV1UYXtwBFsELXzXfcUnE36eYwGhnazldTNezj-46tds9Wo-FQnpN7tJPQwTauEDH4k9qVki95sP1_7A-uLlPm_zUC7ZNS23tMDSEit3joUT7U8lKhKTu-u3pylJMC5mxgX3VBmCrKbIENHpJZzVNh4Kwutfdm38rtax-_Kt2_x95-_t9_QTZLm4RUMzYk3M8cc8vHiOXM0S3HZjQWJh2w9WEJgD_XDSwew_K0NKDdSbKk-vJUl22Fxzb427XbcR1bWZScOw" alt="User's video feed during the call."/>
          </div>
          {/* Control Toolbar */}
          <div className="flex items-center justify-center gap-2 rounded-full bg-black/50 p-3 backdrop-blur-md">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" onClick={() => {}}>
              <span className="material-symbols-outlined">mic</span>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" onClick={() => {}}>
              <span className="material-symbols-outlined">videocam</span>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" onClick={() => {}}>
              <span className="material-symbols-outlined">screen_share</span>
            </button>
            <div className="mx-2 h-6 w-px bg-white/20"></div>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D9534F] text-white transition-transform hover:scale-105" onClick={() => {}}>
              <span className="material-symbols-outlined">call_end</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCallUI;
