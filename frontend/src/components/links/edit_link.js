import React from "react";
import LabeledInput from "../form/labeled_input";

const initialState = {
  title: "",
  url: "",
  section: "",
  errors: []
}
export default class NewLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      section: "",
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const { title, url, section } = this.state;
    e.preventDefault();

    const link = {
      user: this.props.currentUser.id,
      title: title,
      url: url,
      section: section,
      date: Date.now()
    }
    this.props.updateLink(link);
    this.setState(initialState);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="pt-8 w-screen flex items-center justify-center place-content-center">
        <form className="flex flex-col gap-4 bg-gray-800 px-12 py-6 rounded-xl"
          onSubmit={this.handleSubmit}>
          <span className="mr-4 text-xl font-bold">Edit Link</span>
          <LabeledInput
            type="text"
            id="new-title"
            label="Title"
            name="link-title"
            placeholder="Link title"
            value={this.state.title}
            handleChange={this.update("title")}
          />
          <LabeledInput
            type="text"
            id="new-section"
            label="Section"
            name="link-section"
            placeholder="Main"
            value={this.state.section}
            handleChange={this.update("section")}
          />
          <LabeledInput
            type="url"
            label="Link URL"
            name="link-url"
            placeholder="https://www.link.com"
            value={this.state.url}
            handleChange={this.update("url")}
          />
          <div className="flex flex-row gap-4">
            <button
              onClick={this.props.cancel}
              className='bg-transparent font-bold text-center w-max px-4 py-1 rounded-md h-10 self-end ring-1 text-gray-50 ring-amber-700
              hover:ring-2 hover:ring-amber-500
              focus:ring-2 focus:ring-amber-300'>
              Cancel
            </button>
            <button type='submit'
              className='bg-gray-300 font-bold text-center w-max text-gray-900
              px-4 py-1 rounded-md h-10 self-end
              hover:bg-gray-50
              focus:ring-2 focus:ring-amber-300'>
              Update link
            </button>
          </div>
        </form>
      </div>
    );
  }
};