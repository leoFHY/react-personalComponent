import { request } from 'utils'

export function bucket (data) {
  return request({
    url: '/baseCommon/getPostSignature',
    data: data,
    // method: 'get',
  })
}
