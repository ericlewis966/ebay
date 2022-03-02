import { Layout } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Content } = Layout;

const AppLayout = () => {
    return(
        <>
        <Layout>
            <SubMenu/>
            <Content>
                This is Content
            </Content>
        </Layout>
        </>
    )
}

export default AppLayout;