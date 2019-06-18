import styles from './index.css';
// import { Button } from 'react-bootstrap';
import Link from 'umi/link';
import { connect } from 'dva';
import { throttle } from '../../utils/util';
import { Collapse, Button } from 'antd';
import router from 'umi/router';

const Panel = Collapse.Panel;

const index = ({ dvaData, dispatch }) => {
  const handelClick = () => {
    dispatch({
      type: 'dvaData/getOtherModal',
      payload: {},
    });
  };
  const toFilterExm = e => {
    console.log('e---', e);
    router.push('/dva/filterexp');
  };
  return (
    <div className={styles.normal}>
      <Collapse
        style={{ width: '50%', marginLeft: '50px' }}
        defaultActiveKey={['0']}
        onChange={() => {}}
      >
        <Panel header="获取其他Model的数据" key="1">
          <div className={styles.panelCon}>
            <Button className={styles.btn} onClick={handelClick}>
              获取其他Modal的数据,通过select
            </Button>
            <code>
              进入页面，采用监听路由的方式，提交action去清空数据 <br />
              <br />
              {JSON.stringify(dvaData.navList)}
            </code>
          </div>
        </Panel>
        <Panel header="动态扩展model" key="2">
          <div className={styles.panelCon}>
            <p>将model中的通用代码提取出来，对需要此功能的model进行扩展</p>
            <code>
              当我们遇到几个业务视图长得差不多，model也存在少量差别，我们可以将相同的逻辑提取出出来，
              再对需要此逻辑的model进行扩展，因为dva中的model实际上就是普通的对象，包含namespace，
              state，reducers，effects，subscriptions。从这个角度看，我们要新增或者覆盖一些东西，
              都会是比较容易的，比如说，使用Object.assign来进行对象属性复制，就可以把新的内容添加或者覆盖到原有对象上。
              注意这里有两级，model结构中的state，reducers，effects，subscriptions都是对象结构，需要分别在这一级去做assign。
              可以借助dva社区的dva-model-extend库来做这件事。
            </code>
            <Button className={styles.btn} onClick={throttle(toFilterExm)}>
              点击查看搜索页面示例
            </Button>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default connect(({ dvaData }) => ({ dvaData }))(index);
