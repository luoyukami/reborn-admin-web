import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';
import FormRegister from './FormRegister';

export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className={styles.main}>
      <FormRegister />
      <div
        style={{
          paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large" />
      </div>
    </div>
  );
};
