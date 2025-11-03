import React from 'react';
import { Link } from 'react-router-dom';

// Mock Data
const expertCategories = [
  { name: 'Psikolog', icon: '🧠' },
  { name: 'Diyetisyen', icon: '🥗' },
  { name: 'Hukukçu', icon: '⚖️' },
  { name: 'Finansal Danışman', icon: '📈' },
];

const aiNotes = [
  {
    id: 1,
    message:
      'Dünkü görüşmemizden sonra bugün nasıl hissediyorsunuz? Unutmayın, her gün yeni bir başlangıçtır.',
    timestamp: '2 saat önce',
  },
  {
    id: 2,
    message:
      'Geçen hafta konuştuğumuz hedeflerinize yönelik bir adım attınız mı? Küçük adımların gücünü hafife almayın.',
    timestamp: '1 gün önce',
  },
];

const pastSessions = [
  {
    id: 1,
    expert: 'AI Psikolog',
    date: '24 Ekim 2024',
    summary: 'Stres yönetimi ve farkındalık üzerine...',
  },
  {
    id: 2,
    expert: 'AI Psikolog',
    date: '17 Ekim 2024',
    summary: 'Kariyer hedefleri ve motivasyon kaynakları...',
  },
];

const DashboardContent: React.FC = () => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-3">
      {/* Main Content: Expert Selection */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold text-white">Uzmanlık Alanları</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {expertCategories.map((category) => (
            <Link
              to="/call"
              key={category.name}
              className="group relative cursor-pointer rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-brand-gold hover:bg-brand-gold/10"
            >
              <div className="text-4xl">{category.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-white">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar: Proactive Follow-up and Past Sessions */}
      <div className="space-y-12">
        {/* AI Psychologist's Notes */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Psikoloğunuzdan Gelenler
          </h2>
          <div className="mt-6 space-y-4">
            {aiNotes.map((note) => (
              <div
                key={note.id}
                className="rounded-lg bg-white/5 p-4"
              >
                <p className="text-sm text-white/90">{note.message}</p>
                <p className="mt-2 text-xs text-white/50">{note.timestamp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Sessions */}
        <div>
          <h2 className="text-2xl font-bold text-white">Geçmiş Görüşmeleriniz</h2>
          <div className="mt-6 space-y-4">
            {pastSessions.map((session) => (
              <Link
                to="/call"
                key={session.id}
                className="block cursor-pointer rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10"
              >
                <p className="font-bold text-white">{session.expert}</p>
                <p className="text-sm text-white/70">{session.summary}</p>
                <p className="mt-2 text-xs text-white/50">{session.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
