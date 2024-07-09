import { h } from "preact";
import Csv from "./svg/Csv";
import Github from "./svg/Github";
import Linkedin from "./svg/Linkedin";
import Portfolio from "./svg/Portfolio";
import Twitter from "./svg/Twitter";

export const tileData = [
  {
    href: "https://milliorn.github.io/digital-resume/",
    svg: <Csv />,
    p: "Resume | CSV",
  },
  {
    href: "https://milliorn.xyz/",
    svg: <Portfolio />,
    p: "Portfolio",
  },
  {
    href: "https://www.linkedin.com/in/scott-milliorn/",
    svg: <Linkedin />,
    p: "Linkedin",
  },
  {
    href: "https://github.com/milliorn",
    svg: <Github />,
    p: "Github",
  },
  {
    href: "https://twitter.com/scottmilliorn",
    svg: <Twitter />,
    p: "Twitter",
  },
];
