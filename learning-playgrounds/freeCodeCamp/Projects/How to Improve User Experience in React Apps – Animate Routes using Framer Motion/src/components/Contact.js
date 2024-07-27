import { motion } from "framer-motion";
import { routeVariants, childVariants } from "../utils/routeVariants";

export function Contact() {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="contact component"
    >
      <motion.h1 variants={childVariants} initial="initial" animate="final">
        Contact Component
      </motion.h1>
    </motion.div>
  );
}
