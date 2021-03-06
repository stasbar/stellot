import React, { useEffect } from 'react';
import { Col, Layout } from 'antd';
import Logo from "@/components/Logo";
import { Link } from "umi";
import { ConnectProps } from "@/models/connect";
import { BtnHeading } from "@/components/ActionButton";
import { GithubOutlined } from '@ant-design/icons';
import { GITHUB_URL, PAPER_URL } from "@/constants";
import { CORNFLOWER } from "@/shared/Colors";
import styles from './index.css';

const { Header, Footer, Content } = Layout;

interface LayoutProps extends ConnectProps {

}

/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/alt-text */
const BasicLayout: React.FC<LayoutProps> = props => {
  const { route, computedMatch, location } = props;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location?.pathname]);
  const isWall = location && (location.pathname === '/' || location.pathname === '/wall');

  return (
    <Layout className={styles.normal}>
      <Header className={styles.header}>
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 16, offset: 4 }}
          xl={{ span: 14, offset: 5 }}>
          <Link to="/" className={styles.logo}>
            <Logo large={false} />
          </Link>
          {isWall &&
            <Link to="/create">
              <BtnHeading size="large" color={CORNFLOWER}>
                Create Voting
            </BtnHeading>
            </Link>
          }
        </Col>
      </Header>
      <Content>
        <Col className={styles.content}
          style={{ marginTop: isWall ? '4em' : '2em' }}
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 16, offset: 4 }}
          xl={{ span: 14, offset: 5 }}>
          {props.children}
        </Col>
      </Content>
      <Footer style={{ textAlign: 'center', }}>
        <div>
          <Link to="/faq"><span
            style={{ marginRight: 40, color: '#000000a6', textDecoration: 'none', outline: 0 }}>FAQ</span></Link>

          <a style={{ marginRight: 40, color: '#000000a6', textDecoration: 'none', outline: 0 }}
            href={GITHUB_URL}>
            <GithubOutlined />
          </a>

          <a style={{ color: '#000000a6', textDecoration: 'none', outline: 0 }}
            href={PAPER_URL}>Whitepaper</a>
        </div>
        <div>2020 - All right reserved &copy;</div>
      </Footer>
    </Layout>
  )
};

export default BasicLayout;
