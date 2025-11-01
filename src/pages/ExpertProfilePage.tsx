import React from 'react';
import ExpertProfileCard from '../components/ExpertProfileCard';
import ExpertDetails from '../components/ExpertDetails';

const ExpertProfilePage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#EAEAEA]">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1">
            <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8 py-10 md:py-20">
              <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-12">
                <ExpertProfileCard />
                <ExpertDetails />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfilePage;
