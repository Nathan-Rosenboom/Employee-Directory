import React, { Component } from "react";
import Container from "./components/container";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import ResultContainer from "./components/ResultContainer";
import ResultTableHead from "./components/ResultTableHead";
import ResultTableBody from "./components/ResultTableBody";
import Footer from "./components/Footer";
import employee from "./utils/employees.json";

class App extends Component {
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
      this.setState({ sort: "DESC" });
    } else {
      this.setState({ sort: "ASC" });
    }
  };

  filterData = (event) => {
    this.setState({ filter: event.target.value });
  };

  searchData = () => {
    let employeeSearch = this.state.employeeData;
    if (this.state.filter === "") {
      if (this.state.sort === "DESC") {
        return employeeSearch.sort((a, b) =>
          a.firstName > b.firstName ? -1 : 1
        );
      } else if (this.state.sort === "ASC") {
        return employeeSearch.sort((a, b) =>
          a.firstName > b.firstName ? 1 : -1
        );
      } else {
        return employeeSearch;
      }
    }

    let searchInput = this.state.filter.toLowerCase().trim();
    let searchResult = employeeSearch.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(searchInput) ||
        employee.lastName.toLowerCase().includes(searchInput) ||
        employee.email.toLowerCase().includes(searchInput) ||
        employee.dob.includes(searchInput) ||
        employee.age.includes(searchInput) ||
        employee.phone.includes(searchInput)
    );
    if (this.state.sort === "DESC") {
      return searchResult.sort((a, b) => (a.firstName > b.firstName ? -1 : 1));
    } else if (this.state.sort === "ASC") {
      return searchResult.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    } else {
      return searchResult;
    }
  };
  render() {
    return (
      <Container>
        <Navbar />
        <SearchForm userFilter={this.filterData} />
        <ResultContainer>
          <table className="ResultTable">
            <ResultTableHead userSort={this.sortData} />
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
          </table>
        </ResultContainer>
        <Footer />
      </Container>
    );
  }
}
export default App;
