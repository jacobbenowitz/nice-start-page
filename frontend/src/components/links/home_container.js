import { connect } from "react-redux";
import Home from "./home";

import {
  deleteLink,
  fetchUserLinks,
  updateLink,
  fetchLinks,
  updateLinkIdx
} from "../../actions/link_actions";
import { fetchCurrentUser } from "../../actions/session_actions";
import { buildLinksProps } from "../../reducers/selectors";
import { updateLayout } from "../../actions/session_actions";

const mapStateToProps = ({ links, errors, session }) => {
  return {
    links: buildLinksProps(links.user, session.layout),
    errors: errors.links,
    currentUser: session.user,
    linksStatus: links.status,
    layout: session.layout
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteLink: linkId => dispatch(deleteLink(linkId)),
    fetchUserLinks: (userId) => dispatch(fetchUserLinks(userId)),
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    fetchLinks: () => dispatch(fetchLinks()),
    updateLink: link => dispatch(updateLink(link)),
    updateLinkIdx: (linkId, linkIdx, linkSection) =>
      dispatch(updateLinkIdx(linkId, linkIdx, linkSection)),
    updateLayout: (layout) => dispatch(updateLayout(layout))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)