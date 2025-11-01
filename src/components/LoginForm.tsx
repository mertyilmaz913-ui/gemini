import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden" style={{fontFamily: '"Space Grotesk", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 flex flex-1 justify-center items-center py-10 sm:py-20">
          <div className="layout-content-container flex flex-col w-full max-w-md">
            <div className="flex flex-col items-center justify-center text-center pb-8">
              <svg className="text-primary mb-4" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V4H8"></path>
                <rect height="12" rx="2" width="16" x="4" y="8"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
              <h1 className="text-white tracking-tight text-3xl font-bold leading-tight">Tekrar Hoş Geldin</h1>
              <p className="text-zinc-400 text-base font-normal leading-normal pt-2">Yapay Zeka Uzmanınızla Tanışın</p>
            </div>
            <div className="flex flex-col gap-4 px-4">
              <label className="flex flex-col w-full">
                <p className="text-white text-base font-medium leading-normal pb-2">E-posta veya Kullanıcı Adı</p>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-white/10 bg-[#222210] h-14 placeholder:text-zinc-500 p-4 text-base font-normal leading-normal" placeholder="E-postanızı veya kullanıcı adınızı girin" value="" onChange={() => {}}/>
              </label>
              <label className="flex flex-col w-full">
                <div className="flex justify-between items-center pb-2">
                  <p className="text-white text-base font-medium leading-normal">Şifre</p>
                  <a className="text-primary/80 text-sm font-normal leading-normal underline hover:text-primary" href="#">Şifremi Unuttum?</a>
                </div>
                <div className="relative w-full">
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-white/10 bg-[#222210] h-14 placeholder:text-zinc-500 p-4 pr-12 text-base font-normal leading-normal" placeholder="Şifrenizi girin" type="password" value="" onChange={() => {}}/>
                  <button aria-label="Toggle password visibility" className="absolute inset-y-0 right-0 flex items-center pr-4 text-zinc-400 hover:text-white" onClick={() => {}}>
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </label>
              <button className="flex items-center justify-center font-bold text-base text-black bg-primary rounded-lg h-14 mt-4 hover:bg-yellow-400 transition-colors duration-200" onClick={() => {}}>
                Giriş Yap
              </button>
            </div>
            <div className="px-4 py-6 text-center">
              <p className="text-zinc-400 text-base font-normal leading-normal">
                Hesabın yok mu? <a className="font-bold text-primary hover:underline" href="#">Kayıt Ol</a>
              </p>
            </div>
            <div className="flex items-center px-4 py-2">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-4 text-zinc-500 text-sm">veya</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>
            <div className="px-4 py-4">
              <button className="flex w-full items-center justify-center font-medium text-base text-white bg-white/5 border border-white/10 rounded-lg h-14 hover:bg-white/10 transition-colors duration-200" onClick={() => {}}>
                Misafir Olarak Devam Et
              </button>
            </div>
            <div className="pt-12 px-4 text-center">
              <p className="text-zinc-500 text-xs">
                <a className="hover:text-white underline" href="#">Kullanım Koşulları</a> • <a className="hover:text-white underline" href="#">Gizlilik Politikası</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
