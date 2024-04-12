import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/Header/Header";
import RootContainer from "@/components/RootContainer";
import type { Metadata } from "next";
import "../../public/reset.css";
import { color } from "@/styles/color";
import Script from "next/script";

export const metadata: Metadata = {
  title: "My Home",
  description: "My Home",
};

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        style={{
          background: color.secondary.white,
          position: "relative",
        }}
        className={noto.className}
      >
        <script
          type='text/javascript'
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_KEY}&libraries=services`}
        ></script>
        <RootContainer>
          <Header />
          <div>{children}</div>
        </RootContainer>
      </body>
    </html>
  );
}
