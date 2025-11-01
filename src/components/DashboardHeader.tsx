import React from 'react';

const DashboardHeader: React.FC = () => {
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
      </div>
      <div className="flex flex-1 justify-end gap-4 md:gap-8">
        <div className="hidden lg:flex items-center gap-9">
          <a className="text-primary text-sm font-medium leading-normal" href="#">Ana Sayfa</a>
          <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Uzmanları Keşfet</a>
          <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Hesabım</a>
        </div>
        <button className="relative flex items-center justify-center size-10 text-white hover:text-primary transition-colors" onClick={() => {}}>
          <span className="material-symbols-outlined !text-2xl">notifications</span>
          <span className="absolute top-2 right-2 flex size-2 bg-primary rounded-full"></span>
        </button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChHRtpEyFZcDr3zhTwuPZ8V20J-jv5_WobZcMNAI6fYI2SmffnUqAbFXPAxQZw3S2sZRG2GU4k9GrHeHLyZ9l1KwlvuDtMQLR6cyzaezCBq9rOoMNGcL_RN0FhbsO4Blb73DIpguTPh5WAxW0_iBw4m5eg5RD1fDcU2l57-xjfB8m17HZzMsLldxk6fNdo4RllBqdA_wJ98YaLhuZjAicK8YbKm2obs9Zi1i01KZU4gr1UD-fFYkHPcZuSuWR_otNTcr8KtVgmsb0")'}}></div>
      </div>
    </header>
  );
};

export default DashboardHeader;
