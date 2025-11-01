import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 py-4">
      <div className="flex items-center gap-4">
        <div className="text-primary">
          <svg className="size-6" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
          </svg>
        </div>
        <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">AI Uzman</h2>
      </div>
      <nav className="hidden items-center gap-9 md:flex">
        <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Özellikler</a>
        <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Nasıl Çalışır?</a>
        <a className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">S.S.S.</a>
      </nav>
      <div className="flex flex-1 justify-end">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" onClick={() => {}}>
          <span className="truncate">Giriş Yap</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
