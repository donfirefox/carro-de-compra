import { Component } from "react";

const styles = {
  carro: {
    backgorundColor: "#359A2C",
    color: "#fff",
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer'
  },
};

class Carro extends Component {
  render() {
    return (
      <div >
        <button style={styles.carro}>Carro</button>
      </div>
    );
  }
}

export default Carro;
