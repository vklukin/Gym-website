import './aerobics.css';

import { MainTag } from '../../components/ui/Main-Tag';
import { AerobicsImagesList, AerobicsList } from './Aerobics.list';

function AerobicsText() {
    return (
        <div className="aerobics__text-wrapper">
            {AerobicsList.map((items: { text: string }, index: number) => (
                <p key={index}>{items.text}</p>
            ))}
        </div>
    );
}

function AerobicsImages() {
    return (
        <div className="aerobics__images-wrapper">
            {AerobicsImagesList.map((item: { image: string }, index: number) => (
                <div className="image-wrapper">
                    <img src={item.image} key={index} alt="Изображение" />
                </div>
            ))}
        </div>
    );
}

export function Aerobics(): JSX.Element {
    return (
        <MainTag
            pageTitle="Аэробика"
            className="aerobics"
            pageLabel="Студия групповых программ"
            container={false}
        >
            <>
                <div className="container container__aerobics">
                    <AerobicsText />
                </div>
                <AerobicsImages />
            </>
        </MainTag>
    );
}
