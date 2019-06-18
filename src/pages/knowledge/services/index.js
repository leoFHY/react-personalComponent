import request from 'utils/request';
import { mockApi } from 'config';
const { knowledge } = mockApi;

exports.getTreeData = () => {
  return request(
    knowledge.tree,
    {
      method: 'GET',
    },
    ''
  );
};
