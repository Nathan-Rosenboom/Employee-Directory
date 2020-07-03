import React, { Component } from "react";
import Container from "../../components/Container";
import ResultContainer from "../../components/ResultContainer";
import SearchForm from "../../components/SearchForm";
import ResultTableHead from "../../components/ResultTableHead";
import ResultTableBody from "../../components/ResultTableBody";
import employee from "../../utils/employees.json";

class Search extends Component {
  state = {
    employeeData: [],
    sort: "",
    filter: "",
  };

  componentDidMount() {
    this.setState({ employeeData: employee });
  }

  sortData = () => {
    if (this.state.sort === "ASC") {
      this.setState({ sortData: "DESC" });
    } else {
      this.setState({ sortData: "ASC" });
    }
  };

  filterData = (event) => {
    this.setState({ filter: event.target.value });
  };

  searchData = () => {
    let employeeSearch = this.state.employeeData;
    if (this.state.filter === "") {
      return employeeSearch.sort((a, b) =>
        a.firstName > b.firstName ? -1 : 1
      );
    } else {
      return employeeSearch;
    }
  };
  render() {
    return (
      <div>
        <Container>
          <SearchForm />
          <ResultContainer>
            <ResultTableHead />
            {this.searchData().map((employee) => (
              <ResultTableBody
                key={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
                email={employee.email}
                dob={employee.dob}
                age={employee.age}
                phone={employee.phone}
                profileImage={employee.picture.thumbnail}
              />
            ))}
          </ResultContainer>
        </Container>
      </div>
    );
  }
}
export default Search;
