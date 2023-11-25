import type { Metadata } from "next";
import "../nrc/css/main.css";
import Link from "next/link";

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
                <li>
                  <Link href="/lisangela">Lisangela</Link>
                </li>
                <li>
                  <Link href="/projeto">Projeto</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
