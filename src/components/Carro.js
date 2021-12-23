import { Component } from "react";
import BubleAlert from "./BubleAlert";
import DetalleCarro from "./DetalleCarro";

const styles = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer'
  },
  bubble:{
    position: 'relative',
    left: 12,
    top: 20,
  }
};

class Carro extends Component {

  render() {
    const {carro, mostrarCarro, esCarroVisible} = this.props
    const cantidad = carro.reduce((acc,el)=>acc+el.cantidad,0)
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubleAlert value={cantidad} /> : null}
        </span>
        <button style={styles.carro} onClick={mostrarCarro}>
          Carrito
        </button>
        {esCarroVisible ? <DetalleCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;
