import "./App.css";
import Scene from "./Scene";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

function Title3D() {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
        }}
        camera={{
          fov: 55,
          near: 0.1,
          far: 200,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

function HeaderComponent() {
  return (
    <header className="relative z-50 mx-7 flex max-lg:flex-col justify-between py-6 border-b border-white/60 pointer-events-auto">
      <div className="whitespace-nowrap">
        <h1 className="font-bold inline align-middle mr-2">Ich liebe Mia</h1>
   
      </div>
    </header>
  );
}

function Credits() {
  return (
    <div className="flex fixed w-full justify-between bottom-0 p-8">
      <p>
        Made by <a href="https://twitter.com/romanjeanelie">@romanjeanelie</a> for{" "}
        <a href="https://twitter.com/codrops">@codrops</a>
      </p>
      <a href="https://tympanus.net/codrops/demos" className="all-demos">
        All Demos
      </a>
    </div>
  );
}

function Aside() {
  return (
    <div className="absolute top-1/2 right-16 text-lg">
      <p className="mt-40 opacity-50"> 2 Oktober 2024</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Leva
        collapsed={false}
        flat={true}
        hidden
        theme={{
          sizes: {
            titleBarHeight: "28px",
          },
          fontSizes: {
            root: "10px",
          },
        }}
      />
      <main className="font-sans">
        <HeaderComponent />
        <Title3D />
      
      </main>
    </>
  );
}

export default App;
