import React from 'react';

const MarketplaceHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 md:px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-white">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              {/* SVG content here */}
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">AI Experts</h2>
        </div>
        <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-white/60 flex border-none bg-white/10 items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-white/10 focus:border-none h-full placeholder:text-white/60 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search" value="" onChange={() => {}}/>
          </div>
        </label>
      </div>
      <div className="flex flex-1 justify-end gap-4 md:gap-8">
        <div className="hidden lg:flex items-center gap-9">
          <a className="text-white text-sm font-medium leading-normal" href="#">Ana Sayfa</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">Nasıl Çalışır?</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">Hesabım</a>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em]" onClick={() => {}}>
          <span className="truncate">Giriş Yap</span>
        </button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChHRtpEyFZcDr3zhTwuPZ8V20J-jv5_WobZcMNAI6fYI2SmffnUqAbFXPAxQZw3S2sZRG2GU4k9GrHeHLyZ9l1KwlvuDtMQLR6cyzaezCBq9rOoMNGcL_RN0FhbsO4Blb73DIpguTPh5WAxW0_iBw4m5eg5RD1fDcU2l57-xjfB8m17HZzMsLldxk6fNdo4RllBqdA_wJ98YaLhuZjAicK8YbKm2obs9Zi1i01KZU4gr1UD-fFYkHPcZuSuWR_otNTcr8KtVgmsb0")'}}></div>
      </div>
    </header>
  );
};

export default MarketplaceHeader;
