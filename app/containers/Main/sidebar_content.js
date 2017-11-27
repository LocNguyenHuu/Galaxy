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
    width: '50%',
    textAlign: 'center',
    display: 'inline-flex',
    backgroundColor: 'rgb(3, 169, 244)',
    marign: '0 auto'
  },
  leftOption: {
    marginRight: 10
  },
  Icon: {
    display: 'block'
  },
  Name: {
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
    <MaterialTitlePanel title='Menu' style={style}>
      <div style={styles.content}>
        <div>
          <Icon name='car' size='big' />
          <span>Car Management</span>
        </div>
        <div style={styles.carmanagementOption}>
          <span style={styles.leftOption}>
            <Icon name='plus circle' size='huge' style={styles.Icon}/>
            <Link to="/" style={styles.Name}>Register</Link>
          </span>
          <span>
            <Icon name='car' size='huge' style={styles.Icon}/>
            <Link to='/carmanagement' style={styles.Name}>CarManagement</Link>
          </span>
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
