import type { ReactNode } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import './index.css';
import { LayoutWrapper } from './components/layout/Layout';
import Seo from './components/Seo';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <>
      <Seo />
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
    </>
  );
}
