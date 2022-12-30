import ImgGift1 from './images/gift1.png';
import ImgGift2 from './images/gift2.png';

const Section4 = () => {
    return (
        <section className="mx-auto max-w-5xl py-8 px-2 text-center">
            <h2 className="mb-4 text-2xl font-black text-blue-700 sm:text-3xl">限時新戶好禮</h2>
            <p className="lg:text-lg">優惠期間：即日起-2023/03/31</p>

            <div className="my-4 rounded-xl border-4 border-blue-700 p-4 md:flex md:justify-evenly">
                <div>
                    <div className="mx-auto mb-2 flex h-48 w-48 flex-col items-center justify-center rounded-full border-4 border-blue-700">
                        <img
                            src={ImgGift1}
                            alt="精選禮"
                            className="mb-1 h-[104px] w-[98px]"
                            loading="lazy"
                        />
                        <span className="text-2xl font-black text-blue-700 lg:text-4xl">
                            精選禮
                        </span>
                    </div>
                    <div className="mb-2 text-lg font-bold md:text-2xl">
                        <span className="text-blue-700">下單優惠</span>
                        <br />
                        申購手續費
                    </div>
                    <div className="md:text-lg">
                        股票型基金<span className="text-blue-700">最低0元</span>
                        <br />
                        配息型基金<span className="text-blue-700">0元</span>
                    </div>
                </div>
                <div className="my-4 md:my-0">
                    <div className="mx-auto mb-2 flex h-48 w-48 flex-col items-center justify-center rounded-full border-4 border-blue-700">
                        <img
                            src={ImgGift2}
                            alt="見面禮"
                            className="mb-1 h-[104px] w-[98px]"
                            loading="lazy"
                        />
                        <span className="text-2xl font-black text-blue-700 lg:text-4xl">
                            見面禮
                        </span>
                    </div>
                    <div className="mb-2 text-lg font-bold md:text-2xl">
                        3筆定期定額<span className="text-blue-700">0元</span>
                        <br />
                        +紅利<span className="text-blue-700">3,000點</span>
                    </div>
                    <div className="md:text-lg">
                        新開戶完成即享
                        <br />
                        3筆定期定額0元優惠
                        <br />
                        與紅利點數3000點
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;
