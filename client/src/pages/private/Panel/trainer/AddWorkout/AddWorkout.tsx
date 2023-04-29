import ClassNames from 'classnames/bind';

import styles from './add-workout.module.css';
import { PrivatePanel } from '../../../../../components/simple/PrivatePanel';
import { LabelPanel } from '../../../../../components/ui/PrivatePanelLabel/LabelPanel';

export function AddWorkout() {
    const cx = ClassNames.bind(styles);

    return (
        <PrivatePanel>
            <LabelPanel link="/panel/trainer/schedule">Добавить тренеровку</LabelPanel>
        </PrivatePanel>
    );
}
