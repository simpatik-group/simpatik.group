'use client';

import { FC, useEffect } from 'react';

import clsx from 'clsx';

import styles from './Loader.module.scss';
import { ILoaderProps } from './Loader.props';

const Loader: FC<ILoaderProps> = ({ transparent }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={clsx(styles.wrap, transparent && styles.transparent)}>
      <span className={styles.loaderElement}></span>
    </div>
  );
};

export default Loader;
