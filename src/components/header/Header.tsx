const Header = () => {
    return (
        <header className="header mx-auto max-w-5xl px-2">
            <a
                href="http://www.franklin.com.tw/"
                target="_blank"
                title="富蘭克林證券投顧"
                rel="noreferrer"
                className="inline-flex h-14 items-center"
            >
                <picture>
                    <source
                        media="(max-width: 1023px)"
                        srcSet="https://event.franklin.com.tw/commonResources/images/logo2019.svg"
                    />
                    <img
                        className="h-[22px] w-[115px] lg:h-[29px] lg:w-[149px]"
                        src="https://event.franklin.com.tw/commonResources/images/header-logo.png"
                        alt="富蘭克林‧國民的基金"
                    />
                </picture>
                <h1 className="pl-2 font-bold text-blue-700 sm:text-lg">富蘭克林‧國民的基金</h1>
            </a>
        </header>
    );
};

export default Header;
