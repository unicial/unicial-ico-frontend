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
import { getUserDetails } from "../api";
import Banner from "../components/Banner";
import AlertComponent from "../components/Alert";

const Home = (props: any) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>();
  const [alertState, setAlertState] = useState({
    isOpen: false,
    msg: "",
    severity: "",
  });

  const handleClose = () => {
    setIsOpen(false);
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

  useEffect(() => {
    let bannerStatus;
    if (typeof window !== "undefined") {
      bannerStatus = localStorage.getItem("banner_status");
    }
    if (bannerStatus === "disable") {
      setIsOpen(false);
      setIsOpenModal(false);
    } else {
      setIsOpen(true);
      setIsOpenModal(true);
    }
  }, []);

  return (
    <React.StrictMode>
      <Banner isOpen={isOpen} handleClose={handleClose} />
      <Toparea />
      <Header />
      <FirstContent handleShowAlert={handleShowAlert} />
      <ModalComponent
        isOpen={isOpenModal}
        handleClose={handleCloseModal}
        handleShowAlert={handleShowAlert}
      />
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
      <AlertComponent alertData={alertState} handleClose={handleCloseAlert} />
    </React.StrictMode>
  );
};

Home.getInitialProps = async (ctx: any) => {
  const data = await getUserDetails();
  return { stars: data };
};
export default Home;
