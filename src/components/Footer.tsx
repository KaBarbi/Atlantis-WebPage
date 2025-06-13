export default function Footer() {
  return (
    <footer className="bg-[#0b2438] text-white px-8 py-12">
      <div className="max-w-[1200px] mx-auto flex flex-wrap gap-10 justify-center">
        {/* Mapa */}
        <div className="flex-grow basis-[25%] max-w-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.3876253326573!2d-46.56711289672195!3d-23.62497423545788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cc37f5cf851%3A0x80b819eeaec3d2ff!2sAtlantis%20Burguer!5e0!3m2!1spt-BR!2sbr!4v1747325497327!5m2!1spt-BR!2sbr"
            className="w-full h-[250px] rounded-lg"
            allowFullScreen
            referrerPolicy="no-referrer"
            title="Mapa da localização da Atlantis Burguer"
          ></iframe>
        </div>

        {/* Informações */}
        <div className="flex flex-col gap-5 justify-center">
          <div className="info">
            <h3 className="font-gruppo text-xl mb-1">ENDEREÇO</h3>
            <p className="font-montserrat">
              Av. Dr. Augusto de Toledo, 1238 - Santa Paula
            </p>
            <p className="font-montserrat">
              09540-040 / São Caetano do Sul - SP
            </p>
          </div>
          <div className="info">
            <h3 className="font-gruppo text-xl mb-1">ENTRE EM CONTATO</h3>
            <p className="font-montserrat">+55 (11) 4226-2746</p>
          </div>

          {/* Redes sociais */}
          <div className="flex gap-5">
            <a
              href="https://wa.me/551142262748"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <img
                src="/images/footer/whatsapp.svg"
                alt="WhatsApp"
                className="w-[30px] h-[30px] invert hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.facebook.com/share/18c5NJrLZT/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src="/images/footer/facebook.svg"
                alt="Facebook"
                className="w-[30px] h-[30px] invert hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.instagram.com/atlantisburguer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/images/footer/instagram.svg"
                alt="Instagram"
                className="w-[30px] h-[30px] invert hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Avaliação Google */}
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h3 className="font-gruppo text-xl">AVALIE-NOS NO GOOGLE</h3>
          <p className="font-montserrat">Seu feedback é importante para nós!</p>
          <a
            href="https://g.page/r/Cf_Sw67uGbiAEAE/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/footer/Google-Review.png"
              alt="Avalie no Google"
              className="w-[160px] hover:scale-105 transition-transform"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
