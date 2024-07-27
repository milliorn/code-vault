import { lazy, Suspense, useState } from "react";
import "./App.css";

const loadViteLogoContainer = () =>
  import("./components/ViteLogoContainer").then((module) => ({
    default: module.ViteLogoContainer,
  }));

const ViteLogo = lazy(loadViteLogoContainer);

const ReactLogo = lazy(() =>
  import("./components/ReactLogoContainer").then(
    (module) => ({ default: module.ReactLogoContainer } as const)
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ViteLogo />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ReactLogo />
        </Suspense>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
