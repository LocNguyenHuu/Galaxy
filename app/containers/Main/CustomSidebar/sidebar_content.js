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
  optionSection: {
    // height: 20
  },
  headerSection: {

  },
  contentSection: {
    width: '100%',
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

  return (
    <MaterialTitlePanel title='Menu' style={style}>
      <div style={styles.content}>
        {/* Car Management Seciton */}
        <div style={styles.optionSection}>
          <div style={styles.headerSection}>
            <Icon name='car' size='big' />
            <span>Car Management</span>
          </div>
          <div style={styles.contentSection}>
            <span style={styles.leftOption}>
              <Icon name='plus circle' size='huge' style={styles.Icon}/>
              <Link to="/registerCar" style={styles.Name}>Register</Link>
            </span>
            <span>
              <Icon name='car' size='huge' style={styles.Icon}/>
              <Link to='/carManagement' style={styles.Name}>CarManagement</Link>
            </span>
          </div>
          <div style={styles.divider} />
        </div>
        {/* User Management Seciton */}
        <div style={styles.optionSection}>
          <div style={styles.headerSection}>
            <Icon name='user' size='big' />
            <span>User Management</span>
          </div>
          <div style={styles.contentSection}>
            <span>
              <Icon name='users' size='huge' style={styles.Icon}/>
              <Link to="/userManagement" style={styles.Name}>Manage User Information</Link>
            </span>
          </div>
          <div style={styles.divider} />
        </div>
        {/* Connected Service */}
        <div style={styles.optionSection}>
          <div style={styles.headerSection}>
            <Icon name='cloud upload' size='big' />
            <span>Connected Service</span>
          </div>
          <div style={styles.contentSection}>
            <span style={styles.leftOption}>
              <Icon name='settings' size='huge' style={styles.Icon} />
              <Link to="/firmwareUpdate" style={styles.Name}>Firmware Update</Link>
            </span>
            <span>
              <Icon name='exclamation triangle' size='huge' style={styles.Icon} />
              <Link to='/remoteTroubleshoot' style={styles.Name}>Remote TroubleShoot</Link>
            </span>
          </div>
          <div style={styles.divider} />
        </div>
        {/* Application Store Section*/}
        <div style={styles.optionSection}>
          <div style={styles.headerSection}>
            <Icon name='travel' size='big' />
            <span>Application Store Management</span>
          </div>
          <div style={styles.contentSection}>
            <span>
              <Icon name='puzzle' size='huge' style={styles.Icon} />
              <Link to="/applicationStore" style={styles.Name}>Application Store</Link>
            </span>
          </div>
          <div style={styles.divider} />
        </div>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
