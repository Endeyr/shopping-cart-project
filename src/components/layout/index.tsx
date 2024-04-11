import Footer from "../footer";
import Navbar from "../navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="h-dvh">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
