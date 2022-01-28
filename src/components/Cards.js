import React from 'react';

const Cards = (props) => {

    // DESCTRUCTURING
    const { country } = props;

    const numberFormatting = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }


    return (
        <li className="card">
            <img src={country.flag} alt="Flag" />
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>Capital: {country.capital}</li>
                    <li>Pop: {numberFormatting(country.population)}</li>
                    {country.currencies.map((val) => (
                        <div className="currencies-list">
                            <h1>Currencies</h1>
                            <li>Code de la devise: {val.code}</li>
                            <li>Appelation: {val.name}</li>
                            <li>Symbole: {val.symbol}</li>
                        </div>
                    ))}

                </ul>
            </div>
        </li>
    );
};

export default Cards;