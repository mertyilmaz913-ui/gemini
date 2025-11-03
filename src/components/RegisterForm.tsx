import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Quantum Solvo</h1>
          <p className="mt-2 text-white/80">Hesabınızı oluşturun</p>
        </div>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/80"
            >
              Adınız
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 shadow-sm focus:border-brand-gold focus:outline-none focus:ring-brand-gold sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80"
            >
              E-posta Adresi
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 shadow-sm focus:border-brand-gold focus:outline-none focus:ring-brand-gold sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white/80"
            >
              Şifre
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 shadow-sm focus:border-brand-gold focus:outline-none focus:ring-brand-gold sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-brand-gold py-2 px-4 text-sm font-bold text-brand-dark shadow-sm hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
            >
              Kayıt Ol
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-white/80">
            Zaten bir hesabın var mı?{' '}
            <Link
              to="/login"
              className="font-medium text-brand-gold hover:text-yellow-400"
            >
              Giriş Yap
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
