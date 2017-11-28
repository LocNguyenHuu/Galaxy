import React, { Component } from 'react'
import { Image, Dropdown, Icon } from 'semantic-ui-react'
import LightBox from 'react-images'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import LogoImage from './car.jpg'

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

class Home extends Component {
  stateOptions = [ { key: '1', value: 'Car1', text: 'Car 1' }, { key: '2', value: 'Car2', text: 'Car 2' }, { key: '3', value: 'Car3', text: 'Car 3'}];
  render() {
    return (
      <div>
        <div>
          <h1>List car</h1>
          <Dropdown placeholder='select car' search selection options={this.stateOptions}/>
        </div>
        <div>
          <img src={LogoImage} alt='logo' /> 
        </div>
        <div>
          <div>PnP Services</div>
          <div>
            <Icon name='window restore' size='huge'/>
            <Link to="/">Delivery Trunk</Link>
            <Icon name='home' size='huge' />
            <Link to="/">Home Connect</Link>
          </div>
          <div>Connected Services</div>
          <div>
            <Icon name='settings' size='huge' />
            <Link to="/">Firmware Update</Link>
            <Icon name='exclamation triangle' size='huge' />
            <Link to='/'>Remote</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home