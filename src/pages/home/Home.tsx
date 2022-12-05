import Header from '@/components/header/Header';
import Banner from './Banner';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Footer from '@/components/footer/Footer';
import GoTop from '@/components/goTop/GoTop';
import FloatNav from '@/components/floatNav/FloatNav';

import './home.scss';

const Home = () => {
    return (
        <div>
            <Header />

            <main>
                <Banner />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
            </main>

            <Footer />

            <GoTop />
            <FloatNav />
        </div>
    );
};

export default Home;
