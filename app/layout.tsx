import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoyo 徐子曦 - 我的快乐世界",
  description: "Hi！我是Yoyo（Vincent），7岁的小学生。喜欢滑板、游泳、钢琴和画画。欢迎来到我的快乐世界！",
  keywords: ["徐子曦", "Yoyo", "Vincent", "小学生", "滑板", "游泳", "钢琴", "画画", "北京奋斗小学"],
  icons: {
    icon: '/yoyo-favicon.svg',
    shortcut: '/yoyo-favicon.svg',
    apple: '/yoyo-favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
