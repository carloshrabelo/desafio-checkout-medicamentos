import fetch from "isomorphic-fetch";

const { API } = process.env;
const PATH = "desafio/farmacias";

export const getStore = (id) =>
  fetch(`${API}/${PATH}/${id}`).then((response) => response.json());

export default ({ query: { id } }, res) =>
  getStore(id).then(res.send).catch(res.send);
