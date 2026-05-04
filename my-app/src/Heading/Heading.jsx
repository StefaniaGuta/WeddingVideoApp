import { useNavigate } from "react-router-dom";
import styles from './Heading.module.css';
import MenuMobile from "../Menu/Menu";

const Heading = ({ onContactClick }) => {
    const navigate = useNavigate()

return (
  <section className={styles.HeadinSection}>

      <h2 onClick={() => navigate("/")}>Home</h2>
      <h2 onClick={() => navigate("/guests")}>Guests</h2> 
      <h2 onClick={() => navigate("/maids")}>BrideMaids</h2>
    <MenuMobile onContactClick={onContactClick}/>
  </section>

)
}

export default Heading;