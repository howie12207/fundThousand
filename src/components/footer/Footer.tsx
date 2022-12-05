import { Facebook, YouTube } from '@mui/icons-material';
import ImgLine from './images/line.svg';

const Footer = () => {
    return (
        <footer className="bg-blue-700">
            <div className="mx-auto max-w-5xl px-2 py-10 tracking-wider text-white">
                {/* info */}
                <div className="mb-4 border-b pb-4 text-center text-sm lg:flex lg:justify-between lg:text-left">
                    {/* title */}
                    <div className="font-bold">
                        <a
                            href="http://www.franklin.com.tw/"
                            target="_blank"
                            title="富蘭克林證券投顧"
                            rel="noreferrer"
                            className="inline-flex h-14 items-center"
                        >
                            <img
                                src="https://event.franklin.com.tw/commonResources/images/footer-logo.png"
                                alt="富蘭克林證券投顧"
                                className="w-40 lg:w-auto"
                                loading="lazy"
                            />
                        </a>
                        <div className="mb-2 text-lg">富蘭克林證券投資顧問(股)公司</div>
                        <div className="mb-2">
                            101年金管投顧新字第025號 | 富蘭克林證券投顧獨立經營管理
                        </div>
                    </div>
                    {/* desc */}
                    <div className="lg:text-right">
                        <div className="mb-2 flex items-end justify-center text-3xl lg:justify-end">
                            <a
                                href="https://www.facebook.com/franklin.taiwan/"
                                target="_blank"
                                rel="noreferrer"
                                title="粉絲團"
                                className="transition hover:opacity-80"
                            >
                                <Facebook fontSize="inherit" />
                            </a>
                            <a
                                href="http://line.naver.jp/ti/p/%40franklin"
                                target="_blank"
                                rel="noreferrer"
                                title="Line"
                                className="mx-2 mb-0.5 w-6 transition hover:opacity-80"
                            >
                                <img
                                    src={ImgLine}
                                    className="h-[27px] w-6"
                                    alt="Line"
                                    loading="lazy"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/user/franklin0800885888"
                                target="_blank"
                                rel="noreferrer"
                                title="youtube"
                                className="transition hover:opacity-80"
                            >
                                <YouTube fontSize="inherit" />
                            </a>
                        </div>
                        <div className="mb-2">
                            國民理財專線：
                            <a
                                href="tel:0800-885-888"
                                title="國民理財專線"
                                className="text-2xl font-bold"
                            >
                                0800-885-888
                            </a>
                        </div>
                        <div className="mb-2">106台北市大安區忠孝東路四段87號8樓</div>
                        <div>
                            <span className="mr-4">電話: (02)2781-0088</span>
                            <span>傳真: (02)2781-7788</span>
                        </div>
                    </div>
                </div>
                {/* warning */}
                <div className="warning font-bold leading-relaxed">
                    <div className="mb-4">
                        {
                            '定期定額報酬率係理柏資訊假設每月1日扣款，遇例假日則以前一營業日計算，每個月投資5000元之投資成果。投資人因不同時間進場，將有不同之投資績效，且過去績效不代表未來績效之保證。投資報酬率以累積投資成果除以投資成本簡單計算，暫不考慮時間價值。<以上試算結果並非代表特定基金之投資成果，亦不代表對特定基金之買賣建議。基金不同於指數，可能會有中途清算或合併等情形。投資人無法直接投資指數><本文提及之經濟走勢不必然代表本基金之績效，本基金投資風險請詳閱基金公開說明書。>'
                        }
                    </div>
                    <div className="mb-4">
                        本基金經金融監督管理委員會核准或申報生效在國內募集及銷售，惟不表示絕無風險。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。
                    </div>
                    <div className="mb-4">
                        本文提及之經濟走勢預測，不必然代表基金之績效，本基金投資風險請詳閱基金公開說明書。投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至基金資訊觀測站(
                        <a
                            href="https://www.fundclear.com.tw/"
                            target="_blank"
                            rel="noreferrer"
                            title="基金資訊觀測站"
                            className="underline"
                        >
                            https://www.fundclear.com.tw/
                        </a>
                        )下載，或逕向本公司網站(
                        <a
                            href="https://www.franklin.com.tw/"
                            target="_blank"
                            rel="noreferrer"
                            title="本公司網站"
                            className="underline"
                        >
                            https://www.franklin.com.tw/
                        </a>
                        )查閱。
                    </div>
                    <div className="mb-4 text-yellow-300">
                        由於非投資等級債券之信用評等未達投資等級或未經信用評等，且對利率變動的敏感度甚高，故本基金可能會因利率上升、市場流動性下降，或債券發行機構違約不支付本金、利息或破產而蒙受虧損。本基金不適合無法承擔相關風險之投資人。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。本基金較適合投資屬性中風險承受度較高之投資人，投資人投資以非投資等級債券為訴求之基金不宜占其投資組合過高之比重，投資人應審慎評估。
                    </div>
                    <div className="mb-4">
                        由於新興市場基金之主要投資風險除包含一般股票型基金之投資組合跌價與匯率風險外，與成熟市場相比須承受較高之政治與金融管理風險，而因市值及制度性因素，流動性風險也相對較高，新興市場投資組合波動性普遍高於成熟市場。基金投資均涉及風險且不負任何抵抗投資虧損之擔保。投資風險之詳細資料請參閱基金公開說明書。
                    </div>
                    <div className="mb-4 text-yellow-300">
                        境外基金投資大陸地區證券市場之有價證券以掛牌上市有價證券為限，且投資前述有價證券總金額不得超過本基金淨資產價值之20%，另投資香港地區紅籌股及H股並無限制。本基金並非完全投資於大陸地區之有價證券，投資人仍須留意中國市場特定政治、經濟與市場之投資風險。
                    </div>
                    <div className="mb-4">
                        基金的配息可能由基金的收益或本金中支付。部分基金進行配息前未先扣除應負擔之費用。任何涉及由本金支出的部份，可能導致原始投資金額減損。由本金支付配息之相關資料已揭露於本公司網站，投資人可至本公司網站(
                        <a
                            href="https://www.franklin.com.tw/"
                            target="_blank"
                            rel="noreferrer"
                            title="本公司網站"
                            className="underline"
                        >
                            https://www.franklin.com.tw/
                        </a>
                        )查閱。
                    </div>
                    <div className="mb-4">
                        任何人因信賴此等資料而做出或改變投資決策，須自行承擔結果。
                    </div>
                    <div className="mb-4">
                        投資人申購本基金係持有基金受益憑證，而非本文提及之投資資產或標的
                    </div>
                    <div className="mb-4">
                        本基金之收益分配由經理公司依基金孳息收入情況，決定應分配之收益金額。基金配息係依據基金投資組合之平均股利率為計算基礎，預估未來一年於投資標的個股取得之總股利收入，並考量當下已經實際取得的股利和可能發生之資本損益，適度調節並決定基金當月配息類股之配息率，以達成每月配息之頻率。經理公司視投資組合標的股利率水準變化及基金績效表現調整配息率，故配息率可能會有變動，若股利率未來有上升或下降之情形時，基金之配息來源可能為本金。此外，年化配息率之訂定應以平均年化股利率為參考基準，惟經理公司保留一定程度的彈性調整空間，並以避免配息過度侵蝕本金為原則。
                    </div>
                </div>
                {/* copyright */}
                <div className="text-center text-xs">
                    <span className="inline-block border p-2">
                        版權所有富蘭克林證券投顧 FRANKLIN TEMPLETON INVESTMENTS
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
