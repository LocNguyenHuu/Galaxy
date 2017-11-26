import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import MaterialTitlePanel from './material_title_panel';

const styles = {
  sidebar: {
    width: 400,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    width: 400,
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
  carmanagementOption: {
    display: 'inline',
  }
};

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>Mock menu item {ind}</a>);
  }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <div>
          <Icon name='car' size='big' />
          <span>Car Management</span>
        </div>
        <div style={styles.carmanagementOption}>
          <Icon name='plus circle' size='huge' />
          <Link to="/">Register</Link>
          <Icon name='car' size='huge' />
          <Link to="/carmanagement">CarManagement</Link>
        </div>
        <div style={styles.divider} />
        {links}
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
