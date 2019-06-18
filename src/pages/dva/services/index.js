import request from 'utils/request'
import { mockApi } from 'config'
const { index } = mockApi

exports.test = () => {
  return request(index.test, {
    method: 'GET',
  }, '')
}
