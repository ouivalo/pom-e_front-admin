import React from 'react'
import { Layout as RALayout } from 'react-admin'
import AppBar from './AppBar'
import Menu from './Menu'

const Layout = props => <RALayout {...props} appBar={AppBar} menu={Menu} />

export default Layout
