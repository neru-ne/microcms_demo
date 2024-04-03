"use client"
import { RecoilRoot, } from 'recoil';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <RecoilRoot>
        <body >{children}</body>
      </RecoilRoot>
    </html>
  );
}
