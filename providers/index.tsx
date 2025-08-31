import type { NavigateOptions } from 'react-router';
import { useNavigate, useHref } from 'react-router';
import { HeroUIProvider } from '@heroui/system'
import { AuthProvider } from '../src/context/AuthContext';
import { PreviousPathProvider } from '../src/context/PreviousPathContext';
import { AuthorProvider } from '../src/context/AuthorContext';

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

type Props = { 
    children: React.ReactNode
};

export const Providers = ({ children }: Props) => {
  const navigate = useNavigate();
  return (
    <AuthorProvider>
      <HeroUIProvider navigate={navigate} useHref={useHref}>
        <AuthProvider>
          <PreviousPathProvider>
              { children }
          </PreviousPathProvider>
        </AuthProvider>
      </HeroUIProvider>
    </AuthorProvider>
  );
};
