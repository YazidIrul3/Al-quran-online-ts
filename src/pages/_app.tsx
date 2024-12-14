import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <div className="px-2 bg-slate-100 min-h-screen h-full">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
