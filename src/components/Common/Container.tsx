import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Container = ({ children }: IProps) => {
  return <div className="container">{children}</div>;
};

export default Container;
