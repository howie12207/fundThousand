import HomeForm from './HomeForm';

const Section5 = () => {
    return (
        <section className="form-2-section flex flex-col items-center py-8 px-2">
            <h2 className="mb-4 text-2xl font-black text-blue-700 sm:text-3xl">開始千元理財</h2>
            <p className="mb-4 text-center font-bold text-red-800 md:text-2xl">
                這一次，一起用 1,000 元，存下未來
                <br />
                把握大好機會，錯過優惠不再！
            </p>
            <HomeForm order="2" />
        </section>
    );
};

export default Section5;
