import React from 'react';
import styles from './progress.module.scss';
import Image from 'next/image';
import diagram from './icons/diagram.svg';
import { changeStatus } from '@/app/GlobalRedux/features/quiz/quizSlice';
import { QuizStatus } from '@/app/types/TQuiz';
import { useAppDispatch, useAppSelector } from '@/app/hooks/useTypedSelector';

export const ProgressSlide = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.quiz);

  const handleClick = () => {
    dispatch(changeStatus(QuizStatus.Finished));
  };

  console.log(status);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          See your Spiritual Growth progress by Sep 17, 2024
        </h2>
        <div>
          <Image
            src={diagram}
            alt='diagram'
          />
        </div>
      </div>

      <button
        type='button'
        className={styles.CTA}
        onClick={handleClick}
      >
        Continue
      </button>
    </section>
  );
};
