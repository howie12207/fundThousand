import { Modal, Fade, Backdrop } from '@mui/material';
import { Close } from '@mui/icons-material';

type Props = {
    modalTarget: string;
    setModalTarget: (value: string) => void;
};

export const ModalTableData = ({ modalTarget, setModalTarget }: Props) => {
    return (
        <Modal
            open={modalTarget === 'tableData'}
            onClose={() => setModalTarget('')}
            closeAfterTransition
            BackdropComponent={Backdrop}
        >
            <Fade in={modalTarget === 'tableData'}>
                <div className="base-modal fixed top-1/2 left-1/2 max-h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded bg-white p-4 focus:outline-none sm:w-[60%]">
                    <div className="absolute right-2 top-2">
                        <Close onClick={() => setModalTarget('')} className="cursor-pointer" />
                    </div>
                    <div className="mb-2 text-center text-sm">【微笑曲線的秘密】</div>
                    <div className="mb-4 text-center text-xs">
                        從下表中可以看見，小富堅持的每月定期定額投資，使他在淨值滑落至2元時得以買進更多單位，因此在淨值回升時，報酬率可以快速反彈！
                    </div>
                    <div>
                        <table className="base-table text-center">
                            <thead>
                                <tr>
                                    <td>月份</td>
                                    <td>價格</td>
                                    <td>扣款金額</td>
                                    <td>單位數</td>
                                    <td>報酬率</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>10</td>
                                    <td>100</td>
                                    <td>10.00</td>
                                    <td>0.00%</td>
                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>11</td>
                                    <td>100</td>
                                    <td>9.09</td>
                                    <td>5.00%</td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>13</td>
                                    <td>100</td>
                                    <td>76.69</td>
                                    <td>16.06%</td>
                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>12</td>
                                    <td>100</td>
                                    <td>8.33</td>
                                    <td>5.35%</td>
                                </tr>
                                <tr>
                                    <td>05</td>
                                    <td>9</td>
                                    <td>100</td>
                                    <td>11.11</td>
                                    <td>-16.79%</td>
                                </tr>
                                <tr>
                                    <td>06</td>
                                    <td>5</td>
                                    <td>100</td>
                                    <td>20.00</td>
                                    <td>-44.81%</td>
                                </tr>
                                <tr>
                                    <td>07</td>
                                    <td>2</td>
                                    <td>100</td>
                                    <td className="bg-red-300">50.00</td>
                                    <td className="bg-red-300">-66.79%</td>
                                </tr>
                                <tr>
                                    <td>08</td>
                                    <td>2</td>
                                    <td>100</td>
                                    <td className="bg-red-300">50.00</td>
                                    <td className="bg-red-300">-58.44%</td>
                                </tr>
                                <tr>
                                    <td>09</td>
                                    <td>2</td>
                                    <td>100</td>
                                    <td className="bg-red-300">50.00</td>
                                    <td className="bg-red-300">-51.95%</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>4</td>
                                    <td>100</td>
                                    <td>25.00</td>
                                    <td>-3.51%</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>5</td>
                                    <td>100</td>
                                    <td>20.00</td>
                                    <td>18.74%</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>6</td>
                                    <td>100</td>
                                    <td>16.67</td>
                                    <td className="bg-red-300">38.95%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="my-2 text-center text-xs">
                        資料來源：富蘭克林投顧整理。
                        <br />
                        <div className="font-bold">
                            投資人因不同時間進場，將有不同之投資績效，過去之績效亦不代表未來績效之保證。
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};
