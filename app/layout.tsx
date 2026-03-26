import type { Metadata } from "next";

import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://aba-edu-portal.vercel.app"),
  title: {
    default: "ABA 에듀 포털",
    template: "%s | ABA 에듀 포털"
  },
  description:
    "발달지연 자녀를 둔 부모를 위한 ABA 교육 가이드. 카드뉴스, 영상, 아티클로 배우고 교육 앱으로 바로 연습하세요.",
  openGraph: {
    title: "ABA 에듀 포털",
    description:
      "발달지연 자녀를 둔 부모를 위한 ABA 교육 가이드. 카드뉴스, 영상, 아티클로 배우고 교육 앱으로 바로 연습하세요.",
    siteName: "ABA 에듀 포털",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <div className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
