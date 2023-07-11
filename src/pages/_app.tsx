import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ModelProvider, rootStore} from "@/Models/Root"
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


const options = {
  timeout: 2000,
  position: positions.BOTTOM_CENTER
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModelProvider value={rootStore}>
      <Provider template={AlertTemplate} {...options}>
        <Component {...pageProps} />
      </Provider>
    </ModelProvider>
  )
}
