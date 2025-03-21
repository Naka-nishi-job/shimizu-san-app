import type { Metadata } from "next";
import PublicHeader from "@/components/layouts/public/PublicHeader";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <PublicHeader />
        {children}
    </>
  );
}