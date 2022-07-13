import axios from "axios";

export const getLinks = () => {
  return axios.get("/api/links");
}

export const getUserLinks = id => {
  return axios.get(`/api/links/user/${id}`);
}

export const createLink = link => {
  return axios.post("/api/links", link);
}

export const updateLink = link => {
  return axios.patch(`/api/links/${link.id}`, link);
}

export const deleteLink = id => {
  return axios.delete(`/api/links/${id}`);
}