import React, { createContext, useContext, useState, useEffect, useMemo, use } from 'react';

type AuthorContextType = {
  login: string;
  name: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  avatar_url: string;
};

const AuthorContext = createContext<AuthorContextType | null>(null);

export const AuthorProvider = ({ children }: { children: React.ReactNode }) => {
  const [authorInfo, setAuthorInfo] = useState<AuthorContextType | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/wannabeloved')
      .then(res => res.json())
      .then(setAuthorInfo);

        return () => {};
    }, []);

  return (
    <AuthorContext value={authorInfo}>
      {children}
    </AuthorContext>
  );
};

export const useAuthorInfo = () => {
  if (AuthorContext === null)
    throw new Error('useAuthorInfo must be used within a AuthorProvider');
  const context = use(AuthorContext);

  return context;
};