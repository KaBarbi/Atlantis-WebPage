import React from "react";

export const Content: React.FC = () => {
  return (
    <section className="w-full px-4 py-16 flex flex-col items-center text-center relative text-white">
      {/* Fundo com opacidade */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-bottom opacity-50 -z-10"
        style={{ backgroundImage: "url('/images/sobre/fundo_sobre.png')" }}
      ></div>

      {/* Container centralizado com duas colunas */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between text-left z-10 gap-10">
        {/* Coluna esquerda: título + botões */}
        <div className="flex flex-col items-start md:w-1/2 px-4">
          <h2 className="text-3xl font-semibold uppercase tracking-wide mb-6 text-center md:text-left">
            CADA MORDIDA,<br />UMA OBRA DOS DEUSES!
          </h2>

<div className="flex flex-col sm:flex-row gap-4">
  <a
    href="https://atlantisburguer.saipos.com/home"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-md hover:bg-yellow-500 hover:scale-105 transition-all duration-300 ease-in-out text-center"
  >
    FAZER PEDIDO
  </a>

  <a
    href="https://api.whatsapp.com/send?l=pt&phone=5501142262748"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-yellow-400 text-yellow-400 font-bold py-2 px-6 rounded-full shadow-md hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300 ease-in-out text-center"
  >
    RESERVAR MESA
  </a>
</div>

        </div>

        {/* Coluna direita: texto descritivo */}
        <div className="md:w-1/2 px-4 text-lg leading-relaxed">
          <p>
            Você acaba de entrar na{" "}
            <strong className="text-yellow-400 font-semibold">
              LENDÁRIA CIDADE PERDIDA
            </strong>{" "}
            dos deuses do Olimpo, onde cada detalhe foi pensado para te oferecer
            uma experiência digna de{" "}
            <strong className="text-yellow-400 font-semibold">
              SERES MITOLÓGICOS.
            </strong>
            <br />
            <br />
            Nossos ingredientes são preparados com o frescor e o sabor dos
            banquetes divinos, e nossos hambúrgueres são feitos sob medida,
            direto da nossa parrilla, para garantir que{" "}
            <strong className="text-yellow-400 font-semibold">
              CADA MORDIDA SEJA UMA VERDADEIRA OBRA DOS DEUSES.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};
