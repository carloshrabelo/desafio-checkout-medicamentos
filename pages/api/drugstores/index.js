import fetch from "isomorphic-fetch";
import { distanceTo } from "geolocation-utils";
import { getStore } from "../drugstore/[id]";

const { API } = process.env;
const PATH = "desafio/farmacias";

const getDistance = (query) => ({ id, attributes: { lat, lon } }) => ({
  id,
  distance: distanceTo(
    { lat, lon },
    { lat: query.lat * 1, lon: query.lon * 1 }
  ),
});

const sortByDistance = (a, b) =>
  a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0;

const findTheClosest = (query) => (drugstores) =>
  drugstores.data.map(getDistance(query)).sort(sortByDistance)[0];

const _getStore = ({ id, distance }) =>
  getStore(id).then(({ data, response }) => ({
    ...response,
    data: {
      ...data,
      attributes: {
        distance: `${distance.toFixed(2)} metros`,
        ...data.attributes,
      },
    },
  }));

export default ({ query }, res) =>
  fetch(`${API}/${PATH}`)
    .then((response) => response.json())
    .then(findTheClosest(query))
    .then(_getStore)
    .then(res.send)
    .catch(res.send);
