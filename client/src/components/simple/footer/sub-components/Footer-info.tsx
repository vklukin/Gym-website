import React from 'react';

import { FooterInfoList } from './footer-info-list';

export function FooterInfo(): JSX.Element {
    return (
        <div className="footer-info">
            <iframe src="https://yandex.ru/map-widget/v1/?ll=60.634744%2C56.862528&mode=search&oid=1734705786&ol=biz&z=18"></iframe>
            <div className="footer-contacts">
                <FooterInfoList />
            </div>
        </div>
    );
}
