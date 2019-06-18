import styles from './index.css';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'dva';

function BasicLayout({ layout, children, dispatch }) {
  const handleSelect = selectedKey => {
    console.log(`selected ${selectedKey}`, layout);
    dispatch({
      type: 'layout/toSwitchNav',
      payload: selectedKey,
    });
  };
  return (
    <div className={styles.layout}>
      <div className={styles.navWrap}>
        <Nav bsStyle="pills" activeKey={layout.active} onSelect={handleSelect}>
          {layout.navList.map((v, i) => {
            return (
              <NavItem key={i} eventKey={i} href={v.route}>
                {v.title}
              </NavItem>
            );
          })}
        </Nav>
      </div>
      {children}
    </div>
  );
}

export default connect(({ layout }) => ({ layout }))(BasicLayout);
