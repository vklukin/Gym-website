import ClassNames from 'classnames/bind';
import styles from './table.module.css';
import { TUserParams } from '../../../../../../../types/IUser';
import { Button } from '../../../../../../../components/ui/Button';
import { PrivateRoles, ROLES } from '../../../../../../../core/constants';

type TTableProps = {
    data: TUserParams[];
};

export function Table({ data }: TTableProps) {
    const cx = ClassNames.bind(styles);

    return (
        <table className={cx('table')}>
            <thead>
                <tr>
                    <th></th>
                    <th>№</th>
                    <th>ФИО</th>
                    <th>Почта</th>
                    <th>Зарегистрирован</th>
                    <th>Роль</th>
                    <th>Абонемент</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((userItem, userIndex) => (
                    <tr key={userIndex}>
                        <td className={cx(userItem.status)}></td>
                        <td>{userItem.id}</td>
                        <td>{userItem.name}</td>
                        <td>{userItem.email}</td>
                        <td>{userItem.createAt}</td>
                        <td>{userItem.role}</td>
                        <td>
                            {userItem.ticket?.ticket_id ? userItem.ticket.ticket_id : <>&mdash;</>}
                        </td>
                        <td>
                            {PrivateRoles.includes(userItem.role as ROLES) ? (
                                <></>
                            ) : (
                                <Button
                                    as={'a'}
                                    href={`/panel/admin/users/${userItem.id}/edit`}
                                    className={cx('edit_button')}
                                >
                                    Изменить
                                </Button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
