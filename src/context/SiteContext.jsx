/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../i18n/translations';

const SiteContext = createContext(null);

const getInitialLang = () => {
  if (typeof window === 'undefined') return 'vi';
  // Priority: ?lang= query param (so hreflang URLs load the right language) > saved > browser.
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param === 'vi' || param === 'en') return param;
  const saved = localStorage.getItem('lang');
  if (saved === 'vi' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'vi';
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  // Cosmic theme is the primary identity → default to dark space.
  return 'dark';
};

const getInitialNavCollapsed = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('navCollapsed') === 'true';
};

export const SiteProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);
  const [theme, setTheme] = useState(getInitialTheme);
  const [navCollapsed, setNavCollapsed] = useState(getInitialNavCollapsed);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('navCollapsed', String(navCollapsed));
  }, [navCollapsed]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'vi' ? 'en' : 'vi')),
      theme,
      setTheme,
      toggleTheme: () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
      navCollapsed,
      setNavCollapsed,
      toggleNav: () => setNavCollapsed((prev) => !prev),
      t: translations[lang],
    }),
    [lang, theme, navCollapsed]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export const useSite = () => {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used within a SiteProvider');
  return ctx;
};

export default SiteContext;
