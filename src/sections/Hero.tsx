import ArrowRight from "@/assets/arrow-right.svg";
import CreditCard from "@/assets/creditcard.png";
import Clear from "@/assets/clear-3d.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="home"
      className="pt-8 pb-20 md:pt-5 lg:pt-0 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag inline-flex">Mude sua vida agora</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Nome Limpo, Vida Nova!
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tighte mt-6">
              Recupere seu crédito e volte a viver sem restrições! Nossa equipe
              de especialistas negocia suas dívidas para limpar seu nome e
              garantir um futuro financeiro tranquilo. Não perca tempo, comece
              agora!
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <a href="#sobre" className="btn btn-primary">
                Saiba mais
              </a>
              <a
                href="https://wa.me/5521964807639"
                target="blank"
                className="btn btn-text gap-1"
              >
                <span>Limpar agora</span>
                <ArrowRight className="h-5 w-5"></ArrowRight>
              </a>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[658px] lg:h-[600px] md:flex-1 relative">
            <Image
              src={CreditCard}
              alt="Credit card"
              className="transform scale-x-[-1] md:absolute md:h-full md:w-auto md:max-w-none md:left-[-130px] lg:left-[120px]"
            />
            <Image
              src={Clear}
              alt="Credit card"
              width={120}
              height={120}
              className="hidden md:block top-[140px] -left-22 lg:left-[250px] md:absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
