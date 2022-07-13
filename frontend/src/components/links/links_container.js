import { connect } from "react-redux";
import Links from "./links";
import {
  deleteLink,
  fetchUserLinks,
  updateLink,
  fetchLinks
} from "../../actions/link_actions";

const mapStateToProps = state => {
  return {
    allLinks: Object.values(state.links.all),
    links: Object.values(state.links.user),
    errors: state.errors.links,
    currentUser: state.session.user,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteLink: linkId => dispatch(deleteLink(linkId)),
    fetchUserLinks: userId => dispatch(fetchUserLinks(userId)),
    fetchLinks: () => dispatch(fetchLinks()),
    updateLink: link => dispatch(updateLink(link)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Links)