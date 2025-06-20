import { Carousel } from "./components/Carousel";
import { Content } from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <Header />
<div
  className="w-full flex flex-col items-center justify-center gap-5 bg-center bg-cover bg-no-repeat px-4 py-6 max-md:gap-5"
    style={{ 
    backgroundImage: "url('/images/home/fundo.png')",
    backgroundPosition: "center bottom"
  }}
>
  <Menu />
  <Carousel />
</div>
      <Content/>
      <Footer />
    </>
  );
}

export default App;
