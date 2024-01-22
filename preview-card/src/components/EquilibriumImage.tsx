import equilibrium from "../images/image-equilibrium.jpg";

/* render image */
export default function EquilibriumImage(): JSX.Element {
  const styles = "nft-card-image rounded-[2%] relative w-full" as string;
  const alt = "equilibrium preview" as string;
  const size = 604 as number;
  return (
    <img
      className={styles}
      src={equilibrium}
      alt={alt}
      width={size}
      height={size}
    />
  );
}
