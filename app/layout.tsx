// app/layout.tsx
import "./globals.css";
export const metadata = {
  title: {
    default: "Home Page",
    template: "%s | Home Page",
  },
  icons: {
    icon: "/favicon.ico",
  },
  description: "Home Page is there you can check all related home information",
  authors: [{name: "Vikash Kumar Ray", url: "https://www.vikashkumar.com"}, {name: "Beauty Kumari", url: "https://www.beautykumari.com"}],
  keywords: ["Home", "Home Page", "Home Page is there you can check all related home information"],
};
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  