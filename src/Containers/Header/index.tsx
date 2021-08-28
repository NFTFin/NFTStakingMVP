import React, { FC, memo } from 'react';
import styles from './styles.module.css';

export const Header: FC = memo(() => {
	return <header className={styles.headerContainer}></header>;
});
