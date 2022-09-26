import React from "react";
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FindOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
const Navbar = () => {
    return(
        <div className="nav-conatiner">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Crytoverse</Link>
                </Typography.Title>           
                </div>

        </div>
    )
}

export default Navbar