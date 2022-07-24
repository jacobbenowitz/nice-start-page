import axios from "axios";

export const getLinks = () => {
  return axios.get("/api/links");
}

export const getUserLinks = id => {
  return axios.get(`/api/links/user/${id}`);
}

export const newLink = link => {
  return axios.post("/api/links", link);
}

export const patchLink = link => {
  return axios.patch(`/api/links/${link._id}`, link);
}

export const patchLinkIdx = (linkId, linkIdx) => {
  return axios.patch(`/api/links/idx/${linkId}`, { linkIdx: linkIdx });
}

export const deleteLink = id => {
  return axios.delete(`/api/links/${id}`);
}