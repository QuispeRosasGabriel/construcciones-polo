import React from 'react';
import { menuList } from '../utils';
import styles from '../styles/Components.module.scss'
import Head from 'next/head';

const Header = () => (
    <>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <ul className={styles.header}>
                {
                    menuList.map((item, idx) => (
                        <li className={styles.header_option} key={idx}>{item}</li>
                    ))
                }
            </ul>
        </div>
    </>
);

export default Header;