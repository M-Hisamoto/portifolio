import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Hisamoto" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://docs.google.com/document/d/1W_4lSdC6RdY81zhWeyWGZSGI3SDM9YT8/edit?usp=sharing&ouid=113676463100163427153&rtpof=true&sd=true" className="btn">
        Currículo</a>
    </aside>
  );
};

export default Sidebar;
