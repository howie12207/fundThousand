import { useState } from 'react';

import { KeyboardArrowDown } from '@mui/icons-material';
import { ModalTableData } from './ModalTableData';

const TableData = () => {
    const [modalTarget, setModalTarget] = useState('');

    return (
        <>
            <div className="hidden md:block">
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
                                <td className="bg-red-300">50.00</td>
                                <td className="bg-red-300">50.00</td>
                                <td className="bg-red-300">50.00</td>
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
                                <td className="bg-red-300">-66.79%</td>
                                <td className="bg-red-300">-58.44%</td>
                                <td className="bg-red-300">-51.95%</td>
                                <td>-3.51%</td>
                                <td>18.74%</td>
                                <td className="bg-red-300">38.95%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="my-2 text-xs sm:text-base">
                    資料來源：富蘭克林投顧整理。
                    <div className="font-bold">
                        投資人因不同時間進場，將有不同之投資績效，過去之績效亦不代表未來績效之保證。
                    </div>
                </div>
            </div>

            <button
                className="tranistion flex w-full animate-bounce items-center justify-center rounded-xl border-2 border-blue-700 py-1 text-center text-blue-700 hover:shadow-lg md:hidden"
                onClick={() => setModalTarget('tableData')}
            >
                發生什麼事？
                <KeyboardArrowDown />
            </button>

            <ModalTableData modalTarget={modalTarget} setModalTarget={setModalTarget} />
        </>
    );
};

export default TableData;
