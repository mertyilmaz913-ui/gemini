import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-solid border-white/10 py-10">
      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-4">
          <div className="text-primary">
            <svg className="size-6" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold text-white">AI Uzman</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a className="text-white/70 hover:text-white transition-colors" href="#">Gizlilik Politikası</a>
          <a className="text-white/70 hover:text-white transition-colors" href="#">Kullanım Koşulları</a>
          <a className="text-white/70 hover:text-white transition-colors" href="#">Bize Ulaşın</a>
        </div>
        <p className="text-sm text-white/50">© 2024 AI Uzman. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
