import { mockApi } from '../src/utils/config';
const { antd } = mockApi;
module.exports = {
  [`POST ${antd.edit}`](req, res) {
     res.status(200).json({
       code: "S000000",
       msg: "请求成功",
       data: [
        {
            id: 1,
            orderSubNo: "2019011699128098",
            productName: "iphone7",
            count: 10,
            applyCount: null,
            refundReason: null,
            address: "上海/闵行区/虹桥镇/申虹路111",
            imageUrl: [{
              uid: '-2',
              name: '2.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
         }, {
           id: 2,
           orderSubNo: "2019011699128099",
           productName: "iphoneX",
           count: 100,
           applyCount: null,
           refundReason: null,
           address: "上海/闵行区/虹桥镇/申虹路222",
           imageUrl: [{
             uid: '-1',
             name: '1.png',
             status: 'done',
             url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
           }],
         }, {
           id: 3,
           orderSubNo: "2019011699128097",
           productName: "iphoneXR",
           count: 17,
           applyCount: null,
           refundReason: null,
           address: "上海/闵行区/虹桥镇/申虹路3333",
           imageUrl: [{
             uid: '-3',
             name: '3.png',
             status: 'done',
             url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
           }],          
         }
      ]
     });
  },
  [`POST ${antd.search1}`](req, res) {
    res.status(200).json({
      code: 'S000000',
      message: "请求成功",
      data: [{
        orderSubNo: 2019011699128098,
        orderTotalAmount: 41.70,
        orderTime: "2019-01-16 18:36:31",
        finishTime: "2019-01-16 18:36:31",
        orderItemId: 1085485944811470850,
        supplierName: "成都浦兴",
        productName: "新中源 厨卫砖 仿石纹墙砖",
        price: 13.90,
        refundTotalAmount: null,
        imageUrl: "http://brcshop-pic.oss-cn-shanghai.aliyuncs.com/shop_pic/20171123/1310000001/index.jpg?x-oss-process=style/shopHome",
        skuSpecmemo: "默认",
        count: 3,
        refundCount: 0,
        giftCardAmount: 41.70,
        payAmount: 0.00,
        payName: null,
        receiver: "11",
        phone: "11111111111",
        address: "上海/闵行区/虹桥镇/深红路111"
      }]
    });
  },
  [`POST ${antd.search2}`](req, res) {
    res.status(200).json({
      "code": "S000000",
      "message": "请求成功",
      "data": {
        "list": [{
          "id": "988350204224864257",
          "productId": "657",
          "skuId": "004a6052a08940118470f57879f6dcbb",
          "actyCpnDefId": "988349979556970498",
          "batchId": "988350196360544257",
          "skuNo": "1513497549114",
          "productName": "美式经典实木照片墙",
          "skuName": "原木色",
          "sortNo": 3,
          "state": "6",
          "createBy": null,
          "createTime": "2018-04-23 17:33:46",
          "updateTime": null,
          "updateBy": null,
          "delFlag": "0",
          "imageUrl": "http://brcshop-pic.oss-cn-shanghai.aliyuncs.com/Home/rc-upload-1524475972686-81524476020953.png",
          "auditTime": "2018-04-23 17:33:54",
          "price": 199.00
        }, {
          "id": "988350199732764673",
          "productId": "1296",
          "skuId": "006b97302fc54d1b888e1c1299efc981",
          "actyCpnDefId": "988349979556970498",
          "batchId": "988350196360544257",
          "skuNo": "1515754069282",
          "productName": "奢华植鞣头层水牛皮席三件套",
          "skuName": "180*200cm|苋红色",
          "sortNo": 2,
          "state": "1",
          "createBy": null,
          "createTime": "2018-04-23 17:33:45",
          "updateTime": null,
          "updateBy": null,
          "delFlag": "0",
          "imageUrl": "http://brcshop-pic.oss-cn-shanghai.aliyuncs.com/Home/rc-upload-1524475972686-61524476016822.png",
          "auditTime": "2018-04-23 17:33:54",
          "price": 2899.00
        }, {
          "id": "988350196368932866",
          "productId": "645",
          "skuId": "01334d804fcd4f6eaf0fa52ad9742db1",
          "actyCpnDefId": "988349979556970498",
          "batchId": "988350196360544257",
          "skuNo": "1513497166238",
          "productName": "黑凤梨 原素系列1.8米实木电视柜",
          "skuName": "原木色",
          "sortNo": 1,
          "state": "1",
          "createBy": null,
          "createTime": "2018-04-23 17:33:44",
          "updateTime": null,
          "updateBy": null,
          "delFlag": "0",
          "imageUrl": "http://brcshop-pic.oss-cn-shanghai.aliyuncs.com/Home/rc-upload-1524475972686-41524476013165.png",
          "auditTime": "2018-04-23 17:33:54",
          "price": 2799.00
        }]
      }
    });
  },
  [`POST ${antd.fakeForm}`](req, res) {
    res.status(200).json({
      "code": "S000000",
      "message": "请求成功",
      "data": {
        "workflows": [{
          "approvalType": "0",
          "approvalResultType": "0",
          "approvalResult": "同意",
          "createDate": "2019-01-09 16:06:01",
          "createUser": "5f6fbc2e21e544d2ad5a77b324632ce1",
          "approvalName": "lybrc",
          "oaNo": null,
          "approvalOpinion": null
        }, {
          "approvalType": "1",
          "approvalResultType": "0",
          "approvalResult": "同意",
          "createDate": "2019-01-09 16:06:50",
          "createUser": "5f6fbc2e21e544d2ad5a77b324632ce1",
          "approvalName": "lybrc",
          "oaNo": "1234",
          "approvalOpinion": null
        }, {
          "approvalType": "1",
          "approvalResultType": "0",
          "approvalResult": "同意",
          "createDate": "2019-01-09 16:06:59",
          "createUser": "5f6fbc2e21e544d2ad5a77b324632ce1",
          "approvalName": "lybrc",
          "oaNo": null,
          "approvalOpinion": null
        }]
      }
    })
  }
};
