import { updateLink } from "../../actions/link_actions";
import EditLink from "./edit_link";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    errors: state.linksErrors,
    links: state.links.user,
    currentUser: state.session.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateLink: link => dispatch(updateLink(link))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLink);