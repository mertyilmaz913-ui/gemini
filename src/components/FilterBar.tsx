import React from 'react';

const FilterBar: React.FC = () => {
  return (
    <div className="flex gap-3 p-3 overflow-x-auto">
      <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 pl-4 pr-2 text-primary ring-1 ring-primary" onClick={() => {}}>
        <p className="text-sm font-medium leading-normal">Tümü</p>
      </button>
      <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/10 pl-4 pr-4" onClick={() => {}}>
        <p className="text-white text-sm font-medium leading-normal">Finans</p>
      </button>
      <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/10 pl-4 pr-4" onClick={() => {}}>
        <p className="text-white text-sm font-medium leading-normal">Sağlık</p>
      </button>
      <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/10 pl-4 pr-4" onClick={() => {}}>
        <p className="text-white text-sm font-medium leading-normal">Yazılım Geliştirme</p>
      </button>
      <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/10 pl-4 pr-4" onClick={() => {}}>
        <p className="text-white text-sm font-medium leading-normal">Makine Öğrenmesi</p>
      </button>
      <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/10 pl-4 pr-4" onClick={() => {}}>
        <p className="text-white text-sm font-medium leading-normal">Veri Analizi</p>
      </button>
    </div>
  );
};

export default FilterBar;
