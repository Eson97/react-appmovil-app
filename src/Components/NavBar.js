import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export const NavBar = () => {

    const location = useLocation();

    return (
        <Menu mode='horizontal' defaultSelectedKeys={location.pathname}>
            <Menu.Item key='/'>
                <Link to='/'>Inicio</Link>
            </Menu.Item>
            <SubMenu key='/Apps' title={<span>Apps</span>}>
                <MenuItemGroup title='Apps'>
                    <Menu.Item key='/Apps/Create'>
                        <Link to='Apps/Create'>Agregar</Link>
                    </Menu.Item>
                    <Menu.Item key='/Apps/Download'>
                        <Link to='Apps/Download'>Descargar</Link>
                    </Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <Menu.Item key='/Versions'>
                <Link to='/Versions'>Versiones</Link>
            </Menu.Item>
        </Menu>
    );
}