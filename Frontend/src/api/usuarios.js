import axios from "axios";
class UsuariosApi{
  async buscarTodosUsuarios() {
    const response = await axios.get("https://my-json-server.typicode.com/TinaPera/james-back-json/usuarios/");
    return response.data;
  }

  async buscarUsuario(id) {
    const response = await axios.get(`https://my-json-server.typicode.com/TinaPera/james-back-json/usuarios/${id}`);
    return response.data;
  }

  async adicionarUsuarios(usuarios){
    const response = await axios.post("https://my-json-server.typicode.com/TinaPera/james-back-json/usuarios/", usuarios);   
    return response.data
}
  async excluirUsuario(id) {
    const response = await axios.delete(`https://my-json-server.typicode.com/TinaPera/james-back-json/usuarios/${id}`);
    return response.data;
  }

  async atualizarUsuario(usuarios) {
    const response = await axios.put(`https://my-json-server.typicode.com/TinaPera/james-back-json/usuarios/${usuarios.id}`,usuarios);
    return response.data;
  }
}

export default new UsuariosApi();