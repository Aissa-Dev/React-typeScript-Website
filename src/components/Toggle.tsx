import { ReactChild, ReactChildren } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

type ToggleProps = {
  children: JSX.Element | JSX.Element[];
  title: string;
};

export const Toggle = ({ children, title }: ToggleProps) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};
