import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "Fiquei impressionado com a rapidez e eficiência em limpar meu nome. Agora, posso respirar aliviado!",
    imageSrc: avatar1.src,
    name: "Carlos Mendes",
    username: "@carlosmendes",
  },
  {
    text: "Graças ao serviço, consegui reabilitar minha empresa e retomar as oportunidades financeiras.",
    imageSrc: avatar2.src,
    name: "Ana Souza",
    username: "@anasouza",
  },
  {
    text: "Nunca imaginei que seria tão fácil recuperar meu crédito. Sou grato por toda a ajuda que recebi.",
    imageSrc: avatar3.src,
    name: "Rafael Oliveira",
    username: "@rafaeloliveira",
  },
  {
    text: "O serviço é extremamente eficiente. Agora posso focar em meus negócios sem me preocupar com dívidas passadas.",
    imageSrc: avatar4.src,
    name: "Beatriz Santos",
    username: "@beatrizsantos",
  },
  {
    text: "Recuperar meu crédito foi a melhor decisão que tomei. Minha vida financeira mudou completamente.",
    imageSrc: avatar5.src,
    name: "Lucas Pereira",
    username: "@lucaspereira",
  },
  {
    text: "A equipe foi fantástica e me ajudou a limpar meu nome em tempo recorde. Recomendo a todos!",
    imageSrc: avatar6.src,
    name: "Mariana Lima",
    username: "@marianalima",
  },
  {
    text: "O suporte foi incrível. Agora posso aproveitar novas oportunidades sem o peso das dívidas antigas.",
    imageSrc: avatar7.src,
    name: "Fernando Costa",
    username: "@fernandocosta",
  },
  {
    text: "O processo foi simples e rápido. Meu crédito foi recuperado sem complicações.",
    imageSrc: avatar8.src,
    name: "Patrícia Nunes",
    username: "@patricianunes",
  },
  {
    text: "O serviço foi essencial para que eu pudesse voltar a crescer financeiramente. Gratidão eterna!",
    imageSrc: avatar9.src,
    name: "Guilherme Silva",
    username: "@guilhermesilva",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => {
  return (
    <div
      className={twMerge("flex flex-col gap-6 mt-10", props.className)}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
      }}
    >
      {props.testimonials.map(({ text, imageSrc, name, username }) => (
        <div
          key={username} // Adicione uma chave única aqui
          className="max-w-xs w-full rounded-3xl shadow-[0_7px_14px_#EAEAEA] p-10 border border-solid border-[#222222]/10"
        >
          <div>{text}</div>
          <div className="flex items-center gap-2 mt-5">
            <Image
              src={imageSrc}
              alt={name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id="depoimentos" className=" gap-y[56px] py-[56px] lg:py-[120px]">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Qualidade compravada</div>
          </div>
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-description mt-5">
            Veja o que nossos clientes têm a dizer sobre suas experiências de
            recuperação de crédito conosco. Histórias reais de transformação e
            recomeço, comprovando a eficácia dos nossos serviços.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-6">
        <TestimonialsColumn testimonials={firstColumn} />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:flex"
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden lg:flex"
        />
      </div>
    </section>
  );
};
