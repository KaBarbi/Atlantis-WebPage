export const Carousel: React.FC = () => {
  const imagensEsquerda = [
    "/images/home/lanche cheddar.jpg",
    "/images/home/segurando lanche.jpg",
    "/images/home/desconto.png",
  ];

  const imagensDireita = [
    "/images/home/finaldelas.jpg",
    "/images/home/lanche cheddar.jpg",
    "/images/home/reserve.png",
  ];

  return (
    <section className="w-full h-[300px] flex items-center justify-center gap-20 mb-10 overflow-hidden max-md:flex-col max-md:h-auto max-md:gap-5 bg-center bg-cover bg-no-repeat">
      {/* Imagens Lado Esquerdo */}
      <div className="flex flex-row gap-5 max-md:flex-col max-md:items-center">
        {imagensEsquerda.map((src, i) => (
          <div
            key={i}
            className="w-[250px] h-[250px] overflow-hidden rounded-xl flex items-center justify-center transition-all duration-500"
          >
            <img
              src={src}
              alt={`Imagem ${i + 1}`}
              className="w-full h-full object-cover rounded-lg transition-all duration-500"
            />
          </div>
        ))}
      </div>

      {/* Centro com setas e logo (estático) */}
      <div className="flex items-center justify-center gap-5">
        <span className="text-white text-4xl max-md:text-3xl select-none hover:text-yellow-400 transition-colors cursor-default">
          &#10094;
        </span>

        <img
          src="/images/home/logo.png"
          alt="Tridente"
          className="w-[150px] h-[100px] max-md:w-[100px] max-md:h-auto"
        />

        <span className="text-white text-4xl max-md:text-3xl select-none hover:text-yellow-400 transition-colors cursor-default">
          &#10095;
        </span>
      </div>

      {/* Imagens Lado Direito */}
      <div className="flex flex-row gap-5 max-md:flex-col max-md:items-center">
        {imagensDireita.map((src, i) => (
          <div
            key={i}
            className="w-[250px] h-[250px] overflow-hidden rounded-xl flex items-center justify-center transition-all duration-500"
          >
            <img
              src={src}
              alt={`Imagem ${i + 4}`}
              className="w-full h-full object-cover rounded-lg transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
