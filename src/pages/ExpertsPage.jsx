import React from 'react';

const experts = [
  { id: 1, name: 'AI Psychologist', specialty: 'Mental Wellness', avatar: 'https://via.placeholder.com/150' },
  { id: 2, name: 'AI Financial Advisor', specialty: 'Investment Strategies', avatar: 'https://via.placeholder.com/150' },
  { id: 3, name: 'AI Career Coach', specialty: 'Professional Development', avatar: 'https://via.placeholder.com/150' },
];

const ExpertsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Meet Our AI Experts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experts.map((expert) => (
          <div key={expert.id} className="border p-4 rounded-lg text-center">
            <img src={expert.avatar} alt={expert.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-semibold">{expert.name}</h2>
            <p className="text-gray-500">{expert.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertsPage;
