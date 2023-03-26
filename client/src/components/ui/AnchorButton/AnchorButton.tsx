import './AnchorButton.css';

type Childrens = { className?: string; text: string; link: string | undefined };

export function AnchorButton({ className, text, link }: Childrens): JSX.Element {
    return (
        <a href={link} className={`anchor-button ` + className}>
            {text}
        </a>
    );
}
