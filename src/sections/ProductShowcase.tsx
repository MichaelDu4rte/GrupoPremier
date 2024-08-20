import ProductImage from "@/assets/product-image.png";
import StarImage from "@/assets/star.png";
import Image from "next/image";
export const ProductShowcase = () => {
  return (
    <section
      id="sobre"
      className="bg-gradient-to-b from-[#Ffffff] to-[##D2DCFF]  overflow-x-clip gap-y[56px] py-[56px] lg:py-[120px]"
    >
      <div className="container">
        <div className="max-w[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Desbloqueando novos começos</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Libere Seu Futuro Financeiro
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tighte text-[#010D3E] mt-5">
            Acreditamos em novas chances! Especializados em recuperação de
            crédito, ajudamos pessoas e empresas a se libertarem das dívidas e
            reconquistarem suas oportunidades financeiras. Com negociações
            eficazes, reabilitamos reputações e abrimos portas para um futuro
            melhor.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="" className="mt-20" />
          <Image
            src={StarImage}
            alt=""
            height={200}
            width={200}
            className="hidden md:block absolute -right-[90px] -top-28"
          />
          <Image
            src={StarImage}
            alt=""
            height={200}
            width={200}
            className="hidden md:block absolute -bottom-24 -left-[60px] transform scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  );
};
