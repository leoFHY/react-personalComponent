import request from 'utils/request';

export function bucket (data) {
  console.log('------------------',data);
  
  return request(`goufanguat.lybrc.com.cn/bluefriendmain/baseCommon/getPostSignature`,{
    
  }, 'pic')
}
