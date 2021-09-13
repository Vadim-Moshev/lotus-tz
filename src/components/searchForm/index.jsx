import React from "react";

import "./index.css";

export default class SearchForm extends React.Component {
  constructor({ onInput, onSearch }) {
    super();
  }

  render() {
    return (
      <form onSubmit={this.props.onSearch} className="search-form" noValidate>
        <input
          autoFocus={true}
          placeholder="Поиск по имени"
          className="search-form__text-field"
          type="text"
          onInput={this.props.onInput}
        />
        <input
          className="search-form__search-button"
          type="submit"
          value="Начать поиск"
        />
      </form>
    );
  }
}
