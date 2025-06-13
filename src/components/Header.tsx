export default function Header() {
  return (
    <header className="relative h-[200px] flex items-center justify-center overflow-hidden font-gruppo">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/home/header.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="z-10 text-white text-center">
        <div className="flex flex-col items-center text-[50px] tracking-[27px] leading-none">
          <span>ATLANTIS</span>
          <span className="text-2xl tracking-[12px]">BURGUER</span>
        </div>
      </div>
    </header>
  );
}
