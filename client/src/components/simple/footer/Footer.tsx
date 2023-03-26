import React from 'react';

import './footer.css';

import { FooterInfo } from './sub-components/Footer-info';
import { FooterCopyright } from './sub-components/Footer-copyright';

export function Footer(): JSX.Element {
    return (
        <footer>
            <FooterInfo />
            <FooterCopyright />
        </footer>
    );
}
