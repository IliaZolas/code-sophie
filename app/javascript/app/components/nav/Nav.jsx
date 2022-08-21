import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';

const Nav = () => (
  <div>
    <div className="navbar flex-between primary-blue">
      <div className="navlogo">
        CODE-SOPHIE
      </div>
      <div className="flex navigation">
        <div className="navitem">
          <a href="#">Home</a>
        </div>
        <div className="navitem">
          <a href="#">About</a>
        </div>
        <div className="navitem">
          <a href="#">Contact</a>
        </div>
        <div className="navitem primary-button secondary-green">
          <a href="#">Log in</a>
        </div>
      </div>
    </div>
  </div>
);

export default Nav;