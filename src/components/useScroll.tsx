//test
import { useInView } from "react-intersection-observer";
import { useAnimation, AnimationControls } from "framer-motion";

export const useScroll = (): [
  Element | null | undefined | any,
  AnimationControls
] => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.2 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

//const element: (node?: Element | null | undefined) => void
