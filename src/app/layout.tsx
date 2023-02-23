import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-100">
        <Navbar />
        <main className="max-w-[1100px] w-full m-auto py-[120px] px-6 xs:px-9 sm:px-12 overflow-y-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
