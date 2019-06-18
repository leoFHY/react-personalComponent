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
  return <div className={styles.normal}>umi</div>;
};

export default connect(({ test }) => ({ test }))(index);
