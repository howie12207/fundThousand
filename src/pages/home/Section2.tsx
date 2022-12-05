import HomeForm from './HomeForm';

import ImgGirl from './images/girl.png';

const Section2 = () => {
    return (
        <section className="form-1-section py-10 px-2 sm:py-20">
            <h2 className="mb-8 text-center text-2xl font-black text-blue-700 sm:text-3xl">
                輕鬆開戶立享3筆定期定額終身0手續費
            </h2>
            <div className="relative flex items-start justify-center">
                <img
                    className="hidden w-[531px] max-w-[50%] translate-y-20 md:block lg:h-[456px]"
                    src={ImgGirl}
                    alt="人物"
                    loading="lazy"
                />
                <HomeForm order="1" />
            </div>
        </section>
    );
};

export default Section2;
