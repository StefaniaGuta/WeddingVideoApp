import Heading from '../../Heading/Heading';
import styles from './HomePage.module.css';


import cover from '../../Images/cover-2.jpg'
import handsRings from '../../Images/rings.jpg';
import firstMeet from '../../Images/first_meet.jpg';
import firstDate from '../../Images/first_date.jpg';
import proposal from '../../Images/proposal.jpg';
import engagement from '../../Images/engagement.jpg';
import brideImg from '../../Images/bride.jpg';
import groomImg from '../../Images/groom.jpg';
import footerImg from '../../Images/footer.png';

const HomePage = () => {
  return (
      <section className={styles.mainSection}>
          <Heading/>
          <img className={styles.coverImage} src={cover} alt='imagine'/>  
          
          <section className={styles.commingSoonSection}>
            <h2 className={styles.comingText}>COMING SOON</h2>
            <ul className={styles.countdown}>
              <li>
                <p>61</p>
                <span>DAYS</span>
              </li>
               <li>
                <p>05</p>
                <span>HOURES</span>
              </li>
               <li>
                <p>57</p>
                <span>MINUTES</span>
              </li>
               <li>
                <p>30</p>
                <span>SECONDS</span>
              </li>
            </ul>
          </section>

          <img className={styles.handsRings} src={handsRings} alt='imagine'/> 

          <section className={styles.loveStorySection}>
            <h2 className={styles.loveStoryTitleSection}>Love Story</h2>  
            <div className={styles.storyMoments}>
              <div>
              <h3 className={styles.momentTilte}>First Meet</h3>
              <p className={styles.momentParagraph}>
                Saturday, July 1st, 2023 <br/>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. 
              </p>
              </div>
               <img className={styles.storyImgs} src={firstMeet} alt='imagine'/>  
            </div>
            <div className={styles.storyMoments}>
              <img className={styles.storyImgs} src={firstDate} alt='imagine'/>  
              <div>
              <h3 className={styles.momentTilte}>First Date</h3>
              <p className={styles.momentParagraph}>
                Tuesday, July 4th, 2023<br/>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. 
              </p>
              </div>
               
            </div>
            <div className={styles.storyMoments}>
              <div>
              <h3 className={styles.momentTilte}>Marriage Proposal</h3>
              <p className={styles.momentParagraph}>
                Tuesday, July 11th, 2023<br/>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. 
              </p>
              </div>
               <img className={styles.storyImgs} src={proposal} alt='imagine'/>  
            </div>
            <div className={styles.storyMoments}>
               <img className={styles.storyImgs} src={engagement} alt='imagine'/>  
              <div>
              <h3 className={styles.momentTilte}>Our Engagement</h3>
              <p className={styles.momentParagraph}>
                Thursday, September 21th, 2023<br/>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. 
              </p>
              </div>
            </div>
          </section> 

          <section className={styles.aboutUsSection}>
            <h2 className={styles.aboutSectionTitle}>About Us</h2>
            <div className={styles.aboutUsContainer}>
              <div>
              <h3>Amelia Williams</h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. 
                </p>
              </div>
              <div>
                <img src={brideImg} alt='Imagine'/>
              </div>
              <div>
                <img src={groomImg} alt='Imagine'/>
              </div>
              <div>
              <h3>James Jackson</h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. 
                </p>
              </div>
            </div>
          </section>

          <section style={{textAlign: 'center', fontFamily: 'Vladimir Script', fontSize: '34px'}}>
            <p>"Nobody has ever measured, even poets, how mush a hart can hold."</p>
            <h2>- Zelda Fitzgerals</h2>
          </section>  
          <img className={styles.footerImg} src={footerImg} alt='imagine'/>
      </section>
  )
}

export default HomePage;