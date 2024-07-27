import { motion } from "framer-motion";

import { routeVariants, childVariants } from "../utils/routeVariants";

export function Home() {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="home component"
    >
      <motion.h1 variants={childVariants} initial="initial" animate="final">
        Home Component
      </motion.h1>
    </motion.div>
  );
}
