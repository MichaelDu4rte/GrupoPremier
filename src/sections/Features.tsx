import CreditCard from "@/assets/feature.png";
import Check from "@/assets/check.png";
import Image from "next/image";

export const Features = () => {
  return (
    <section
      id="beneficios"
      className="flex flex-col bg-white gap-y[56px] py-[56px] lg:py-[120px] lg;gap-y-[80px]"
    >
      <div className="container">
        <div className="flex flex-col gap-x-6 md:flex-row-reverse">
          <Image
            src={CreditCard}
            alt=""
            className="hidden w-1/2 sm:block rounded rounded-lg"
          />

          <div className=" lg:py-[56px] lg;pr[56px] sm:pt-[12px] md:pt-[0px]">
            <div className="flex justify-start ">
              <div className="tag">Qualidade compravada</div>
            </div>{" "}
            <h1 className="pt-[12px]  sm:text-2xl text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text lg:text-[30px] lg:leading-[58px]">
              Revitalize Seu Crédito Agora
            </h1>
            <Image
              src={CreditCard}
              alt=""
              className="pt-[24px] sm:hidden rounded"
            />
            <p className="py-[24px] text-[#36485C] text-[18px]">
              Reative sua vida financeira com o poder de um crédito renovado!
              Com nosso serviço, você não apenas limpa seu nome, mas também
              desbloqueia novas oportunidades, recupera sua confiança e coloca
              sua vida de volta nos trilhos. Não espere mais para transformar
              seu futuro!
            </p>
            <ul className="flex flex-col gap-y-3 text-[18px]">
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="checkmark " />
                </span>
                Regularização Eficiente
              </li>
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="checkmark" />
                </span>
                Limpeza Rápida de CPF/CNPJ
              </li>
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="checkmark" />
                </span>
                Restauração Expressiva do Score
              </li>
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="checkmark" />
                </span>
                Liberação de Crédito Facilitada{" "}
              </li>
            </ul>
            <div className="pt-[24px]">
              <a href="#sobre" className="btn btn-primary font-medium">
                Recupere Seu Crédito
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
