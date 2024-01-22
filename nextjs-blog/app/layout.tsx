import "./globals.css";
import Navbar from "./components/Navbar";
import ProfilePic from "./components/ProfilePic";

export const metadata = {
  title: "Fitness Blog",
  description: "Blog detailing my gym and fitness routines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
}
