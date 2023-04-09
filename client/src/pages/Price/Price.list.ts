export interface ListType {
    title?: string;
    duration: string;
    price:
        | number
        | {
              firstPay: number;
              prolongation: number;
          };
    period?: string;
}

export interface PriceListType {
    label: string;
    oneTitle?: string;
    onePeriod?: string;
    list: ListType[];
}

const Periods: string[] = ['Безлимитная', 'Дневная'];

const Titles: string[] = ['Безлимит', 'Дневная', 'Ланч'];

export const PriceList: PriceListType[] = [
    {
        label: 'Карты разового посещения',
        list: [
            {
                title: Titles[0],
                duration: '1 день',
                price: 400,
                period: Periods[0],
            },
            {
                title: Titles[2],
                duration: '1 день',
                price: 200,
                period: Periods[1],
            },
        ],
    },
    {
        label: 'Карты безлимитного посещения',
        oneTitle: Titles[0],
        onePeriod: Periods[0],
        list: [
            {
                duration: '1 месяц',
                price: {
                    firstPay: 3499,
                    prolongation: 1999,
                },
            },
            {
                duration: '3 месяца',
                price: {
                    firstPay: 5999,
                    prolongation: 4999,
                },
            },
            {
                duration: '6 месяцев',
                price: {
                    firstPay: 8999,
                    prolongation: 7999,
                },
            },
            {
                duration: '12 месяцев',
                price: 11999,
            },
        ],
    },
    {
        label: 'Карты дневного посещения',
        list: [
            {
                title: 'Дневная',
                duration: '12 месяцев',
                price: 7999,
                period: Periods[1],
            },
        ],
    },
    {
        label: 'Карты 1+1 "Сплит"',
        oneTitle: Titles[0],
        onePeriod: Periods[0],
        list: [
            {
                duration: '6 месяцев',
                price: 10999,
            },
            {
                duration: '12 месяцев',
                price: 15999,
            },
        ],
    },
    {
        label: 'Карты "Студентищщще"',
        onePeriod: Periods[0],
        list: [
            {
                title: 'Безлимит',
                duration: '1 месяц',
                price: {
                    firstPay: 1999,
                    prolongation: 999,
                },
            },
            {
                title: 'Дневная',
                duration: '1 месяц',
                price: {
                    firstPay: 1888,
                    prolongation: 888,
                },
            },
            {
                title: 'Безлимит',
                duration: '12 месяцев',
                price: 7999,
            },
        ],
    },
];
