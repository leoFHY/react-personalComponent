import React from 'react'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import styles from './index.less'


const Result = (
    {
        workflowsApprovalType0,
        workflowsApprovalType1,
    }
) => {
  const styleStr = '1px solid #d4d1d1'
  const styleMy = {
    borderB: {
      borderBottom: styleStr,
      height: '38px',
      lineHeight: '28px',
    },
    borderR: {
      borderRight: styleStr,
    },
  }
  const resultBotT = Object.assign({
    borderTop: styleStr,
  }, styleMy.borderB)
  const {
    approvalResult,
    approvalName,
    createDate,
    approvalResultType,
    approvalOpinion,
  } = workflowsApprovalType0
  return (
    <div className={styles.resultWrap}>
   
      <Row>
        <Col span={20} className={styles.resultItem} >
          <div className={styles.t1}>企业发票开具结果</div>
          <div>
            <p style={styleMy.borderB}>{approvalResultType === '1' ? '备注：' : '票号：'}{approvalOpinion}</p>
            <ul className={styles.resultInfo}>
              <li style={styleMy.borderR}>处理结果：</li>
              <li style={styleMy.borderR}>{approvalResult}</li>
              <li style={styleMy.borderR}>处理人：</li>
              <li style={styleMy.borderR}>{approvalName}</li>
              <li style={styleMy.borderR}>办理时间：</li>
              <li >{createDate}</li>
            </ul>
          </div>
        </Col>
      </Row>
      {workflowsApprovalType1.length ?
        <Row>
          <Col span={20} className={[styles.resultItem, styles.noTopBorder]} >
            <div className={styles.t1}>企业挂账销账结果</div>
            <div>

              {workflowsApprovalType1.map((v, i) => {
                return (
                  <content key={i}>
                    {i > 0 ?
                      <p style={resultBotT} >{v.oaNo ? `OA账号：${v.oaNo}` : v.approvalOpinion ? `备注：${v.approvalOpinion}` : ''}</p> :
                      <p style={styleMy.borderB} >{v.oaNo ? `OA账号：${v.oaNo}` : v.approvalOpinion ? `备注：${v.approvalOpinion}` : ''}</p>}
                    <ul className={styles.resultInfo}>
                      <li style={styleMy.borderR}>处理结果：</li>
                      <li style={styleMy.borderR}>{v.approvalResult}</li>
                      <li style={styleMy.borderR}>处理人：</li>
                      <li style={styleMy.borderR}>{v.approvalName}</li>
                      <li style={styleMy.borderR}>办理时间：</li>
                      <li >{v.createDate}</li>
                    </ul>
                  </content>
                )
              })}

            </div>
          </Col>
        </Row>
    : ''}

    </div>
  )
}
Result.propTypes = {
  workflowsApprovalType0: PropTypes.object,
  workflowsApprovalType1: PropTypes.array,
  detailPageData: PropTypes.object,
}
export default Result
