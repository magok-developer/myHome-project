import Header from "@/components/Header/Header";
import RootContainer from "@/components/RootContainer";
import type { Metadata } from "next";
import "../../public/reset.css";
import { color } from "@/styles/color";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "My Home",
  description: "My Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body style={{ background: color.secondary.white, position: "relative" }}>
        <RootContainer>
          <Header />
          <div style={{ paddingTop: "60px" }}>{children}</div>
        </RootContainer>
      </body>
    </html>
  );
}
