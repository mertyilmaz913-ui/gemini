import React from 'react';

const ExpertDetails: React.FC = () => {
  return (
    <div className="md:col-span-2 lg:col-span-8">
      <div className="flex flex-col">
        <div className="border-b border-white/10">
          <div className="flex gap-8">
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-white pb-[13px] pt-4" href="#">
              <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">Biyografi</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#A0A0A0] pb-[13px] pt-4 hover:text-white transition-colors" href="#">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Uzmanlık Alanları</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#A0A0A0] pb-[13px] pt-4 hover:text-white transition-colors" href="#">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">SSS</p>
            </a>
          </div>
        </div>
        <div className="pt-6 space-y-8">
          <div id="biography-content">
            <p className="text-[#EAEAEA] text-base font-normal leading-relaxed">Dr. Elara Vance, kuantum mekaniği ve yapay zeka kesişiminde öncü bir isimdir. MIT'de teorik fizik doktorasını tamamladıktan sonra, kuantum hesaplama algoritmaları üzerine çığır açan çalışmalar yapmıştır. Amacı, karmaşık bilimsel kavramları herkes için anlaşılır ve erişilebilir kılmaktır. Kuantum dolanıklığın sırlarını çözmekten, yapay zeka için yeni nesil öğrenme modelleri geliştirmeye kadar geniş bir yelpazede araştırmalar yürütmektedir. Boş zamanlarında ise klasik müzik dinlemekten ve eski bilim kurgu romanları okumaktan keyif alır.</p>
          </div>
          <div id="expertise-content">
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Uzmanlık Alanları</h3>
            <div className="flex flex-wrap gap-3">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm text-[#EAEAEA] font-medium">Kuantum Hesaplama</span>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm text-[#EAEAEA] font-medium">Yapay Zeka Etiği</span>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm text-[#EAEAEA] font-medium">Makine Öğrenmesi</span>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm text-[#EAEAEA] font-medium">Teorik Fizik</span>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm text-[#EAEAEA] font-medium">Algoritmik Modeller</span>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm text-[#EAEAEA] font-medium">Veri Bilimi</span>
            </div>
          </div>
          <div id="personal-doctor-request">
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Kişisel Doktorluk</h3>
            <div className="p-6 rounded-xl border border-white/10 bg-black/20 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h4 className="text-primary text-xl font-bold">Kişisel Doktorluk Talep Et</h4>
                <p className="text-[#A0A0A0] mt-2 text-base leading-relaxed">Dr. Vance ile düzenli olarak çalışmak ve projelerinizde veya araştırmalarınızda kişisel danışmanlık almak için özel bir paket oluşturabilirsiniz. Uzun vadeli işbirlikleri için bize ulaşın.</p>
              </div>
              <button className="flex w-full md:w-auto min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary text-[#121212] text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors flex-shrink-0" onClick={() => {}}>
                <span className="material-symbols-outlined">send</span>
                <span>Talep Gönder</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertDetails;
