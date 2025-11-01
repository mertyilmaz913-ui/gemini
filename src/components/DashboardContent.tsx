import React from 'react';
import ExpertCard from './ExpertCard';

const experts = [
  { name: 'Dr. Elara', specialty: 'Kuantum Fizik Uzmanı', status: 'Çevrimiçi', rating: 4.9, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkMM3zxYdJqp7lpKSkzBc-7OweOWSbMHk99DOk5Rzta-LFsTk3C_ZFH_PcaGewRYZ87ePh696OMXvauZcxwl3njVPXWQXCf131Sv6ROyjF_u4j8tJ6xaeO9yH9bApXBg2GXQu7KFqCLhwoUfmZMaBttLLOSpbrP7oLHcMU7yDGqbGPVF_lDPd4-3NVl-PuBKufxT9-iSmYSfWc--tYSgbE-k3POL6ygkanNWkIr5AZp1QR_PZkzd5_WDcV3a35vPo1mp_bUvoUcy8' },
  { name: 'Alex Reed', specialty: 'Yatırım Stratejileri', status: 'Çevrimiçi', rating: 4.8, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkNKHnfAa5WMyyDF1WLSjSrz1YiXi7o7J4LPHPwtQsAiCWfYx6yp7iDy6H81DVAx7FgyTB3Z9Fg6fcMIBm21xUospXpt-3vrnSFVlZzpFGJGqiB9P2KBrE__txI94UIJitxiSACTjEvs4XcfXmNKPPZMuYQSODjvQSqsOUCngmlAHmtbLPf3N2FyP0aVquiCUE9do-ulA8j5MKH0obySc5q8bfGMEAHyjktXATSpU-GEZciHxZua_n6AhRHBIeypNdVj-FsMvwuyg' },
  { name: 'Javier Cruz', specialty: 'Kıdemli Yazılım Mimarı', status: 'Çevrimiçi', rating: 4.7, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiT_ucvzVmoqOuoy9BlHTUqpWkU96x1GVBGwElOSyGzo_vttzjmqSx3hef3Xle67EPoR2047owbebmCInOWiaZVXTQ9kIl5cdactPc3EhLwjudbmHgtuVDLl4etuvI4HZ9pb79fvMdRp_6fQJ0-IEEiTRHrjTpczlOfdIc0o5sOiL2y-J9YcZE79_RwTVXV7LwAO9v7TbZV2VeuEfgQXNgZlRKTPxM9W-YXUxKGcOBUPSAYmdZz11Hw3jRTPf1IXsMjx36JMlNYFA' },
  { name: 'Kenji Tanaka', specialty: 'Makine Öğrenmesi Uzmanı', status: 'Meşgul', rating: 5.0, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4RCs6SRvTr2wjGkoow0r4Zne2qOht_KhKi4zjtn6a3bkkXB0qxD0faYtl9BCrEVxLFeAiNpQrF-CoZ1MHHh6vkBVIqAkV9PKddG_0knzwiqQO_V9wacJ_CsFfvYcCYf0CSOq2FAok5csTor0LEzNT2AU2iAxoeNTdgHgmndUC21mtXC0v1OQ7vB47NL3GVUWk51EvZ47DFzEx8rNkRuWIKekAtr8Uka63fZYvV0KmP7lLVdRB9eH4a9_JMvx8zU-X3077SLqW6pY' },
];

const DashboardContent: React.FC = () => {
  return (
    <main className="flex flex-col gap-12 mt-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-black tracking-tighter">Hoş Geldin, Elif!</h1>
        <div className="relative w-full">
          <div className="text-white/60 absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 placeholder:text-white/60 text-white border-none focus:ring-2 focus:ring-primary" placeholder="Bir uzman veya konu ara..." type="search"/>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Size Özel Öneriler</h2>
          <a className="text-primary text-sm font-medium" href="#">Tümünü Gör</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {experts.map((expert, index) => (
            <div key={index} className="flex flex-col gap-3 pb-3 group">
              <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: `url(${expert.imageUrl})`}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 bg-primary text-background-dark font-bold text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={() => {}}>Görüşme Başlat</button>
              </div>
              <div>
                <p className="text-white text-base font-medium leading-normal">{expert.name}</p>
                <p className="text-white/60 text-sm font-normal leading-normal">{expert.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Son Görüşmeler</h2>
          <a className="text-primary text-sm font-medium" href="#">Tümünü Gör</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Recent conversations would be mapped here */}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Trend Uzmanlık Alanları</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a className="block p-4 bg-white/5 rounded-lg text-center hover:bg-white/10 transition-colors" href="#">
            <p className="text-lg text-primary">📈</p>
            <p className="font-medium mt-2">Finans</p>
          </a>
          <a className="block p-4 bg-white/5 rounded-lg text-center hover:bg-white/10 transition-colors" href="#">
            <p className="text-lg text-primary">❤️</p>
            <p className="font-medium mt-2">Sağlık</p>
          </a>
          <a className="block p-4 bg-white/5 rounded-lg text-center hover:bg-white/10 transition-colors" href="#">
            <p className="text-lg text-primary">💻</p>
            <p className="font-medium mt-2">Yazılım</p>
          </a>
          <a className="block p-4 bg-white/5 rounded-lg text-center hover:bg-white/10 transition-colors" href="#">
            <p className="text-lg text-primary">🧠</p>
            <p className="font-medium mt-2">Makine Öğrenmesi</p>
          </a>
        </div>
      </section>
    </main>
  );
};

export default DashboardContent;
