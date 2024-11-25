'use client';

import './HeaderLoggedIn.css';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useTranslations } from 'next-intl';

export default function HeaderLoggedIn() {
  const { user, error, isLoading } = useUser();

  const t = useTranslations('Header');

  return (
    user && (
      <div className="header-loggedIn">
        <span className="header-hello">{`Hello ${user?.nickname}!`} </span>
        <span className="header-logout">
          <button className="btn-logout">
            <a href="/api/auth/logout">{t('logout')}</a>
          </button>
        </span>
      </div>
    )
  );
}
