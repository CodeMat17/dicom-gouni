import { useInView } from "react-intersection-observer";

export const useCardInView = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% is in view
  });
  return [ref, inView];
};
