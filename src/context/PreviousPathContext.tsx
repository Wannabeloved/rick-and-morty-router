import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';

type PreviousPathContextType = {
    currentPath: string | null, 
    previousPath: string | null, 
  };

const PreviousPathContext = createContext<PreviousPathContextType | null>(null);

class PathQueue {
  private paths: string[] = [];
  private maxSize: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  add(path: string) {
    if (path === this.paths.at(-1))
      return; // Ignore if the path is the same as the last one

    if (this.paths.length >= this.maxSize) {
      this.paths.shift(); // Remove the oldest path
    }
    this.paths.push(path);
  }

  get previousPath(): string | null {
    return this.paths.at(-2) || null;
  }
  get currentPath(): string | null {
    return this.paths.at(-1) || null;
  }
}

export const PreviousPathProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const paths = useMemo(() => new PathQueue(2), []);
  const [pathsState, setPathsState] = useState<PreviousPathContextType>(paths);


  useEffect(() => {
    paths.add(location.pathname);

    setPathsState({
      currentPath: paths.currentPath,
      previousPath: paths.previousPath,
    });

  }, [location.pathname]);

  return (
    <PreviousPathContext value={pathsState}>
      {children}
    </PreviousPathContext>
  );
};

export const usePreviousPath = () => {
  const context = useContext(PreviousPathContext);
  if (context === null) {
    throw new Error('usePreviousPath must be used within a PreviousPathProviderr');
  }
  return context;
};