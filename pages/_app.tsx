import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="container grid grid-cols-12 gap-6 px-5 mx-auto my-14 lg:px-0">
        <div className="col-span-12 p-2 text-center shadow:custom-light dark:shadow-custom-dark bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl">
          <Sidebar />
        </div>
        <div className="col-span-12 bg-white lg:col-span-9 shadow:custom-light dark:shadow-custom-dark dark:bg-dark-500 rounded-2xl flex flex-col overflow-hidden">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.routs} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
