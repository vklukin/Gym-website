import './spinner.css';

type TSpinnerProps = {
    darkerBG?: boolean;
};

export function Spinner({ darkerBG = false }: TSpinnerProps) {
    return (
        <div className={`spinner-wrapper ${darkerBG ? 'black_bg' : 'white_bg'}`}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
