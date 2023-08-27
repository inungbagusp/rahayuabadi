import AboutUs from './AboutUs';
import styles from './home.module.css'

const ContentHomepage = () => {
    return (
        <div className={styles.WrapperHomepage}>
            <AboutUs />
        </div>
    )
};

export default ContentHomepage;
