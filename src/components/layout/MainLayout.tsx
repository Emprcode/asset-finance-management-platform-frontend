import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <hr />
      <div className='main'>{children}</div>
      <Footer />
    </div>
  );
};
