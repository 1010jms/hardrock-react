import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Image, Grid, Icon } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "#ccc", fontSize: "22px" };
    return (
        <Menu className="topmenu">
          <Menu.Item><Image src="http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png"/></Menu.Item>
          <Menu.Item style={itemStyle} position="right">CAFES</Menu.Item>
          <Menu.Item style={itemStyle}>HOTELS</Menu.Item>
          <Menu.Item style={itemStyle}>CASINOS</Menu.Item>
          <Menu.Item style={itemStyle}>LIVE</Menu.Item>
          <Menu.Item style={itemStyle}>SHOP</Menu.Item>
          <Menu.Item style={itemStyle}>BLOG</Menu.Item>
          <Menu.Item style={itemStyle}>REWARDS</Menu.Item>

        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid src="http://www.hardrock.com/cafes/honolulu/files/2384/Honolulu_Entrance.jpg" />
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div class="footer-background">
          <Grid centered>
            <Grid.Row><div class="footer-one">HARD ROCK CAFE HONOLULU</div></Grid.Row>
            <Grid.Row>
              <Icon name="phone icon" />
              +1-808-955-7383 &nbsp; &nbsp; &nbsp;
              <Icon name="mail icon" />
              Email Us &nbsp; &nbsp; &nbsp;
              <Icon name="home icon" />
              280 Beachwalk, Honolulu, Hawaii 96815 &nbsp; &nbsp; &nbsp;
              <Icon name="twitter icon" />
              <Icon name="facebook f icon" />
              <Icon name="instagram icon" />
              <Icon name="pinterest icon" />
              <Icon name="tripadvisor icon" />
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

class HardRock extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
  );
  }
}

ReactDOM.render(<HardRock/>, document.getElementById('root'));