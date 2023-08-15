import styles from './footer.module.css';
import SocialMedia from '../../../common/socialMedia';

const Footer = () => {
    return (
        <div className={styles.wrapperFooter}>
            <span>© 2022 inungbp. All Rights Reserved.</span>
            <SocialMedia />
        </div>
    );
};

export default Footer;
