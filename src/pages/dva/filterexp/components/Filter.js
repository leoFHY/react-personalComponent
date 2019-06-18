import React from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';
// import PropTypes from 'prop-types'

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const Option = Select.Option;
const styles = {
  btnStyle: {
    marginLeft: '20px',
  },
};
const FilterForm = ({
  form: { getFieldDecorator, validateFieldsAndScroll, resetFields },
  f3StateList,
  handleSubmit,
  resetValue,
  toDownload,
}) => {
  f3StateList ? f3StateList : (f3StateList = []);
  return (
    <div style={{ marginBottom: '30px' }}>
      <Form>
        <Row gutter={24}>
          <Col span={6}>
            <FormItem label={'企业名称'} {...formItemLayout}>
              {getFieldDecorator('f1', {})(<Input placeholder="请输入企业名称" />)}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label={'状态'} {...formItemLayout}>
              {getFieldDecorator('f2', {
                initialValue: '全部',
              })(
                <Select>
                  {f3StateList.map(v => (
                    <Option key={v.id} value={v.name}>
                      {v.name}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label={'企业账号'} {...formItemLayout}>
              {getFieldDecorator('f3', {})(<Input placeholder="请输入企业账号" />)}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem
              label={'挂账余额'}
              labelCol={{ span: 14 }}
              wrapperCol={{ span: 10 }}
              style={{ width: '50%', float: 'left' }}
            >
              {getFieldDecorator('f4', {
                rules: [
                  {
                    pattern: /\d+/g,
                    message: '请输入数字',
                  },
                ],
              })(<Input style={{ width: '100%' }} min={0} />)}
            </FormItem>
            <FormItem style={{ width: '10%', float: 'left' }}>
              <div
                style={{
                  width: '100%',
                  padding: '0 4px',
                  display: 'flex',
                  height: '30px',
                  alignItems: 'center',
                }}
              >
                <div style={{ width: '100%', height: '1px', background: '#e5e5e5' }} />
              </div>
            </FormItem>
            <FormItem style={{ width: '25%', float: 'left' }}>
              {getFieldDecorator('f5', {
                rules: [
                  {
                    pattern: /\d+/g,
                    message: '请输入数字',
                  },
                ],
              })(<Input min={0} style={{ width: '85%' }} />)}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'flex-end' }} offset={16}>
            <Button
              style={styles.btnStyle}
              size="large"
              type="primary"
              onClick={() => {
                resetValue(resetFields);
              }}
            >
              重置
            </Button>
            <Button style={styles.btnStyle} size="large" type="primary" onClick={toDownload}>
              导出
            </Button>
            <Button
              style={styles.btnStyle}
              size="large"
              type="primary"
              onClick={() => {
                handleSubmit(validateFieldsAndScroll);
              }}
            >
              查询
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
const Filter = Form.create()(FilterForm);
// Filter.propTypes = {
//   handleSearch: PropTypes.func,
//   searchList: PropTypes.array,
//   f3StateList: PropTypes.array,
//   handleSubmit: PropTypes.func,
// }
export default Filter;
