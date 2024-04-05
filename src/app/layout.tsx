"use client"
import "./globals.css";

import { RecoilRoot } from 'recoil';
import { SetOption } from '@/app/components/atoms/options/SetOption'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ja">
      <RecoilRoot>
        <body >
            <SetOption />
            {children}
        </body>
      </RecoilRoot>
    </html>
  );
}
