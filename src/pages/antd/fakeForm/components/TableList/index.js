import React from 'react'
import styles from './index.less'
import { Row } from 'antd'

const TableList = (
    {
        listData,
        lineNum,
        styleWrap,
    }
) => {
  let listArr = []
  let cloneList = [...listData]
  for (let i = 0; i < Math.ceil(listData.length / lineNum); i++) {
    let mergeArr = []
    cloneList.splice(0, lineNum).forEach((v) => {
      mergeArr = mergeArr.concat(v.list)
    })
    listArr.push(mergeArr)
  }
  return (
    <div style={{ width: '100%' }}>
      {listArr.map((lists, i) => (
        <Row style={styleWrap && styleWrap} key={i} className={[styles.billInfoItem, i > 0 ? styles.noTopBorder : '']}>
          {lists.map((v, j) => (
            <div key={j}>
              {j % 2 === 0 ? `${v}：` : v}
            </div>
              ))}
        </Row>
        ))}
    </div>
  )
}

export default TableList
