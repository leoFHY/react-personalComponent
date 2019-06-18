import styles from './index.css';
// import Link from 'umi/link';
import { connect } from 'dva';
import { throttle } from 'utils/util';
import { Collapse, Button } from 'antd';
import router from 'umi/router';

const Panel = Collapse.Panel;

const index = ({ antd, dispatch }) => {
  const handelClickUploadImage = (e) => {
    router.push('/antd/UploadImage');
  };
  const handelClickUploadFile = () => {
    router.push('/antd/UploadFile');
  };
  const handelClickEditTable = () => {
    router.push('/antd/EditTable');
  };
  const handelClickAddTable = () => {
    router.push('/antd/addTable');
  };
  const handelClickTable = () => {
    router.push('/antd/fakeForm');
  };
  const handelClickForm = () => {
    router.push('/antd/FormInfo');
  };
  
  return( 
    <div className={styles.normal} >
        <Collapse
        style={{ width: '50%', marginLeft: '50px' }}
        defaultActiveKey={['0']}
        onChange={() => {}}
      >
        <Panel header="上传图片" key="1">
          <div className={styles.panelCon}>
            <code>
              上传多张图片。可以参考投放系统后台, 媒体人员专用的媒体模块。 git项目名称叫 Adservice。 < br / >
            </code>
            <Button className={styles.btn} onClick={throttle(handelClickUploadImage)}>
              点击查看实例
            </Button>
          </div>
        </Panel>
        <Panel header="上传Excel " key="2">
          <div className={styles.panelCon}>
            <code>
              上传Excel。注意后台需求excel格式是什么。本事例后端需求的都是formdata的格式。
              <br/><br/>
              具体事例可以参考投放系统后台, 媒体人员专用的媒体模块。 git项目名称为 <strong>Adservice</strong>。 
            </code>
            <Button className={styles.btn} onClick={throttle(handelClickUploadFile)}>
              点击查看实例
            </Button>
          </div>
        </Panel>
        <Panel header="可编辑表格（图片，文字，数字）" key="3">
          <div className={styles.panelCon}>
            <code>
              在日常使用的项目中，比如商城系统。经常会遇到在已渲染的表格里，修改订单数量，或者改地址。本事例，简化了日常业务逻辑。主要体现了编辑功能和对于申请数量的的一些限制。可以根据项目需求自行修改添加逻辑。 
              <br/><br/>
              具体事例可以参考至尚后台管理系统。 git项目名称为<strong>osp-app-admin</strong>。
            </code>
            <Button className={styles.btn} onClick={handelClickEditTable}>
              点击查看实例
            </Button>
          </div>
        </Panel>
        <Panel header="选中表格数据添加另一个表格中" key="4">
          <div className={styles.panelCon}>
            <code>
              日常项目中，会遇到勾选一个表格中的列表数据,并添加到另一个表格中。应用场景，比如商城后台系统，搜索订单，将订单中需要退款的商品勾选中并添加到退款列表中。
              <br/><br/>
              具体事例可以参考至尚后台管理系统。 git项目名称为<strong>osp-app-admin</strong>。
            </code>
            <Button className={styles.btn} onClick={handelClickAddTable}>
              点击查看实例
            </Button>
          </div>
        </Panel>
        <Panel header="流程表" key="5">
          <div className={styles.panelCon}>
            <code>
              日常项目中， 会遇到审批流程信息表。
              <br/><br/>
              具体事例可以参考至尚后台管理系统。 git项目名称为<strong>osp-app-admin</strong>。
            </code>
            <Button className={styles.btn} onClick={handelClickTable}>
              点击查看实例
            </Button>
          </div>
        </Panel>
        <Panel header="个人信息" key="6">
          <div className={styles.panelCon}>
            <code>
              日常项目中， 会遇到填写个人信息或者修改密码的表单组件。
              <br/><br/>
              具体事例可以参考至尚后台管理系统。 git项目名称为<strong>osp-app-admin</strong>。
            </code>
            <Button className={styles.btn} onClick={handelClickForm}>
              点击查看实例
            </Button>
          </div>
        </Panel>
      </Collapse> 
    </div>
  )
};

export default connect(({ antd }) => ({ antd }))(index);
