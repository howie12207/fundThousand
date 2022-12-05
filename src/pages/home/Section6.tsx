import ImgClock from './images/clock.png';
import ImgPhone from './images/phone.png';

const Section6 = () => {
    return (
        <section className="bg-orange-50 py-8 px-2 text-center">
            <h2 className="mb-4 text-2xl font-black text-blue-700 sm:text-3xl">投資方式2選1</h2>
            <div className="md:flex md:justify-center">
                <div className="mb-8 border-b border-dashed border-black pb-8 md:mb-0 md:border-b-0 md:border-r md:px-28 md:pb-0">
                    <img
                        className="mx-auto mb-4 h-[119px] w-[96px]"
                        src={ImgClock}
                        alt="定期定額"
                        loading="lazy"
                    />
                    <div className="mb-2 text-3xl font-bold text-gray-700">定期定額</div>
                    <div className="line-through">台幣3,000元</div>
                    <div className="text-2xl font-bold text-blue-700">台幣1,000元</div>
                </div>
                <div className="md:px-28">
                    <img
                        className="mx-auto mb-4 h-[119px] w-[96px]"
                        src={ImgPhone}
                        alt="單筆投資"
                        loading="lazy"
                    />
                    <div className="mb-2 text-3xl font-bold text-gray-700">單筆投資</div>
                    <div className="line-through">台幣30,000元</div>
                    <div className="text-2xl font-bold text-blue-700">台幣10,000元</div>
                </div>
            </div>
        </section>
    );
};

export default Section6;
