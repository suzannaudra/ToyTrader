import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };
 
  onSubmit.axios.get
  
  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}