import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type TNavigateProps = {
    link: string;
};

const NavigateToPrivateLink = ({ link }: TNavigateProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(link);
    }, []);

    return <></>;
};

export default NavigateToPrivateLink;
