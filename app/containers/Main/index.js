import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Sidebar from 'components/Sidebar'

import RegisterCarForm from 'containers/RegisterCar'
import CarManagement from 'containers/CarManagement'
import Home from 'containers/Home'
import UserManagement from 'containers/UserManagement'
import ConnectedServices from 'containers/ConnectedServices'
import ApplicationStore from 'containers/ApplicationStore'

import MaterialTitlePanel from './CustomSidebar/material_title_panel'
import SidebarContent from './CustomSidebar/sidebar_content'

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
    width: '400px'
  },
  content: {
    padding: '16px',
    width: '400px'
  },
};

const mql = window.matchMedia(`(min-width: 800px)`);

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mql: mql,
      docked: false,
      open: false,
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, docked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  mediaQueryChanged() {
    this.setState({
      mql: mql,
      docked: this.state.mql.matches,
    });
  }

  toggleOpen(ev) {
    this.setState({open: !this.state.open});

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked &&
         <a onClick={this.toggleOpen.bind(this)} href="#" style={styles.contentHeaderMenuLink}>=</a>}
        <span> Car Management System </span>
      </span>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/registerCar' component={RegisterCarForm}/>
            <Route path='/carManagement' component={CarManagement} />
            <Route path='/userManagement' component={UserManagement} />
            <Route path='/firmwareUpdate' component={ConnectedServices} />
            <Route path='/remoteTroubleshoot' component={ConnectedServices} />
            <Route path='/applicationStore' component={ApplicationStore} />
          </Switch>
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}

export default Main
