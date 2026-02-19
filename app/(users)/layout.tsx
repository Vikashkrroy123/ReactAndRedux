import {Roboto } from "next/font/google";
import "../globals.css";
import { Work_Sans } from "next/font/google";
import Navigation from "../components/Navigation";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  //add talwind css
  variable: "--font-roboto",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-work-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html>
    //   <body
    //     className={`${workSans.variable} ${roboto.variable} h-screen overflow-hidden flex flex-col`}
    //   >
    <div className="h-screen overflow-hidden flex flex-col">
        <Navigation />
        {children}
        </div>
      //   </body>
      // </html>
  );
}
