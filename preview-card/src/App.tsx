import Creator from "./components/Creator";
import EquilibriumImage from "./components/EquilibriumImage";
import EthereumImage from "./components/EthereumImage";
import IconView from "./components/IconView";

/* main app */
function App(): JSX.Element {
  const equilibriumRng = `Equilibrium #${Math.floor(Math.random() * 255 + 1)}`;

  const daysRng = Math.floor(Math.random() * 5 + 2).toString();
  const coinRng = Math.random().toPrecision(3);
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const styles = [
    "card bg-slate-800 rounded-[2%] text-slate-400 font-light	leading-7 my-12 mx-auto p-6 relative w-96	text-lg container",
    "text-white text-xl font-semibold leading-7 mt-5 mb-0 ml-[10] mr-0 hover:cursor-pointer hover:text-cyan-400",
  ] as const;

  return (
    <div className={styles[0]}>
      <EquilibriumImage />
      <IconView />
      <p className={styles[1]}>{equilibriumRng}</p>
      <p>{text}</p>
      <EthereumImage coinRng={coinRng} daysRng={daysRng} />
      <Creator />
    </div>
  );
}

export default App;
