import React from 'react';
import ExpertCard from './ExpertCard';

const experts = [
  { name: 'Dr. Elara', specialty: 'Kuantum Fizik Uzmanı', status: 'Çevrimiçi', rating: 4.9, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkMM3zxYdJqp7lpKSkzBc-7OweOWSbMHk99DOk5Rzta-LFsTk3C_ZFH_PcaGewRYZ87ePh696OMXvauZcxwl3njVPXWQXCf131Sv6ROyjF_u4j8tJ6xaeO9yH9bApXBg2GXQu7KFqCLhwoUfmZMaBttLLOSpbrP7oLHcMU7yDGqbGPVF_lDPd4-3NVl-PuBKufxT9-iSmYSfWc--tYSgbE-k3POL6ygkanNWkIr5AZp1QR_PZkzd5_WDcV3a35vPo1mp_bUvoUcy8' },
  { name: 'Alex Reed', specialty: 'Yatırım Stratejileri', status: 'Çevrimiçi', rating: 4.8, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkNKHnfAa5WMyyDF1WLSjSrz1YiXi7o7J4LPHPwtQsAiCWfYx6yp7iDy6H81DVAx7FgyTB3Z9Fg6fcMIBm21xUospXpt-3vrnSFVlZzpFGJGqiB9P2KBrE__txI94UIJitxiSACTjEvs4XcfXmNKPPZMuYQSODjvQSqsOUCngmlAHmtbLPf3N2FyP0aVquiCUE9do-ulA8j5MKH0obySc5q8bfGMEAHyjktXATSpU-GEZciHxZua_n6AhRHBIeypNdVj-FsMvwuyg' },
  { name: 'Dr. Anya Sharma', specialty: 'Biyoteknoloji Danışmanı', status: 'Meşgul', rating: 4.9, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi9U39FgbPYASMUfmusIQJCKRnoSftRo5vSJsvS8bk7-93zoX-KTkPn8j-zfZHUmZZiWpZI3R0s3e7Y535jsO6s8qns0vteGBKCMu_utR6Ens5myPsPhuPuJR-Wym48emLvJpSLQQ5nf2UZ_3xYf_biQzMTsx7if92icVCvmt2kYbC268KFtpA12cMzvVompIJ4TDtcsIW9A2d8moCGvWzCLFddaMfl5cnC8POw-0BjYYErIXwfopT1YHMN5CgGwSjOWOb6YtUSgI' },
  { name: 'Javier Cruz', specialty: 'Kıdemli Yazılım Mimarı', status: 'Çevrimiçi', rating: 4.7, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiT_ucvzVmoqOuoy9BlHTUqpWkU96x1GVBGwElOSyGzo_vttzjmqSx3hef3Xle67EPoR2047owbebmCInOWiaZVXTQ9kIl5cdactPc3EhLwjudbmHgtuVDLl4etuvI4HZ9pb79fvMdRp_6fQJ0-IEEiTRHrjTpczlOfdIc0o5sOiL2y-J9YcZE79_RwTVXV7LwAO9v7TbZV2VeuEfgQXNgZlRKTPxM9W-YXUxKGcOBUPSAYmdZz11Hw3jRTPf1IXsMjx36JMlNYFA' },
  { name: 'Kenji Tanaka', specialty: 'Makine Öğrenmesi Uzmanı', status: 'Meşgul', rating: 5.0, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4RCs6SRvTr2wjGkoow0r4Zne2qOht_KhKi4zjtn6a3bkkXB0qxD0faYtl9BCrEVxLFeAiNpQrF-CoZ1MHHh6vkBVIqAkV9PKddG_0knzwiqQO_V9wacJ_CsFfvYcCYf0CSOq2FAok5csTor0LEzNT2AU2iAxoeNTdgHgmndUC21mtXC0v1OQ7vB47NL3GVUWk51EvZ47DFzEx8rNkRuWIKekAtr8Uka63fZYvV0KmP7lLVdRB9eH4a9_JMvx8zU-X3077SLqW6pY' },
  { name: 'Dr. Lena Volkov', specialty: 'Lider Veri Analisti', status: 'Çevrimiçi', rating: 4.8, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoHHH6oXBiY6tH3UFEoFcjz_jBAsYCnOBjFjNlMGJOUc-o7sErLTeYuO48ihSP7HbNkDyrTtVuPcc8Sx5XF--cBsg99juX0v7LAWhLzfv6jZZMpXz8xAHjD-jjnEz2zYKhC7l_CjYGu3HyxYreJBQBDlcXldx4ilQ9ReHnzKizYWksldD2RG2eeTALOSQXQI4yoJCxy04DT_qjInlfR0gi4VFslNXbPs219FCvmumM2jDBCMTR6utHJ6Ul3XXfRAFgW_gteGAbAGM' },
  { name: 'Samira Khan', specialty: 'Etik Hacker Danışmanı', status: 'Çevrimiçi', rating: 4.9, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBofQIiOfst7IaNVoAILj3_Ao6lHgiRxRros5dZIWPJtjRkNuVpoURdamkZCKPxv6JtYtTF0qcj7TezG5_uXsJagl-2BSVVBMd5iTXS7Nnsh6T9i40flTCce77U_VMT1BJrwH5MRDCrYoXQC6H4z_-AhJ8BBArVv6_-e9ViYWk4oPGsn8QFjKPNwibx25-Jzgc-YhzJU636t6FzpCj1fTk0XygQLaEXrF0ddfUwl-DdmS0rhhGUElOcGCXi5aWTM8sjBddbzCTfLEQ' },
  { name: 'Dr. Ben Carter', specialty: 'Biyoteknoloji Öncüsü', status: 'Meşgul', rating: 4.6, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATtXebXlZ7w06fzlcE-WDZziYhCZF4onWG1tpzxCcBzZHxGTpFvpQHcjMYCm6QD6nzSpYkOqdTJ2JpljX98tfTin4lyh3SgZOc4y4DVW3zS3OA2CEn6kRzFUsQQTKhfxn-DQyiJZY_dBFqQ5sVr5EAmWoFaYZ4-9h9jai36AdQf9YW4uwc16BeUs0RAPbfr2NnzOd3cSUjTNWTCwWzxv9FbByipXukddE7VamwnW4sbLxra5xz5GHAh7Wa0KLlYJ-rlKM_415kuMY' },
];

const ExpertGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4">
      {experts.map((expert, index) => (
        <ExpertCard key={index} {...expert} />
      ))}
    </div>
  );
};

export default ExpertGrid;
