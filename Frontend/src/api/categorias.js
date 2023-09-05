import axios from "axios";

export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const response = await axios.get("https://my-json-server.typicode.com/TinaPera/james-back-json/categorias/");
    return response.data;
  }

  async buscarCategoria(id) {
    const response = await axios.get(`https://my-json-server.typicode.com/TinaPera/james-back-json/categorias/${id}`);
    return response.data;
  }

  async adicionarCategoria(categoria) {
    const response = await axios.post("https://my-json-server.typicode.com/TinaPera/james-back-json/categorias/",categoria);
    return response.data;
  }

  async excluirCategoria(id) {
    const response = await axios.delete(`https://my-json-server.typicode.com/TinaPera/james-back-json/categorias/${id}`);
    return response.data;
  }

  async atualizarCategoria(categoria) {
    const response = await axios.put(`https://my-json-server.typicode.com/TinaPera/james-back-json/categorias/${categoria.id}`,categoria);
    return response.data;
  }
}
