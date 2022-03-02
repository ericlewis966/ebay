import { Layout } from 'antd';
import PrivateView from 'views/private-view';
import SideMenu from 'components/SideMenu';
import Navbar from 'components/Navbar';

const { Content, Header, Sider } = Layout;

const PrivateLayout = () => {
    return (
        <Layout>
            <Header theme='light'>
                <Navbar />
            </Header>
            <Layout>
                <Sider theme='light'>
                    <SideMenu />
                </Sider>
                <Content>
                    <PrivateView />
                </Content>
            </Layout>
        </Layout>
    )
}

export default PrivateLayout;