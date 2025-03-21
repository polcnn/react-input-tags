import type { ReactNode, CSSProperties } from "react";
import clsx from "clsx";

interface IProps {
  children: ReactNode;
  className?: string;
  direction?: "row" | "column";
  alignItems?: "flex-start" | "center" | "flex-end";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  gap?: number;
  style?: CSSProperties;
}

const Flex = ({
  children,
  className = "",
  direction = "row",
  alignItems = "center",
  justifyContent = "flex-start",
  gap,
  style = {},
}: IProps) => {
  return (
    <div
      className={clsx("flex", className)}
      style={{
        flexDirection: direction,
        alignItems,
        justifyContent,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
