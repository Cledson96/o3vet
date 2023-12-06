import Feature from "./components/features/features";
import Headers from "./components/headers/headers";
import SlideShow from "./components/home/slideShow/slideShow";

export default async function Home() {
  return (
    <>
      <Headers />
      <SlideShow />
      <Feature />
    </>
  );
}
