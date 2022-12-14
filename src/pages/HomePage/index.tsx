import Header from "./Header";
import Footer from "./Footer";
import styles from "./styles.module.scss";
import Intro from "./Intro";
import Features from "./Features";
import Advantages from "./Advantages";
import Customize from "./Customize";
import Testimonial from "./Testimonial";
import Faq from "./Faq";


const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
     <Header/>
     <Intro />
     <Features />
     <Advantages />
     <Customize />
     <Testimonial />
     <Faq />
     <Footer /> 
    </div>
  )
};

export default HomePage;



 