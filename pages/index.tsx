import Head from "next/head";
import Toparea from "../components/Toparea";
import Header from "../components/Header";
import FirstContent from "../components/FirstContent";
import Option from "../components/Option";
import OurTokens from "../components/OurTokens";
import Roadmap from "../components/Roadmap";
import Bottomarea from "../components/BottomArea";
import Footer from "../components/Footer";
import OurTeam from "../components/OurTeam";
import FAQs from "../components/FAQs";
import News from "../components/News";
import ConnectWithUs from "../components/ConnectWithUs";
import Distribution from "../components/Distribution";
import { getUserDetails } from "../api";

const Home = (props: any) => {
  return (
    <div>
      <Head>
        <title>Zilionixx ICO Landing</title>
        <meta
          name="description"
          content="Next generation blockchain, Zilionixx"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          id="ct-google-fonts-css"
          href="//fonts.googleapis.com/css?family=Montserrat%3A500%2Cregular%2C300%2C700%2C200%7COpen+Sans%3A300%2C700&#038;subset=latin%2Clatin-ext%2Cvietnamese%2Ccyrillic-ext%2Ccyrillic%2Cgreek%2Cgreek-ext&#038;ver=4.9.8"
          type="text/css"
          media="all"
        />

        {/* <link
          rel="stylesheet"
          id="vc_tta_style-group-css"
          href="https://codex-themes.com/themes/cryption/wp-content/plugins/bwp-minify/min/?f=themes/wp-content/plugins/js_composer/assets/css/js_composer_tta.min.css,themes/wp-content/plugins/js_composer/assets/lib/bower/animate-css/animate.min.css,themes/wp-content/themes/cryption/css/ct-countdown.css,themes/wp-content/themes/cryption/css/icons-material.css,themes/wp-content/plugins/yikes-inc-easy-mailchimp-extender/public/css/yikes-inc-easy-mailchimp-extender-public.min.css,themes/wp-content/themes/cryption/css/odometer-theme-default.css,themes/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css,themes/wp-content/themes/cryption/css/wp-mediaelement.css,themes/wp-content/themes/cryption/css/ct-blog.css,themes/wp-content/themes/cryption/css/ct-additional-blog.css,themes/wp-content/themes/cryption/css/ct-itemsAnimations.css"
          type="text/css"
          media="all"
        /> */}
      </Head>
      <Toparea />
      <Header />
      <FirstContent />
      <Option />
      <OurTokens />
      <Distribution />
      <Roadmap />
      <OurTeam />
      <FAQs />
      <News />
      <ConnectWithUs />
      <Footer />
      <Bottomarea />
    </div>
  );
};

Home.getInitialProps = async (ctx: any) => {
  const data = await getUserDetails();
  return { stars: data };
};
export default Home;
