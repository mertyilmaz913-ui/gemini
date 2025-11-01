import React from 'react';
import SideNavBar from '../components/SideNavBar';
import ProfileContent from '../components/ProfileContent';

const UserProfilePage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white antialiased">
      <div className="relative flex min-h-screen w-full">
        <SideNavBar />
        <ProfileContent />
      </div>
    </div>
  );
};

export default UserProfilePage;
