import styles from './index.css';
import { Button } from 'react-bootstrap';
import Link from 'umi/link';
import { connect } from 'dva';
import { throttle } from 'utils/util';
import Filter from './components/Filter';
import List from './components/List';

const index = ({ test, dispatch, filter }) => {
  const handelClick = () => {
    dispatch({
      type: 'test/toTest',
      payload: {},
    });
  };
  const handleSubmit = cbFn => {
    cbFn((err, values) => {
      if (!err) {
        console.log('values---', values);
        dispatch({
          type: 'filter/getPageList',
          payload: {
            data: values,
            type: 'search',
          },
        });
      }
    });
  };
  const toDownload = () => {
    dispatch({
      type: 'filter/getPageList',
      payload: {},
      isDownload: true,
    });
  };
  const handleReset = cbFn => {
    cbFn && cbFn();
    dispatch({
      type: 'filter/getPageList',
      payload: {
        type: 'reset',
      },
    });
  };
  const onChange = page => {
    console.log('page', page);
    dispatch({
      type: 'filter/getPageList',
      payload: {
        pageNum: page,
      },
    });
  };
  let { columns, dataSource, pagination } = filter;
  pagination = Object.assign(pagination, {
    onChange,
  });
  return (
    <div className={styles.normal}>
      <Filter handleSubmit={handleSubmit} resetValue={handleReset} toDownload={toDownload} />
      <List columns={columns} dataSource={dataSource} pagination={pagination} />
    </div>
  );
};

export default connect(({ filter }) => ({ filter }))(index);
