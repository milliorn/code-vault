import ethereum from "../images/icon-ethereum.svg";

/* display price of item */
export default function Price({ coinRng }: { coinRng: string }): JSX.Element {
  const styles = ["price items-center flex text-cyan-400", "mr-1"] as const;
  const alt = "Eth icon" as string;

  return (
    <div className={styles[0]}>
      <img
        src={ethereum}
        alt={alt}
        className={styles[1]}
        width={11}
        height={18}
      />
      <span>{coinRng} ETH</span>
    </div>
  );
}
