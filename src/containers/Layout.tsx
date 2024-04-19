import React from 'react';
import { PiAirplaneTiltDuotone } from 'react-icons/pi';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <main className={styles.main}>
      <div className={styles.logo_header}>
        <PiAirplaneTiltDuotone className={styles.logo} />
      </div>
      <Outlet />
    </main>
  );
};

export default Layout;
