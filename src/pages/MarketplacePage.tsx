import React from 'react';
import MarketplaceHeader from '../components/MarketplaceHeader';
import FilterBar from '../components/FilterBar';
import ExpertGrid from '../components/ExpertGrid';
import Pagination from '../components/Pagination';

const MarketplacePage: React.FC = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
              <MarketplaceHeader />
              <main>
                <div className="flex flex-wrap justify-between items-center gap-3 p-4 mt-8 mb-4">
                  <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Yapay Zeka Uzmanlarıyla Anında Bağlantı Kurun</p>
                </div>
                <FilterBar />
                <ExpertGrid />
                <Pagination />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
