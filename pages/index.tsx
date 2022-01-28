import React, { useState, useEffect } from "react";
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
import ModalComponent from "../components/SubmitModal";
import Banner from "../components/Banner";
import AlertComponent from "../components/Alert";

const Home = () => {
  const [isOpenBanner, setIsOpenBanner] = useState<boolean>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>();
  const [alertState, setAlertState] = useState({
    isOpen: false,
    msg: "",
    severity: "",
  });

  const handleCloseBanner = () => {
    setIsOpenBanner(false);
    setIsOpenModal(false);
  };

  const handleShowBanner = () => {
    setIsOpenBanner(true);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleCloseAlert = () => {
    setAlertState({
      isOpen: false,
      msg: "",
      severity: "",
    });
  };

  const handleShowAlert = (msg: string, severity: string) => {
    setAlertState({
      isOpen: true,
      msg: msg,
      severity: severity,
    });
  };

  return (
    <React.StrictMode>
      <Head>
        <title>Zilionixx ICO Landing</title>
        <meta
          name="description"
          content="Next generation blockchain, Zilionixx"
        />
        <link rel="icon" href="/logo.svg" />
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
      </Head>
      <Banner
        isOpen={isOpenBanner}
        handleBannerClose={handleCloseBanner}
        handleBannerShow={handleShowBanner}
        handleShowModal={() => setIsOpenModal(true)}
      />
      <Toparea />
      <Header />
      <FirstContent handleShowAlert={handleShowAlert} />
      <ModalComponent
        isOpen={isOpenModal}
        handleClose={handleCloseModal}
        handleShowAlert={handleShowAlert}
      />
      <Option handleShowAlert={handleShowAlert} />
      <OurTokens />
      <Distribution handleShowAlert={handleShowAlert} />
      <Roadmap />
      <OurTeam />
      <FAQs />
      <News />
      <ConnectWithUs />
      <Footer handleShowAlert={handleShowAlert} />
      <Bottomarea />
      <AlertComponent alertData={alertState} handleClose={handleCloseAlert} />
    </React.StrictMode>
  );
};
export default Home;
