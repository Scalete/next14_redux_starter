import type { Metadata } from "next";
import "@/styles/global.scss";
import ReduxWrapper from "@/components/layout/redux/ReduxWrapper";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="__next">
        <ReduxWrapper>
          <main>{children}</main>
        </ReduxWrapper>
      </body>
    </html>
  );
}
