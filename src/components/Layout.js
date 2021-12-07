import { Component } from "react";


const style = {
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
    }
}

class Layout extends Component {
  render() {
    return (
      <div style={style.layout}>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
