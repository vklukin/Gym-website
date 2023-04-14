import styles from './schedule.module.css';

import { MainTag } from '../../../components/ui/Main-Tag';
import React from 'react';
import { ScheduleList, trainingsDescription } from './Schedule.list';
import {
    DropdownMenuContainer,
    DropdownMenuElement,
} from '../../../components/simple/DropdownMenu';

export function ScheduleRendering() {
    return (
        <section className={styles.scheduleRendering}>
            <p className={styles.canChangeInfo}>
                <span className={styles.canChangeMark}>*</span> - Возможны замены инструкторов и
                изменения в расписании
            </p>
            <DropdownMenuContainer>
                {ScheduleList.map((schedule, scheduleIndex) => (
                    <DropdownMenuElement
                        elementTitle={schedule.weekDay}
                        className={styles.dropDownMenu_weeks}
                        key={scheduleIndex}
                    >
                        <ul className={styles.weeks_list}>
                            {schedule.workoutInfo.map((workout, workoutIndex) => (
                                <li key={workoutIndex}>
                                    <p className={styles.workoutTime}>{workout.workoutTime}</p>
                                    <p className={styles.workoutName}>{workout.workoutName}</p>
                                    <p className={styles.workoutTrainer}>
                                        (
                                        <a href={workout.workoutTrainer.trainerLink}>
                                            {workout.workoutTrainer.trainerName}
                                        </a>
                                        )
                                    </p>
                                    {workout.isChanging && (
                                        <span className={styles.canChangeMark}>*</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </DropdownMenuElement>
                ))}
            </DropdownMenuContainer>
        </section>
    );
}

export function TrainingsDescription() {
    return (
        <section className={styles.trainingDescription}>
            <h2>Описания тренеровок</h2>
            <DropdownMenuContainer>
                {trainingsDescription.map((trainings, index) => (
                    <DropdownMenuElement
                        elementTitle={trainings.trainingsLabel}
                        className={styles.dropDownMenu_descriptions}
                        key={index}
                    >
                        {trainings.trainings.map((trainingElement, trainingIndex) => (
                            <div className={styles.trainingElement} key={trainingIndex}>
                                <h3>{trainingElement.trainingTitle}</h3>
                                <div className={styles.trainingDescription__wrapper}>
                                    <p>Описание: {trainingElement.descriptionList.definition}</p>
                                    <p>Кому подойдет: {trainingElement.descriptionList.forWhom}</p>
                                </div>
                            </div>
                        ))}
                    </DropdownMenuElement>
                ))}
            </DropdownMenuContainer>
        </section>
    );
}

export function Schedule(): JSX.Element {
    return (
        <MainTag pageTitle="Расписание" className="schedule">
            <ScheduleRendering />
            <TrainingsDescription />
        </MainTag>
    );
}
