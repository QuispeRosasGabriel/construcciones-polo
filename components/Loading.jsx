import React from 'react'
import styles from './../styles/Loading.module.scss'

const Loading = () =>  (
    <div className={styles.loader}>
      <div className={styles.brick}></div>
      <div className={styles.brick}></div>
      <div className={styles.brick}></div>
      <div className={styles.brick}></div>
      <div className={styles.brick}></div>
      <div className={styles.brick}></div>
      <div className={styles.brick}></div>
      <div className={styles.brick}></div>
      <div className={styles.brick}></div>
      <div className={styles.brick}></div>
      {/**
       * <div className={styles.loading}>Cargando...</div>
       */}
    </div>
);

export default Loading
