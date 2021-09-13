import React from "react";

import "./index.css";

import SearchForm from "../../components/searchForm";
import ResultsTable from "../../components/resultsTable";
import Loader from "../../components/loader";

export default class MainPage extends React.Component {
  state = {
    searchString: "",
    foundRecords: [],
    searchStarted: false,
    isLoading: false,
  };

  onSearch = async (event) => {
    event.preventDefault();

    const searchString = this.state.searchString;

    if (searchString.trim() === "") {
      alert("Введите строку поиска.");
      return;
    }

    const url = `https://swapi.dev/api/people/?search=${searchString}`;

    this.setState((d) => {
      return {
        isLoading: true,
        searchStarted: true,
      };
    });

    const response = await fetch(url);
    const json = await response.json();

    this.setState((d) => {
      return {
        foundRecords: json.results,
        isLoading: false,
      };
    });
  };

  onInput = (event) => {
    this.setState({
      searchString: event.target.value,
    });
  };

  render() {
    const { isLoading, searchStarted, foundRecords } = this.state;

    const foundRecordsOrNothing =
      foundRecords.length === 0 ? (
        <span>Ничего не найдено</span>
      ) : (
        <ResultsTable data={this.state.foundRecords} />
      );

    const loadedResultOrLoader = isLoading ? <Loader /> : foundRecordsOrNothing;

    const resultToShow = searchStarted ? loadedResultOrLoader : null;

    return (
      <>
        <SearchForm
          onInput={this.onInput}
          onSearch={this.onSearch}
          className="search-form"
        />
        <div className="found-result-container">{resultToShow}</div>
      </>
    );
  }
}
