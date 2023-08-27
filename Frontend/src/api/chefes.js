import axios from "axios";

class ChefsApi {
  async buscarTodosOsChefs() {
    const response = await axios.get("http://localhost:3000/chefs/");
    return response.data;
  }
}
export default new ChefsApi();
