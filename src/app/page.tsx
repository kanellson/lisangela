import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="mainHome">
        <div className="container">
          <div className="row min-60">
            <div className="flex">
              <div className="content_lisan">
                <div className="lisan"></div>
                <p>Esta é Lisangela, sempre linda e muito simpática.
                  Nesta fase da vida ela está precisando muito do seu apoio, por isso criamos esse link de ajuda.
                  <span>Você pode estar ajudando fazendo um pix com qualquer valor <i>🤞💖</i></span>
                </p>
              </div>              
            </div>
            <div className="flex">
            <div className="wrapper_value">
                <p>Faça uma doação com o códico abaixo</p>
                <span>011011011.55</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section_bg">
        <Image
          src={"/images/body.webp"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="Imagem com logo iasd"
        />
      </section> */}
    </>
  );
}
