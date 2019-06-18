import styles from './index.css';
import { Button } from 'react-bootstrap';
import Link from 'umi/link';
import { connect } from 'dva';
import { throttle } from 'utils/util';

const index = ({ test, dispatch }) => {
  const handelClick = () => {
    dispatch({
      type: 'test/toTest',
      payload: {},
    });
  };
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li style={{ fontSize: '38px' }}>蓝裔前端后台系统项目示例库</li>
      </ul>
    </div>
  );
};

export default connect(({ test }) => ({ test }))(index);
