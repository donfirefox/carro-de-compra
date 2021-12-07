import { Component } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Productos from "./components/Productos";
import Title from "./components/Title";

class App extends Component {
  state = {
    productos: [
      { name: "tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
      { name: "Lechugas", price: 50, img: "/productos/lechuga.jpg" },
    ],
  };

  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={() => console.log("agregar elemento al carro")}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
