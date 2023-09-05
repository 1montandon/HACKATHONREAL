import axios from "axios";

class ChefsApi {
  async buscarTodosOsChefs() {
    const response = await axios.get("https://my-json-server.typicode.com/TinaPera/james-back-json/chefs/");
    return response.data;
  }
}
export default new ChefsApi();
