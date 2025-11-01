import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4 mt-8">
      <a className="flex size-10 items-center justify-center text-white/60 hover:text-white" href="#">
        <span className="material-symbols-outlined">chevron_left</span>
      </a>
      <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-background-dark rounded-full bg-primary" href="#">1</a>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10" href="#">2</a>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10" href="#">3</a>
      <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white/60">...</span>
      <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10" href="#">10</a>
      <a className="flex size-10 items-center justify-center text-white/60 hover:text-white" href="#">
        <span className="material-symbols-outlined">chevron_right</span>
      </a>
    </div>
  );
};

export default Pagination;
