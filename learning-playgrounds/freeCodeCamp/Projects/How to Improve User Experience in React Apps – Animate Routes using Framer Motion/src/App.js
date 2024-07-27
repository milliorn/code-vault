import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { LocationProvider } from "./components/LocationProvider";
import { RoutesWithAnimation } from "./components/RoutesWithAnimation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
