import './MainTag.css';

interface Childrens {
    children?: JSX.Element | JSX.Element[];
    pageTitle?: string;
    className: string;
    container?: boolean;
    navigation?: boolean;
    navigationContainer?: boolean;
    pageLabel?: string;
}

export function MainTag({
    children,
    pageTitle,
    className,
    container = true,
    navigation = true,
    navigationContainer = true,
    pageLabel = '',
}: Childrens): JSX.Element {
    return (
        <main className={className}>
            {container && (
                <div className={`container container__${className}`}>
                    {navigation && (
                        <div className="main-navigation">
                            <div className="nav-wrapper">
                                <a href="/">Главная</a>
                                <span>/</span>
                                <p className="active-page">{pageTitle}</p>
                            </div>
                            <h1>{pageLabel || pageTitle}</h1>
                        </div>
                    )}
                    {children}
                </div>
            )}
            {!container && navigation && navigationContainer && (
                <>
                    <div className={`container container__${className}`}>
                        <div className="main-navigation">
                            <div className="nav-wrapper">
                                <a href="/">Главная</a>
                                <span>/</span>
                                <p className="active-page">{pageTitle}</p>
                            </div>
                            <h1>{pageLabel || pageTitle}</h1>
                        </div>
                    </div>
                    {children}
                </>
            )}
            {!container && navigation && !navigationContainer && (
                <>
                    <div className="main-navigation">
                        <div className="nav-wrapper">
                            <a href="/">Главная</a>
                            <span>/</span>
                            <p className="active-page">{pageTitle}</p>
                        </div>
                        <h1>{pageLabel || pageTitle}</h1>
                    </div>
                    {children}
                </>
            )}
            {!container && !navigation && children}
        </main>
    );
}
