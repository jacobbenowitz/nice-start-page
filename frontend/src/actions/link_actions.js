import {
  getLinks,
  getUserLinks,
  createLink,
  updateLink,
  deleteLink
} from "../util/link_api_util";

export const RECEIVE_LINKS = "RECEIVE_LINKS";
export const RECEIVE_USER_LINKS = "RECEIVE_USER_LINKS";
export const RECEIVE_LINK = "RECEIVE_LINK";
export const REMOVE_LINK = "REMOVE_LINK";
export const RECEIVE_LINK_ERRORS = "RECEIVE_LINK_ERRORS";

const receiveLinks = links => ({
  type: RECEIVE_LINKS,
  links
});

const receiveUserLinks = links => ({
  type: RECEIVE_USER_LINKS,
  links
});

const receiveLink = link => ({
  type: RECEIVE_LINK,
  link
});

const removeLink = link => ({
  type: REMOVE_LINK,
  link
});

const receiveLinkErrors = errors => ({
  type: RECEIVE_LINK_ERRORS,
  errors
});

// thunks

export const fetchLinks = () => dispatch => {
  return getLinks().then(links =>
    dispatch(receiveLinks(links)))
    .catch(err => dispatch(
      receiveLinkErrors(err.response.data)));
}

export const fetchUserLinks = userId => dispatch => {
  return getUserLinks(userId).then(links =>
    dispatch(receiveUserLinks(links)))
    .catch(err => dispatch(
      receiveLinkErrors(err.response.data)));
}

export const createLink = link => dispatch => {
  return createLink(link).then(link =>
    dispatch(receiveLink(link)))
    .catch(err => dispatch(
      receiveLinkErrors(err.response.data)));
}

export const updateLink = link => dispatch => {
  return updateLink(link).then(link =>
    dispatch(receiveLink(link)))
    .catch(err => dispatch(
      receiveLinkErrors(err.response.data)));
}

export const deleteLink = linkId => dispatch => {
  return deleteLink(linkId)
    .then(link =>
      dispatch(removeLink(link)))
    .catch(err => dispatch(
      receiveLinkErrors(err.response.data)));
}