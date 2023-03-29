import './news.css';

export function News(): JSX.Element {
    return (
        <section className="index-News">
            <div className="container">
                <h2>Новости</h2>
                <p>
                    Все новости у нас в <a href="https://vk.com/fitlife_ekb">группе</a>. Заходи, мы
                    тебя ждём!
                </p>
            </div>
        </section>
    );
}
