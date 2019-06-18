import React from 'react';
import { Table } from 'antd';
// import PropTypes from 'prop-types'

const List = ({ dataSource, columns, loading, pagination }) => {
  return (
    <div>
      <Table
        bordered
        style={{ background: '#fff', border: '1px solid #ebebeb' }}
        loading={loading}
        rowKey="id"
        pagination={pagination}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};
// List.propTypes = {
//   dataSource: PropTypes.array,
//   columns: PropTypes.array,
// }
export default List;
