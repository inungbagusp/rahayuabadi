import styles from './footer.module.css';
import SocialMedia from '../../../common/socialMedia';

const Footer = () => {
    return (
        <div className={styles.footerGlobal}>
            <div className={styles.wrapperFooter}>
                <span>© 2023 RahayuAbadi. All Rights Reserved.</span>
                <SocialMedia />
            </div>
        </div>
    );
};

export default Footer;
