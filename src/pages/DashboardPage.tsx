import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardContent from '../components/DashboardContent';

const DashboardPage: React.FC = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-white">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
              <DashboardHeader />
              <DashboardContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
