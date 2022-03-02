import { ReconciliationFilled } from '@ant-design/icons';
import { Table, Space, Modal, Button, Row, Col, Input } from 'antd';
import { UserOutlined, InfoOutlined, CodeOutlined } from '@ant-design/icons';
import { useState } from 'react';


const DataTable = ({dataSource, onClick}) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center'
        },
        {
            title: 'Feedback',
            dataIndex: 'feedback',
            key: 'feedback',
            align: 'center'
        },
        {
            title: 'Link',
            dataIndex: 'link',
            key: 'link',
            align: 'center'
        },
        {
            title: 'Href',
            dataIndex: 'url',
            key: 'url',
            align: 'center'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <a onClick={() => onClick(record)}>Edit</a>
                <a>Delete</a>
              </Space>
            ),
            align: 'center'
          },

    ];
    return (
        <>
            <Table dataSource={dataSource} columns={columns} style={{width: "70%"}}/>
        </>

    )
}

export default DataTable;