import { Col, Row, Button, Modal, Input, message } from "antd";
import { UserOutlined, InfoOutlined, CodeOutlined } from '@ant-design/icons';
import Table from 'components/Table'
import { useEffect, useState } from "react";
import { addUser, editUser, getUser } from "actions/user";

const UserMgView = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [user, setUser] = useState({
        name: '',
        feedback: '',
        link: '',
        url: ''
    });

    const [editableUser, setEditableUser] = useState({
        key: '',
        name: '',
        feedback: '',
        link: '',
        url: ''
    });

    const [users, setUsers] = useState([]);

    const confirmAdd = async () => {
        if (user.name === '' || user.feedback === '' || user.link === '' || user.url === '') {
            message.error('All fields must be filled.');
            return false;
        }
        try {
            const res = await addUser(user);
            if (res) {
                console.log(res)
                message.success('Successfuly added.');
                let users = [];
                res.map((item) => {
                    users.push({
                        key: item._id,
                        name: item.name,
                        feedback: item.feedback,
                        link: item.link,
                        url: item.url
                    })
                })
                setUsers(users);
            }
            else {
                message.error("Faild to add new user.");
            }
        }
        catch (e) {
            message.error(e);
            console.log(e);
        }
    }

    const confirmEdit = async () => {
        if (editableUser.name === '' || editableUser.feedback === '' || editableUser.link === '' || editableUser.url === '') {
            message.error('All fields must be filled.');
            return false;
        }
        try {
            const res = await editUser(editableUser);
            if (res) {
                console.log(res)
                message.success('Successfuly edited.');
                let users = [];
                res.map((item) => {
                    users.push({
                        key: item._id,
                        name: item.name,
                        feedback: item.feedback,
                        link: item.link,
                        url: item.url
                    })
                })
                setUsers(users);
            }
            else {
                message.error("Faild to edit user.");
            }
        }
        catch (e) {
            message.error(e);
            console.log(e);
        }
    }

    const tryEditUser = (record) => {
        setEditableUser(record);
        setEditModalVisible(true);
    }

    useEffect(async () => {
        const res = await getUser();
        setUsers(res);
    }, []);

    return (
        <>
            <Row className="control-bar flex" align="center" style={{ marginTop: "1%" }}>
                <Button className="flex" type="primary" onClick={() => setModalVisible(true)}>Add New Seller + </Button>
            </Row>
            <Row className="data-table" align="center" style={{ marginTop: "1%" }}>
                <Table dataSource={users} onClick={tryEditUser} />
            </Row>
            <Modal title="Add new Seller" visible={modalVisible} onCancel={() => setModalVisible(false)} onOk={confirmAdd}>
                <Row>
                    <Col span={8}>
                        <Input placeholder="Name" prefix={<UserOutlined />} value={user.name} onChange={(e) => setUser({ name: e.target.value, feedback: user.feedback, link: user.link, url: user.url })} />
                    </Col>
                    <Col span={8}>
                        <Input placeholder="Feedback" prefix={<InfoOutlined />} value={user.feedback} onChange={(e) => setUser({ name: user.name, feedback: e.target.value, link: user.link, url: user.url })} />
                    </Col>
                    <Col span={8}>
                        <Input placeholder="Profile Link" prefix={<UserOutlined />} value={user.link} onChange={(e) => setUser({ name: user.name, feedback: user.feedback, link: e.target.value, url: user.url })} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Input placeholder="Link URL" prefix={<CodeOutlined />} value={user.url} onChange={(e) => setUser({ name: user.name, feedback: user.feedback, link: user.link, url: e.target.value })} />
                    </Col>
                </Row>
            </Modal>
            <Modal title="Edit seller" visible={editModalVisible} onCancel={() => setEditModalVisible(false)} onOk={confirmEdit}>
                <Row>
                    <Col span={8}>
                        <Input placeholder="Name" prefix={<UserOutlined />} value={editableUser.name} onChange={(e) => setEditableUser({ key: editableUser.key, name: e.target.value, feedback: editableUser.feedback, link: editableUser.link, url: editableUser.url })} />
                    </Col>
                    <Col span={8}>
                        <Input placeholder="Feedback" prefix={<InfoOutlined />} value={editableUser.feedback} onChange={(e) => setEditableUser({ key: editableUser.key, name: editableUser.name, feedback: e.target.value, link: editableUser.link, url: editableUser.url })} />
                    </Col>
                    <Col span={8}>
                        <Input placeholder="Profile Link" prefix={<UserOutlined />} value={editableUser.link} onChange={(e) => setEditableUser({ key: editableUser.key, name: editableUser.name, feedback: editableUser.feedback, link: e.target.value, url: editableUser.url })} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Input placeholder="Link URL" prefix={<CodeOutlined />} value={editableUser.url} onChange={(e) => setEditableUser({ key: editableUser.key, name: editableUser.name, feedback: editableUser.feedback, link: editableUser.link, url: e.target.value })} />
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default UserMgView;