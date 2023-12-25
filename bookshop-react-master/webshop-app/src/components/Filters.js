import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { Offcanvas, Button } from "react-bootstrap";
import "../css/Filters.css";

function Filters({ filters, setFilters, handleChange, handleReset }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="menu pt-5 container">
                <div className="filter-buttons row ml-3 d-flex">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex mt-3 ps-2">
                            <span
                                className="input-group-text"
                                id="basic-addon1"
                            >
                                <ImSearch />
                            </span>
                            <input
                                className="form-control me-2 border-none"
                                id="search-input"
                                name="search"
                                type="text"
                                value={filters.search}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        search: e.target.value
                                    })
                                }
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="d-flex mt-3 ps-2">
                            <label className="input-group-text" htmlFor="sort">
                                <i className="fas fa-sort"></i>Sort by
                            </label>
                            <select
                                name="sort"
                                id="sort"
                                className="form-select border-none"
                                value={filters.sort}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        sort: e.target.value
                                    })
                                }
                            >
                                <option value="none">Recommended</option>
                                <option value="asc">Ascending price</option>
                                <option value="desc">Descending price</option>
                            </select>
                        </div>
                        <div className="mt-3 text-center ps-2">
                            <Button
                                variant="primary"
                                onClick={handleShow}
                                className="me-2"
                            >
                                Filters
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <h3>Filters</h3>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form action="/books" id="filter-form" method="get">
                        <fieldset
                            id="filter-category"
                            className="filter-category"
                        >
                            <h4>Category:</h4>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Book for children"
                                    name="category"
                                    value="Book for children"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf(
                                            "Book for children"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Book for children</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Philosophy"
                                    name="category"
                                    value="Philosophy"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf(
                                            "Philosophy"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Philosophy</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Science Fiction"
                                    name="category"
                                    value="Science Fiction"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf(
                                            "Science Fiction"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Science Fiction</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Fantastic"
                                    name="category"
                                    value="Fantastic"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf("Fantastic") !==
                                        -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Fantastic</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Fictionary"
                                    name="category"
                                    value="Fictionary"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf("Fictionary") !==
                                        -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Fictionary</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Economy"
                                    name="category"
                                    value="Economy"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf(
                                            "Economy"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Economy</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Horror"
                                    name="category"
                                    value="Horror"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf(
                                            "Horror"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Horror</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Cultural"
                                    name="category"
                                    value="Cultural"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf("Cultural") !==
                                        -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Cultural</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Personal development"
                                    name="category"
                                    value="Personal development"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf(
                                            "Personal development"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Personal development</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Cooking book"
                                    name="category"
                                    value="Cooking book"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.category.indexOf("Cooking book") !==
                                        -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Cooking book</label>
                            </div>
                        </fieldset>
                        <fieldset
                            id="filter-price"
                            className="mt-2 filter-price"
                        >
                            <h4>Price:</h4>
                            <div className="filter-item">
                                <input
                                    type="radio"
                                    name="price_range"
                                    id="range_0_20"
                                    value="0_20000"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.price_range === "0_20000"
                                            ? true
                                            : false
                                    }
                                />
                                <label> 0-20.000 Vnđ</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="radio"
                                    name="price_range"
                                    id="range_20_50"
                                    value="20000_50000"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.price_range === "20000_50000"
                                            ? true
                                            : false
                                    }
                                />
                                <label> 20.000-50.000 Vnđ</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="radio"
                                    name="price_range"
                                    id="range_50_"
                                    value="50000"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.price_range === "50000"
                                            ? true
                                            : false
                                    }
                                />
                                <label> Above 50.000 Vnđ</label>
                            </div>
                        </fieldset>
                        <fieldset id="filter-rating" className="mt-2">
                            <h4>Minimum rating:</h4>
                            <div className="filter-item">
                                <input
                                    type="number"
                                    value={filters.minimum_rating}
                                    onChange={(e) =>
                                        setFilters({
                                            ...filters,
                                            minimum_rating: e.target.value
                                        })
                                    }
                                    name="minimum_rating"
                                    id="minimum_rating"
                                    min="0"
                                    max="5"
                                />
                            </div>
                        </fieldset>
                        <fieldset id="filter-os" className="mt-2 filter-os">
                            <h4>Publishing house:</h4>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Penguin"
                                    name="publishing_house"
                                    value="Penguin"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.publishing_house.indexOf(
                                            "Penguin"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Penguin</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Vintage"
                                    name="publishing_house"
                                    value="Vintage"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.publishing_house.indexOf(
                                            "Vintage"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Vintage</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Thanh Nien"
                                    name="publishing_house"
                                    value="Thanh Nien"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.publishing_house.indexOf(
                                            "Thanh Nien"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Thanh Nien</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Kim Dong"
                                    name="publishing_house"
                                    value="Kim Dong"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.publishing_house.indexOf(
                                            "Kim Dong"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Kim Dong</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Cornerstone"
                                    name="publishing_house"
                                    value="Cornerstone"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.publishing_house.indexOf(
                                            "Cornerstone"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Cornerstone</label>
                            </div>
                            <div className="filter-item">
                                <input
                                    type="checkbox"
                                    id="Dorling"
                                    name="publishing_house"
                                    value="Dorling"
                                    onChange={handleChange}
                                    defaultChecked={
                                        filters.publishing_house.indexOf(
                                            "Dorling"
                                        ) !== -1
                                            ? true
                                            : false
                                    }
                                />
                                <label>Dorling</label>
                            </div>
                        </fieldset>
                        <fieldset id="filter-stock" className="mt-2">
                            <h4>In stock:</h4>
                            <input
                                className="filter-item"
                                type="checkbox"
                                name="stock_yes"
                                id="stock_yes"
                                value="true"
                                onChange={handleChange}
                                defaultChecked={filters.stock_yes}
                            />
                            <label>Yes</label>
                        </fieldset>
                        <div className="filter-form-buttons d-flex justify-content-between">
                            <input
                                type="reset"
                                id="reset"
                                className="mt-3 reset-input"
                                value="Reset filters"
                                onClick={handleReset}
                            />
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Filters;
