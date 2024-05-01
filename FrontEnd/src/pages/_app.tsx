import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MyAppProvider } from "@/Contexts/TaskAppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyAppProvider>
      <Component {...pageProps} />
    </MyAppProvider>
  );
}
