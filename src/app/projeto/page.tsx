import Code from "@/components/Code/Code";
import Icon from "@/components/Code/Icon";
import Image from "next/image";

export default function Construcao() {
  return (
    <>
      <section className="sectionConstrucao">
        <div className="container">
          <div className="row min-60">
            <div className="flex">
              <div className="project_construct">
                <div className="efect_2"></div>
                <h2>
                  <span>O</span> projeto
                </h2>
                <h3>
                  Construir um apartamento com acessibilidade  para pessoas portadoras de necessidades especiais.
                  <span></span>
                </h3>
                <div className="estrutura">
                  <ul>
                    <li> <em>▸</em> Quarto com suíte para duas pessoas</li>
                    <li> <em>▸</em>  Banheiro com acesso a cadeira de rodas</li>
                    <li> <em>▸</em>  Área de serviço</li>                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex">
              <Code />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
