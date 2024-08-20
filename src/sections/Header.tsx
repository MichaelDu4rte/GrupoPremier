import ArrowRight from "@/assets/arrow-right.svg";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm  z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Faça o negócio da sua vida valer a pena
        </p>
        <div className="inline-flex gap-1 items-center">
          <a href="https://wa.me/5521964807639" target="blank">
            <p className="">Fale com um especialista</p>
          </a>

          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"></ArrowRight>
        </div>
      </div>
      <div className=" hidden md:block py-5 border border-t-0 border-l-0 border-r-0 border-[#333]">
        <div className="container">
          <div className="flex items-center  justify-center md:justify-between">
            <p className=" text-black font-bold  md:text-2xl py-2 px-2 rounded-md">
              GRUPO PREMIER
            </p>
            <nav className="hidden md:flex gap-5 text-black/60 items-center">
              <a href="#home">Home</a>
              <a href="#sobre">Sobre</a>
              <a href="#beneficios">Benefícios</a>
              <a href="#depoimentos">Depoimentos</a>
              <a
                href="https://wa.me/5521964807639"
                target="blank"
                className="btn btn-primary"
              >
                Limpar nome
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
