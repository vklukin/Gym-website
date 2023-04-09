import './price.css';

import { MainTag } from '../../components/ui/Main-Tag';
import { ListType, PriceList, PriceListType } from './Price.list';
import React from 'react';

function PriceInTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Наиминование услуги</th>
                    <th>Стоимость карты</th>
                    <th>Формат карты</th>
                </tr>
            </thead>
            <tbody>
                {PriceList.map((items: PriceListType, index: number) => (
                    <React.Fragment key={index}>
                        <tr>
                            <td className="line-label" colSpan={3}>
                                {items.label}
                            </td>
                        </tr>
                        {items.list.map((listItem: ListType, listIndex: number) => (
                            <tr key={listIndex}>
                                <td className="line-title">
                                    <p>{items.oneTitle || listItem.title}</p>
                                    <p>{listItem.duration}</p>
                                </td>
                                <td className="line-price">
                                    {typeof listItem.price === 'number' && (
                                        <p>{listItem.price} &#8381;</p>
                                    )}
                                    {typeof listItem.price === 'object' && (
                                        <>
                                            <p>
                                                Первый платеж:{' '}
                                                <span>{listItem.price.firstPay} &#8381;</span>
                                            </p>
                                            <p>
                                                Продление:{' '}
                                                <span>{listItem.price.prolongation} &#8381;</span>
                                            </p>
                                        </>
                                    )}
                                </td>
                                {listItem.period && (
                                    <td className="line-period">
                                        <p>{listItem.period}</p>
                                    </td>
                                )}
                                {items.onePeriod && listIndex === 0 && (
                                    <td className="line-period" rowSpan={items.list.length}>
                                        <p>{items.onePeriod}</p>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
}

export function Price() {
    return (
        <MainTag className="price" pageTitle="Прайс" pageLabel="Прайс-лист">
            <>
                <p className="heading">
                    Актуальную информацию по акциям уточняйте у наших администраторов по
                    телефону&nbsp;<a href="tel:2435342">243-53-42</a>
                </p>
                <PriceInTable />
            </>
        </MainTag>
    );
}
