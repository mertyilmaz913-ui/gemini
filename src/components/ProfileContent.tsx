import React from 'react';

const ProfileContent: React.FC = () => {
  return (
    <main className="flex-1 p-8">
      <div className="mx-auto max-w-4xl">
        {/* PageHeading */}
        <div className="flex flex-wrap justify-between gap-3 mb-8">
          <div className="flex flex-col gap-2">
            <p className="text-white text-4xl font-bold leading-tight tracking-[-0.033em]">Profilim</p>
            <p className="text-gray-400 text-base font-normal leading-normal">Kişisel bilgilerinizi ve abonelik planınızı yönetin.</p>
          </div>
        </div>
        {/* Profile Card Section */}
        <section className="bg-card-dark rounded-xl p-6 border border-white/10">
          {/* ProfileHeader */}
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex gap-5 items-center">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAi0IwTlENNn7mcIT8ICAfqk9OQtPLCHN6qoi48zPozor1Tms_cOl4ckcq4RX8khV67XiC3ZcTT_N8X5ct-ggXA8Lmzmqxdu_bY1HxQJZeRV2Bgvgfynd6GtqwHrEgBalswGO00NzSs1THdBwT5FdLxcOVwZcSz_ISD_jHxHDquYVoGeL53K2V2bowkRziE8-eSR4ADxEvdTG1WJGP9mjTDyDlE3L_cMURbJ2_maSsHoBZaEZYKPtlWygJiL-MJkHiYlzv-fcDLcts")'}}></div>
              <div className="flex flex-col justify-center gap-1">
                <p className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Elara Vance</p>
                <p className="text-gray-400 text-base font-normal leading-normal">elara.v@email.com</p>
                <p className="text-gray-400 text-base font-normal leading-normal">Üyelik Planı: <span className="text-primary font-medium">Premium</span></p>
              </div>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors duration-200 w-full sm:w-auto" onClick={() => {}}>
              <span className="truncate">Profili Düzenle</span>
            </button>
          </div>
        </section>
        {/* Subscription Details Section */}
        <section className="bg-card-dark rounded-xl p-6 mt-8 border border-white/10">
          {/* SectionHeader */}
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">Abonelik Detayları</h2>
          {/* DescriptionList */}
          <div className="grid grid-cols-1 sm:grid-cols-[25%_1fr] gap-x-6">
            <div className="col-span-1 sm:col-span-2 grid grid-cols-subgrid border-t border-t-white/10 py-5">
              <p className="text-gray-400 text-sm font-normal leading-normal">Mevcut Plan</p>
              <p className="text-white text-sm font-normal leading-normal">Premium Aylık</p>
            </div>
            <div className="col-span-1 sm:col-span-2 grid grid-cols-subgrid border-t border-t-white/10 py-5">
              <p className="text-gray-400 text-sm font-normal leading-normal">Yenileme Tarihi</p>
              <p className="text-white text-sm font-normal leading-normal">24 Temmuz 2024</p>
            </div>
            <div className="col-span-1 sm:col-span-2 grid grid-cols-subgrid border-t border-t-white/10 py-5">
              <p className="text-gray-400 text-sm font-normal leading-normal">Ödeme Yöntemi</p>
              <p className="text-white text-sm font-normal leading-normal flex items-center gap-2">
                <svg aria-labelledby="pi-visa" className="w-6 h-auto" role="img" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg"><title id="pi-visa">Visa</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path><path d="M34 1c.6 0 1 .4 1 1v18c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h30z" fill="#FFF"></path><path d="M28.2 10.1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-13.4-5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-4.3-5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" fill="#DDD"></path></svg>
                Visa **** 4242
              </p>
            </div>
          </div>
          <div className="border-t border-t-white/10 pt-5 mt-2 flex flex-col sm:flex-row sm:justify-end gap-3">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-transparent border border-white/20 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto" onClick={() => {}}>
              <span className="truncate">Aboneliği İptal Et</span>
            </button>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors duration-200 w-full sm:w-auto" onClick={() => {}}>
              <span className="truncate">Planı Değiştir</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProfileContent;
