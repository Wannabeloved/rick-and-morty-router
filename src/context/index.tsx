import type { NavigateOptions } from 'react-router';
import { AuthProvider } from './AuthContext';
import { PreviousPathProvider } from './PreviousPathContext';
import { AuthorProvider } from './AuthorContext';
import { UIProvider } from './UiContext';
import {unstable_ViewTransition as ViewTransition} from 'react';

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

type Props = { 
    children: React.ReactNode
};

export const Providers = ({ children }: Props) => {
  return (
    <AuthorProvider>
      <ViewTransition>
        <UIProvider>
          <AuthProvider>
            <PreviousPathProvider>
                { children }
            </PreviousPathProvider>
          </AuthProvider>
        </UIProvider>
      </ViewTransition>
    </AuthorProvider>
  );
};
