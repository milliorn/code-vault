import { motion } from "framer-motion";

import { routeVariants, childVariants } from "../utils/routeVariants";

export function About() {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="about component"
    >
      <motion.h1 variants={childVariants} initial="initial" animate="final">
        About Component
      </motion.h1>
    </motion.div>
  );
}
