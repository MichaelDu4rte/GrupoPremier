import SocialWhats from "@/assets/whatsapp-svgrepo-com.svg";
import SocialEmail from "@/assets/email-circle-fill-svgrepo-com.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center ">
      <div className="container">
        <div className="inline-flex ">
          <div>GRUPO PREMIER</div>
        </div>
        <div className="flex justify-center gap-6 mt-1">
          contatogrupopremier@gmail.com
        </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#depoimentos">Depoimentos</a>
        </nav>
      </div>
    </footer>
  );
};
