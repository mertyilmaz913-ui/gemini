import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <main className="flex-grow">
      <div className="py-20 sm:py-28 @container">
        <div className="flex flex-col-reverse gap-10 px-4 @[960px]:flex-row @[960px]:items-center">
          <div className="flex flex-col gap-8 text-center @[960px]:text-left @[960px]:flex-1">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-4xl font-bold leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                Yapay Zeka Uzmanınız Bir Görüntülü Görüşme Uzağınızda
              </h1>
              <h2 className="text-white/80 text-base font-normal leading-normal md:text-lg">
                Gerçek zamanlı görüntülü görüşme ile yapay zeka uzman avatarlarıyla anında bağlantı kurun ve sorularınıza yanıt bulun.
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row justify-center @[960px]:justify-start">
              <Link to="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-brand-gold text-brand-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-yellow-400 transition-colors">
                <span className="truncate">Giriş Yap</span>
              </Link>
              <Link to="/register" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border border-brand-gold text-brand-gold text-base font-bold leading-normal tracking-[0.015em] hover:bg-brand-gold hover:text-brand-dark transition-colors">
                <span className="truncate">Hemen Başla</span>
              </Link>
            </div>
          </div>
          <div className="w-full @[960px]:flex-1">
            <div className="aspect-square w-full rounded-xl bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDz_CYZKwUsCDkJfFGdB2T5Nel0v1KsQ-O5ZpyXULYS2pXzLEOWnws2SzoARbveoKuCkLahTOWUk5hYyXHDD4-2zNpb_J94ROYjktdq46DBJjuQ1XTo9dKYRVVtbXdjqGlZILqCDrIHA8_A6C9a1zJceOD4zJsFOrYJv44oXEkO65Vr9edpNOHRtm1ANRVGqJXsknpqDdAOpdLZv5ZVgxoVFiIhZQth8Spw8I3zYGN8J9g5lPtiFvBprW_Z7ScHdbkjNnqQgSXHc24")'}}></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
