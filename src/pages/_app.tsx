import Footer from "@/components/layouts/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className=" bg-slate-50 min-h-screen h-full text-slate-900">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
