import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);
    const [{ search }, handleInputChange] = useForm({ search: q });

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${search}`);
    };

    return (
        <div>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <form className="mt-2" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            name="search"
                            value={search}
                            onChange={handleInputChange}
                        />
                        <button className="btn btn-block btn-primary mt-3">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {q === "" && (
                        <div className="alert alert-info">Search a hero</div>
                    )}

                    {q !== "" && heroesFiltered.length === 0 && (
                        <div className="alert alert-danger">
                            There is no a hero with '{q}'
                        </div>
                    )}

                    <div className="row">
                        {heroesFiltered.map((hero) => (
                            <HeroCard key={hero.id} {...hero} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
