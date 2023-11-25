import Code from "@/components/Code/Code";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="mainHome">
        <div className="efect_1"></div>
        <div className="container">
          <div className="row min-60">
            <div className="flex">
              <div className="content_lisan">
                <div className="lisan"></div>
                <p>
                  Esta é Lisangela, sempre linda e muito simpática. Nesta fase
                  da vida ela está precisando muito do seu apoio, por isso
                  criamos esse link de ajuda.
                  <span>
                    Você pode estar ajudando fazendo um pix com qualquer valor
                    🤞💖
                    <Link href="/lisangela">Conheça um pouco mais <em>⇏</em></Link>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex">
              <Code/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
