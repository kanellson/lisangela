import Doe from "@/components/Doe";
import Image from "next/image";

export default function Project() {
  return (
    <>
      <section className="sectionProject">
        <div className="container">
          <div className="row">
            <div className="flex">
              <div className="lisangela">
                <div className="img_lisan"></div>
              </div>
              <div className="content_text">
                <h2>Lisangela é portadora de Esclerose Múltipla</h2>
                <p>
                  Esclerose Múltipla é uma condição potencialmente incapacitante
                  do cérebro e da medula espinhal (sistema nervoso central), ou
                  seja, dificulta a comunicação ideal entre o cérebro e o corpo.
                  Os sintomas que indicam a doença podem variar de caso para
                  caso, a depender de quais e quantos nervos foram afetados
                </p>
                <p>
                  As doenças crônicas degenerativas são aquelas que afetam o
                  sistema nervoso central e periférico, tendo como consequência
                  os sintomas de perda de equilíbrio, demência, dificuldade de
                  locomoção, entre outros
                </p>
              </div>
            </div>
            <div className="flex">
              <Doe/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
