import { Noto_Sans_KR } from "next/font/google";

import RootContainer from "@/components/RootContainer";
import type { Metadata } from "next";
import "../../public/reset.css";
import { color } from "@/styles/color";
import NavBar from "@/components/NavBar/NavBar";
import { usePathname } from "next/navigation";

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
          background: color.main.white,
          position: "relative",
        }}
        className={noto.className}
      >
        <script
          type='text/javascript'
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_KEY}&libraries=services`}
        ></script>
        <RootContainer>
          <div>{children}</div>
        </RootContainer>
      </body>
    </html>
  );
}
