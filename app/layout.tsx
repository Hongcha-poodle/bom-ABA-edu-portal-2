import type { Metadata } from "next";

import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://aba-edu-portal.local"),
  title: {
    default: "ABA Edu Portal",
    template: "%s | ABA Edu Portal"
  },
  description:
    "발달지연 아동 부모를 위한 ABA 교육 콘텐츠 포털. 짧고 실용적인 가이드와 교육 앱 정보를 한곳에서 제공합니다.",
  openGraph: {
    title: "ABA Edu Portal",
    description:
      "발달지연 아동 부모를 위한 ABA 교육 콘텐츠 포털. 매거진, 가이드, 교육 앱을 한곳에서 제공합니다.",
    siteName: "ABA Edu Portal",
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
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
