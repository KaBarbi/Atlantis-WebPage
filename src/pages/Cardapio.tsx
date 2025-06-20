import { Menu } from "../components/Menu";


const Cardapio: React.FC = () => {
  return (
    <>
          <Menu />
    <section className="flex flex-col max-w-full mx-auto">
      {[1, 2, 3, 4, 5, 6].map((num) => {
        const fileName = `Imagem ${num} do cardápio.png`;
        const encodedFileName = encodeURIComponent(fileName);

        return (
          <article key={num} className="w-full">
            <img
              className="w-full h-auto object-cover rounded-none shadow-none"
              src={`/images/cardapio/${encodedFileName}`}
              alt={`Imagem ${num} do cardápio`}
              title={`Imagem ${num} do cardápio`}
              loading="lazy"
            />
          </article>
        );
      })}
    </section>
    </>
  );
};

export default Cardapio;
