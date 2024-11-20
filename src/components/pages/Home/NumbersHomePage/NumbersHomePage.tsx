import { FC } from 'react';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import NumberCounter from '@/components/ui/NumberCounter/NumberCounter';

import { EColor } from '@/interfaces/enums';
import { IDivProps } from '@/interfaces/interfaces';

import { useLocalization } from '@/hooks/useLocalization';

import styles from './NumbersHomePage.module.scss';

const NumbersHomePage: FC<IDivProps> = () => {
  const homePage = useLocalization('HOME_PAGE');

  return (
    <section className='pageSection'>
      <ContainerUI>
        <Heading
          className={styles.title}
          heading='h2'
          title={homePage?.numbers_title || ''}
          shadowTitle={homePage?.numbers_title_shadow}
          textColor={EColor.dark}
        />
        <div className={styles.numbers}>
          {homePage?.numbers.map((number) => {
            return (
              <NumberCounter
                key={number.id}
                to={Number(number.number.replace(/\D+/, ''))}
                suffix={number.number.replace(/\d+/, '')}
              >
                {number.text}
              </NumberCounter>
            );
          })}
        </div>
      </ContainerUI>
    </section>
  );
};

export default NumbersHomePage;