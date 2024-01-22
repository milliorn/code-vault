import imageAvatar from "../images/image-avatar.png";

/* render who made the item */
export default function Creator(): JSX.Element {
  const avatar = "avatar" as string;
  const styles = [
    "creator items-center flex slate-800",
    "rounded-[100%] border	border-solid	border-white	mr-2.5 w-10",
    "text-white cursor-pointer hover:text-cyan-400",
  ] as const;
  const size = 132 as number;
  return (
    <div className={styles[0]}>
      <img
        src={imageAvatar}
        alt={avatar}
        className={styles[1]}
        width={size}
        height={size}
      />
      <div>
        <span>Creation of </span>
        <span className={styles[2]}>Lorem Ipsum</span>
      </div>
    </div>
  );
}
