import Footer from "../footer";
import Navbar from "../navbar";
import { ScrollToTop } from "../scroll-to-top";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-[100dvh]">
      <ScrollToTop />
      <Navbar />
      <main>
        <div className="mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
