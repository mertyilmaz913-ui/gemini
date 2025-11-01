import React from 'react';

const SideNavBar: React.FC = () => {
  return (
    <aside className="flex w-64 flex-col bg-background-light dark:bg-black/20 p-4 border-r border-white/10">
      <div className="flex flex-col gap-4 sticky top-4">
        <div className="flex gap-3 items-center">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuxH-I_3oULBEXXnehfkU6jPxWENntGljPTJDbBuIave3IDyso-OvGI8BrvcCu7oBfLQST5v37l8ueTZM8S5XR64KvSYmvqV4kvC2dd5xEMFvuIhzl8uxbcfF6SJw23pGLXtv7nWzCmcbShvgss1guPyRtSqAlehYz2XGjrNSLtcNAmrGybKhvKDz5TyIITh0zC5feIDtTFh6UWHNGsantm1cMa5p195WBV0M4F3FGUAVHOwLAQM-9penHK4pqUJJuN7dpOAqMx-U")'}}></div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-medium leading-normal">Elara Vance</h1>
            <p className="text-gray-400 text-sm font-normal leading-normal">elara.v@email.com</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary" href="#">
            <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
            <p className="text-sm font-medium leading-normal">Profilim</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">history</span>
            <p className="text-sm font-medium leading-normal">Görüşme Geçmişim</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium leading-normal">Hesap Ayarları</p>
          </a>
        </nav>
      </div>
      <div className="mt-auto flex flex-col gap-1">
        <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200" href="#">
          <span className="material-symbols-outlined">logout</span>
          <p className="text-sm font-medium leading-normal">Çıkış Yap</p>
        </a>
      </div>
    </aside>
  );
};

export default SideNavBar;
