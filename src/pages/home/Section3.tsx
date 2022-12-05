import ImgChart1 from './images/chart1.svg';
import ImgChart2 from './images/chart2.svg';
import ImgExpert from './images/expert.png';
import ImgHandCash from './images/hand_cash.png';
import ImgCash from './images/cash.png';

import scrollTo from '@/utils/scrollTo';

const Section3 = () => {
    return (
        <section className="bg-orange-50 py-8 px-2 text-center">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-4 text-2xl font-black text-blue-700 sm:text-3xl">
                    跟尋市場長期致勝的秘訣美國平衡型基金
                </h2>
                <p className="text-lg">
                    以美股市場而言整體呈現「牛長熊短，長期向上」走勢，若持續定期定額投資，獲利與報酬就能跟著市場一起成長，定期定額報酬率也持續墊高。
                </p>

                <div className="my-8 rounded-xl bg-white p-4 shadow">
                    <div className="mt-4 font-bold text-red-800 sm:text-2xl">
                        【定期定額報酬走勢圖】
                    </div>
                    <img
                        className="my-4 w-[1920px]"
                        src={ImgChart1}
                        alt="定期定額報酬走勢圖"
                        loading="lazy"
                    />
                    <div className="my-2 text-xs sm:text-base">
                        理柏資訊，計算自2000/01/01至2022/09/30，以美股S&P 500指數為準。
                        <span
                            className="cursor-pointer text-blue-700 underline"
                            onClick={() => {
                                scrollTo('.warning', 'start', 'start');
                            }}
                        >
                            詳細說明
                        </span>
                    </div>
                </div>

                <div className="my-8 rounded-xl bg-white p-4 shadow">
                    <div className="mt-4 font-bold text-red-800 sm:text-2xl">
                        【只要撐過投資「微笑曲線」的低點
                        <br />
                        到了谷底再上揚時，報酬率就會快速回升！】
                    </div>
                    <img
                        className="my-4 w-[1920px]"
                        src={ImgChart2}
                        alt="微笑曲線"
                        loading="lazy"
                    />
                    <div className="overflow-x-scroll">
                        <table className="base-table">
                            <thead>
                                <tr>
                                    <td>月份</td>
                                    <td>01</td>
                                    <td>02</td>
                                    <td>03</td>
                                    <td>04</td>
                                    <td>05</td>
                                    <td>06</td>
                                    <td>07</td>
                                    <td>08</td>
                                    <td>09</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>價格</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>13</td>
                                    <td>12</td>
                                    <td>9</td>
                                    <td>5</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>扣款金額</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>單位數</td>
                                    <td>10.00</td>
                                    <td>9.09</td>
                                    <td>76.69</td>
                                    <td>8.33</td>
                                    <td>11.11</td>
                                    <td>20.00</td>
                                    <td>50.00</td>
                                    <td>50.00</td>
                                    <td>50.00</td>
                                    <td>25.00</td>
                                    <td>20.00</td>
                                    <td>16.67</td>
                                </tr>
                                <tr>
                                    <td>報酬率</td>
                                    <td>o.oo%</td>
                                    <td>5.oo%</td>
                                    <td>16.o6%</td>
                                    <td>5.35%</td>
                                    <td>-16.79%</td>
                                    <td>-44.81%</td>
                                    <td>-66.79%</td>
                                    <td>-58.44%</td>
                                    <td>-51.95%</td>
                                    <td>-3.51%</td>
                                    <td>18.74%</td>
                                    <td>38.95%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="my-2 text-xs sm:text-base">資料來源：富蘭克林投顧整理。</div>
                </div>

                <h2 className="text-2xl font-black text-blue-700 sm:text-3xl">
                    富蘭克林，幫您把投資做得更簡單
                </h2>
                <div className="my-4 rounded-xl bg-white p-4 shadow">
                    <div className="justify-evenly text-center md:flex">
                        <div className="my-4 mx-4 flex-1 md:my-0">
                            <div className="mx-auto h-40 w-48">
                                <img
                                    className="mx-aut h-[136px] w-[170px]"
                                    src={ImgExpert}
                                    alt="專家把關免煩惱"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mb-2 text-lg font-bold text-blue-700 md:text-2xl">
                                專家把關免煩惱
                            </div>
                            <div className="md:text-lg">
                                辛苦賺來的資產，就該交由專人幫您把關，讓你無後顧之憂！
                            </div>
                        </div>
                        <div className="my-4 mx-4 flex-1 md:my-0">
                            <div className="mx-auto h-40 w-48">
                                <img
                                    className="mx-auto h-[128px] w-[145px]"
                                    src={ImgHandCash}
                                    alt="終身零手續費3筆"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mb-2 text-lg font-bold text-blue-700 md:text-2xl">
                                終身零手續費3筆
                            </div>
                            <div className="md:text-lg">3筆定期定額終身0手續費</div>
                        </div>
                        <div className="my-4 mx-4 flex-1 md:my-0">
                            <div className="mx-auto h-40 w-48">
                                <img
                                    className="mx-auto h-[116px] w-[167px]"
                                    src={ImgCash}
                                    alt="超低門檻定期定額"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mb-2 text-lg font-bold text-blue-700 sm:text-2xl">
                                超低門檻定期定額
                            </div>
                            <div className="sm:text-lg">千元即可啟動</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;
