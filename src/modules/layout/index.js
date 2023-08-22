import Header from './components/header';
import Footer from './components/footer';

const Layout = ({children}) => {
    return (
        <div>
            <Header />
                {children}
                <div className="whatsapp">
                    <a href="https://api.whatsapp.com/send?phone=+6282333265159&amp;text=Halo dengan Rahayu Abadi ?" target="__blank">
                        <img src="/assets/icon/whatsapp.png" alt="wa" />
                    </a>
                </div>
            <Footer />
        </div>
    )
}

export default Layout;
