import type { Metadata } from "next";
import { Fredoka } from "next/font/google";

import "@/app/globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aba-edu-portal.vercel.app"),
  title: {
    default: "ABA 에듀 포털",
    template: "%s | ABA 에듀 포털"
  },
  description:
    "발달지연 아동 부모를 위한 ABA 교육 콘텐츠 포털. 짧고 실용적인 가이드와 교육 앱 정보를 한곳에서 제공합니다.",
  openGraph: {
    title: "ABA 에듀 포털",
    description:
      "발달지연 아동 부모를 위한 ABA 교육 콘텐츠 포털. 매거진, 가이드, 교육 앱을 한곳에서 제공합니다.",
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
    <html lang="ko" className={fredoka.variable}>
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          {/* Header — 재구현 예정 */}
          <main className="flex-1">{children}</main>
          {/* Footer — 재구현 예정 */}
        </div>
      </body>
    </html>
  );
}
