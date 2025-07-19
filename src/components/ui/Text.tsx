import { HTMLAttributes, ReactNode, useRef } from "react";
import { useCursorContext } from "../core/CursorWrapper";

export default function Text({
  children,
  ...rest
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const { setIsHovered, setCursorSize } = useCursorContext();

  const handleEnter = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setCursorSize(rect.height);
    }
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
    setCursorSize(40);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </div>
  );
}
