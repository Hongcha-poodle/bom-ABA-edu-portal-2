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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d) {
                var config = {
                  kitId: 'dwd7xxb',
                  scriptTimeout: 3000,
                  async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
              })(document);
            `
          }}
        />
      </head>
      <body>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
