import clock from "../images/icon-clock.svg";

/* show days remaining */
export default function Time({ daysRng }: { daysRng: string }): JSX.Element {
  const styles = ["time items-center flex", "mr-1"] as const;
  const alt = "time icon" as string;
  const size = 17 as number;

  return (
    <div className={styles[0]}>
      <img
        src={clock}
        alt={alt}
        className={styles[1]}
        width={size}
        height={size}
      />
      <span>{daysRng} Days Left</span>
    </div>
  );
}
