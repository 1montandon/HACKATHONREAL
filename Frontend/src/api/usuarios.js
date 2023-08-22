import axios from "axios";
export default class UsuariosApi{
<<<<<<< HEAD
  async buscarTodosUsuarios() {
    const response = await axios.get("http://localhost:3000/categorias/");
    return response.data;
  }

  async buscarUsuario(id) {
    const response = await axios.get(`http://localhost:3000/categorias/${id}`);
    return response.data;
  }

  async adicionarUsuarios(usuarios){
    const response = await axios.post("http://localhost:3000/usuarios/", usuarios);   
    return response.data
}
  async excluirUsuario(id) {
    const response = await axios.delete(`http://localhost:3000/categorias/${id}`);
    return response.data;
  }

  async atualizarUsuario(categoria) {
    const response = await axios.put(`http://localhost:3000/categorias/${categoria.id}`,categoria);
    return response.data;
  }
=======
    async adicionarUsuarios(usuarios){
        const response = await axios.post("http://localhost:3000/usuarios/", usuarios);   
        return response.data
    }
    async removerUsuarios(id){
        const response = await axios.delete(`http://localhost:3000/usuarios/${id}`);
        return response.data
    }
    async 
>>>>>>> 9375c1a86214c9c22e464a8ec3ea24626f578dcd
}
