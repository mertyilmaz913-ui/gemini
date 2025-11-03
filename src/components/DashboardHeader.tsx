import React from 'react';

const DashboardHeader: React.FC = () => {
  // Mock user data
  const userName = 'Mehmet';

  return (
    <header className="py-6 px-4 sm:px-0">
      <h1 className="text-3xl font-bold text-white">
        Tekrar hoş geldiniz, {userName}
      </h1>
      <p className="mt-2 text-lg text-white/80">
        Bugün sizin için ne yapabiliriz?
      </p>
    </header>
  );
};

export default DashboardHeader;
