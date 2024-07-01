import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function ContainerFluid({ children }: ContainerProps) {
  return <div className="container-fluid mt-3">{children}</div>;
}

export function ContainerCentered({ children }: ContainerProps) {
  return (
    <div className="d-flex justify-content-center align-items-center p-3">
      {children}
    </div>
  );
}
