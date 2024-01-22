import imgUrl from "../images/icon-view.svg";

/* render view icon */
export default function IconView(): JSX.Element {
  const atl = "view icon" as string;
  const styles =
    "justify-center img-overlay items-center bg-cyan-400 rounded-[2%] flex h-96	absolute left-px opacity-0 top-px w-96 hover:opacity-60 hover:ease-in-out duration-1000" as string;

  return (
    <img src={imgUrl} alt={atl} className={styles} width={384} height={384} />
  );
}
