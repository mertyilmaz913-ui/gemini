import React from 'react';

interface ExpertCardProps {
  name: string;
  specialty: string;
  status: 'Çevrimiçi' | 'Meşgul';
  rating: number;
  imageUrl: string;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ name, specialty, status, rating, imageUrl }) => {
  return (
    <div className="flex flex-col gap-3 pb-3 group">
      <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 bg-primary text-background-dark font-bold text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={() => {}}>Görüşme Başlat</button>
      </div>
      <div>
        <p className="text-white text-base font-medium leading-normal">{name}</p>
        <p className="text-white/60 text-sm font-normal leading-normal">{specialty}</p>
        <p className={`${status === 'Çevrimiçi' ? 'text-primary' : 'text-white/60'} text-sm font-normal leading-normal`}>{status} • {rating} ★</p>
      </div>
    </div>
  );
};

export default ExpertCard;
