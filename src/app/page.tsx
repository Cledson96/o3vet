import Feature from "./components/features/features";
import Headers from "./components/headers/headers";
import SlideShow from "./components/home/slideShow/slideShow";
import QuemSomos from "./components/home/quemSomos/quemSomos";
import Servicos from "./components/home/servicos/servicos";

export default async function Home() {
  return (
    <>
      <Headers />
      <SlideShow />
      <Feature />
      <QuemSomos />
      <Servicos />
    </>
  );
}
