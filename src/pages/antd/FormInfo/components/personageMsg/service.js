import { request } from 'utils'

export function getUserMsg (data) {
  return request({
    url: `/mem/${data.loginName}`,
    method: 'get',
    data,
  }, 'sys')
}

export function modifyPassword (data) {
  return request({
    url: '/mem/modifyPassword',
    data,
  }, 'sys')
}

export function updateMem (data) {
  return request({
    url: '/mem/updateMem',
    data,
  }, 'sys')
}
