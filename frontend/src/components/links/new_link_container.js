import { createLink } from "../../actions/link_actions";
import NewLink from "./new_link";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    errors: state.linksErrors,
    currentUser: state.session.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    createLink: link => dispatch(createLink(link))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLink);