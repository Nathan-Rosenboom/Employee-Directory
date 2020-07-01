import React from "react";
import Container from "../../components/Container";
import ResultContainer from "../../components/ResultContainer";
import SearchForm from "../../components/SearchForm";
import SearchResultUL from "../../components/SearchResultUL";
import SearchResultLI from "../../components/SearchResultLI";
import Employees from "../../utils/employees.json";

function Search() {


    return (
        <div>
            <Container>
                <SearchForm />
                <ResultContainer>
                    <SearchResultUL>
                        <SearchResultLI />
                    </SearchResultUL>
                </ResultContainer>
            </Container>
        </div>
    );
}
export default Search;