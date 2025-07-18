import { ReactNode } from "react";
import FIrstLoading from "./FirstLoading";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <FIrstLoading />
      {children}
    </>
  );
}
