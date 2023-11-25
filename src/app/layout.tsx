import type { Metadata } from "next";
import "../nrc/css/main.css";
import Link from "next/link";
import ActiveLink from "@/components/active/link";

export const metadata: Metadata = {
  title: "Doe Esperança || Lisangela",
  description:
    "Um projeto de esperança para quem está precisando de ajuda, Doe...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="mainHeader">
          <div className="container navbar">
            <div className="navbar_logo">
              <Link href="./">
                Doe<span>Esperança</span>
              </Link>
            </div>
            <nav className="navbar_menu">
              <ul>
                <li><ActiveLink href="/">Home</ActiveLink></li>
                <li><ActiveLink href="/lisangela">Lisangela</ActiveLink></li>                
                <li><ActiveLink href="/projeto">Projeto</ActiveLink></li>                
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
