import React, { createContext, useContext, useState, useEffect, useMemo, use } from 'react';

type AuthorContextType = {
    
};

const AuthorContext = createContext<AuthorContextType | null>(null);

export const AuthorProvider = ({ children }: { children: React.ReactNode }) => {
  const [authorInfo, setAuthorInfo] = useState<AuthorContextType>({});

    useEffect(() => {
        const mygh = fetch("https://api.github.com/users/wannabeloved")
  .then(($) => $.json()).then($ => setAuthorInfo($));

        return () => {};
    }, []);

  return (
    <AuthorContext value={authorInfo}>
      {children}
    </AuthorContext>
  );
};

export const useAuthorInfo = () => {
  const context = use(AuthorContext);
  if (context === null)
    throw new Error('useAuthorInfo must be used within a AuthorProvider');

  return context;
};