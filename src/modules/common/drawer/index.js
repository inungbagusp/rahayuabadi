
import React from 'react';
import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';
import Image from 'next/image';
import CloseIcon from '@material-ui/icons/Close';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import useStyles from './style';

const BurgerMenu = (props) => {
    const styles = useStyles();
    const { router } = props;

    const [open, setOpen] = React.useState(false);

    return (
        <div className={styles.wrapperDrawer}>
            <IconButton onClick={() => setOpen(!open)}>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.333252H15.5V1.99992H0.5V0.333252ZM0.5 6.16658H15.5V7.83325H0.5V6.16658ZM0.5 11.9999H15.5V13.6666H0.5V11.9999Z" fill="#2C3136"/>
            </svg>
            </IconButton>
            <SwipeableDrawer anchor="right" open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
                <div className={styles.sidebar}>
                    <div className="wrapper-header">
                        <Image className="img-logo" src="/img/logo.svg" alt="logo" width={52} height={32} />
                        <CloseIcon onClick={() => setOpen(false)} className={styles.closeIcon} />
                    </div>
                    <Link legacyBehavior href="/" as="/">
                        <a className={router.pathname === '/' ? 'burger-item active' : 'burger-item'}>Home</a>
                    </Link>
                    <Link legacyBehavior href="/profile" as="/profile">
                        <a className={router.pathname === '/profile' ? 'burger-item active' : 'burger-item'}>Profile</a>
                    </Link>
                    <Link legacyBehavior href="/experience" as="/experience">
                        <a className={router.pathname === '/experience' ? 'burger-item active' : 'burger-item'}>Experience</a>
                    </Link>
                </div>
            </SwipeableDrawer>
        </div>
    );
};

export default BurgerMenu;
