import "../styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import "../styles/Toparea.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";
import "../styles/option.css";
import "../styles/firstcontent.css";
import "../styles/ourTokens.css";
import "../styles/bottomarea.css";
import "../styles/ourTeam.css";
import "../styles/footer.css";
import "../styles/codex-themes.css";
import "../styles/codex-themes1.css";
import "../styles/roadmap.css";
import "../styles/short-codes-custom.css";
import "../styles/faq.css";
import "../styles/distribution.css";
import "../styles/modal.css";
import "../styles/banner.css";
import "../styles/alert.css";
import "../styles/contactus.css";
import "../styles/news.css";
import { store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  let pageProps = {};
  if (context.Component.getInitialProps) {
    pageProps = await context.Component.getInitialProps(context.ctx);
  }
  return {
    pageProps,
  };
};

export default MyApp;
