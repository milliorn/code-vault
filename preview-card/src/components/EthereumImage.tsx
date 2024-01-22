import Price from "./Price";
import Time from "./Time";

/* render image */
export default function EthereumImage({
  coinRng,
  daysRng,
}: {
  coinRng: string;
  daysRng: string;
}): JSX.Element {
  const styles =
    "border-b-2	border-solid	border-slate-700 flex font-normal justify-between my-4 mx-0 pb-3" as string;
  return (
    <div className={styles}>
      <Price coinRng={coinRng} />
      <Time daysRng={daysRng} />
    </div>
  );
}
