import axios from "axios";
export default class UsuariosApi{
  async buscarTodosUsuarios() {
    const response = await axios.get("http://localhost:3000/usuarios/");
    return response.data;
  }

  async buscarUsuario(id) {
    const response = await axios.get(`http://localhost:3000/usuarios/${id}`);
    return response.data;
  }

  async adicionarUsuarios(usuarios){
    const response = await axios.post("http://localhost:3000/usuarios/", usuarios);   
    return response.data
}
  async excluirUsuario(id) {
    const response = await axios.delete(`http://localhost:3000/usuarios/${id}`);
    return response.data;
  }

  async atualizarUsuario(usuarios) {
    const response = await axios.put(`http://localhost:3000/usuarios/${usuarios.id}`,usuarios);
    return response.data;
  }
}