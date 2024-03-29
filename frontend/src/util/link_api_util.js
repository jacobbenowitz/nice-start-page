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

export const patchLinkIdx = (linkId, linkIdx, linkSection) => {
  return axios.patch(`/api/links/${linkId}/idx`,
    { linkIdx: linkIdx, section: linkSection });
}

export const deleteLink = id => {
  return axios.delete(`/api/links/${id}`);
}