import HeadForCountry from "@/components/HeadForCountry";
import { store } from "@/utils/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HeadForCountry />

      <Component {...pageProps} />
    </Provider>
  );
}
