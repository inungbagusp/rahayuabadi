import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import MobileDrawer from '../../../common/drawer';
import styles from './header.module.css';

const Header = () => {

    const router = useRouter();

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const header = document.getElementById('header');
            const checkScrollTop = () => {
                // handle show hide header
                if (header) {
                    if (window.pageYOffset > 84) {
                        header.classList.add('change-background');
                    } else {
                        header.classList.remove('change-background');
                    }
                }
            };
            window.addEventListener('scroll', checkScrollTop);
        }
    }, [])

    return (
        <div className={styles.wrapperHeader} id='header'>
            <Link legacyBehavior href="/" as="/">
                <a className={styles.logoTitle}>Rahayu Abadi</a>
            </Link>
            <div className={styles.midHeader}>
                <Link legacyBehavior href="/" as="/">
                    <a>
                        <p className={router.pathname === '/' ? styles.active : styles.midHeaderItem}>Home</p>
                    </a>
                </Link>
                <Link legacyBehavior href="/" as="/">
                    <a>
                        <p className={router.pathname === '/profile' ? styles.active : styles.midHeaderItem}>Profile</p>
                    </a>
                </Link>
                <Link legacyBehavior href="/" as="/">
                    <a>
                    <p className={router.pathname === '/experience' ? styles.active : styles.midHeaderItem}>Product</p>
                    </a>
                </Link>
            </div>
            <button type="button" className={styles.buttonContactMe}>
                <a href="https://api.whatsapp.com/send?phone=+6282333265159&amp;text=Halo" target="__blank">Contact us</a>
            </button>
            
            {/* mobile header */}
            <div className={styles.drawer}>
                <MobileDrawer router={router} />
            </div>
        </div>
    )
}

export default Header;
