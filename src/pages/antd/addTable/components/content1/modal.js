import { Modal,Checkbox } from 'antd'
import style from '../../index.css'
const modal1 = ({
   visible,
   handleOk,
   handleCancel,
   handleCheck,
   model
}) => {
  const orderInfo = model.searchProductList[0] || '' 
  return(
      <Modal
        title="选择退款商品"
        visible={ visible }
        onOk={ handleOk }
        width={800}
        onCancel={ handleCancel }>
        <div>
          <div className={style.headerStyle}>
            <div className={style.flex} style={{ height: 50 }}>
              <div className={style.flexLeft}>
                <div className={style.flex}>
                  <div className={style.flex1} ></div>
                  <div style={{ width: 60, height: 10, marginLeft: 10 }}>&nbsp;</div>
                  <div className={style.flex4} style={{ textAlign: 'left' }}>商品信息</div>
                  <div className={style.flex2}>单价（元）</div>
                  <div className={style.flex2}>数量</div>
                  <div className={style.flex2}>已退数量</div>
                </div>
              </div>
            </div>
          </div>
          {model.searchProductList ?
                <div key={orderInfo.orderItemId}>
                  <div className={style.listHeader}>
                    <div className={style.flex} style={{ height: '100%' }}>
                      <div className={style.flexHeader}>订单编号:<div>{orderInfo.orderSubNo || ''}</div></div>
                      <div className={style.flexHeader}>订单总金额:<div>{orderInfo.totalAmount || ''}</div></div>
                      <div className={style.flexHeader}>下单时间:<div>{orderInfo.orderTime || ''}</div></div>
                      <div className={style.flexHeader}>支付时间:<div>{orderInfo.finishTime || ''}</div></div> 
                      <div className={style.flexHeader}></div> 
                    </div>
                  </div>
                  <div className={style.flex} style={{ border: '1px solid #e5e5e5', borderTop: 'none', width: '100%', padding: '5px 0 5px 0' }}>
                    <div className={style.flexLeft}>
                      {
                        model.searchProductList.map((item, index) => {
                          return (
                          <div style={{ paddingTop: 5, paddingBottom: 5 }} key={index}>
                            <div className={style.flex} style={{ textAlign: 'center' }}>
                              <div className={style.flex1} >
                                  <Checkbox value={index} checked={item.check} onChange = {(e) => handleCheck(e,item.orderItemId)}></Checkbox>
                              </div>
                              <div style={{ border: '1px solid #eee', marginLeft: '10px', width: '60px', height: '60px' }}>
                                <img alt="商品图" src={item.imageUrl} style={{ width: '100%', height: '100%', overflow: 'hidden' }} />
                              </div>
                              <div className={style.flex4} style={{ textAlign: 'center' }}>
                                <p style={{ marginBottom: 5 }}>名称：<span>{item.productName}</span></p>
                                <p>规格：<span>{item.skuName || '' }</span></p>
                              </div>
                              <div className={style.flex2} style={{ textAlign: 'center' }}>
                                <p>价格：{item.price || 0 }</p>
                              </div>
                              <div className={style.flex2} style={{ textAlign: 'center' }}>
                                <p>数量：{item.count || 0 }</p>
                              </div>
                              <div className={style.flex2} style={{ textAlign: 'center' }}>
                                已退数量：{ item.refundCount || 0  }
                              </div>
                            </div>
                          </div>
                          )
                      })}
                    </div>
                  </div>
                </div>
            : null
          }
        </div>
      </Modal>
  )
}

export default modal1