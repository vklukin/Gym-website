import './MainTag.css';

type Childrens = {
    children?: JSX.Element;
    pageTitle: string;
    className: string;
    container?: boolean;
    navigation?: boolean;
};

export function MainTag({
    children,
    pageTitle,
    className,
    container = true,
    navigation = true,
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
                            <h1>{pageTitle}</h1>
                        </div>
                    )}
                    {children}
                </div>
            )}
            {!container && navigation && (
                <div className="main-navigation">
                    <div className="nav-wrapper">
                        <a href="/">Главная</a>
                        <span>/</span>
                        <p className="active-page">{pageTitle}</p>
                    </div>
                    <h1>{pageTitle}</h1>
                </div>
            )}
            {!container && children}
        </main>
    );
}
