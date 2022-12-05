import BannerP from './images/banner.png';
import BannerM from './images/banner_m.png';
import Slogan from './images/slogan.png';

const Banner = () => {
    return (
        <div className="home-banner relative h-auto  overflow-hidden md:h-[504px]">
            <div className="absolute top-2 left-[-2%] w-full md:left-[48%] md:top-0 md:-translate-x-1/2">
                <img
                    src={Slogan}
                    alt="千元定期定額存基金"
                    className="mx-auto h-auto w-[460px] max-w-[60%] md:max-w-full lg:h-[463px]"
                />
            </div>
            <picture>
                <source media="(max-width: 767px)" srcSet={BannerM} />
                <img
                    src={BannerP}
                    alt="千元定期定額存基金"
                    className="h-full w-[1920px] md:absolute md:left-1/2 md:top-0 md:h-[508px] md:max-w-none md:-translate-x-1/2"
                />
            </picture>
        </div>
    );
};

export default Banner;
