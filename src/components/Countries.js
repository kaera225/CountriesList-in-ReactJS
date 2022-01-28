import React, { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";

const Countries = () => {

    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(300);
    const [selectedRadio, setSelectedRadio] = useState('');
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

    useEffect(() => {

        if (playOnce) {
            axios.get('https://restcountries.com/v2/all?fields=name,capital,currencies,flag,population,region')
                .then((result) => {
                    setData(result.data);
                    setPlayOnce(false);
                });

        }


        const sortedDataCountry = () => {
            const countryObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population;
            });
            sortedArray.length = rangeValue;
            setSortedData(sortedArray);
        };
        sortedDataCountry();
    }, [data, playOnce, rangeValue]);


    return (
        <div className="countries">
            <div className="sort-container">
                <input type="range" min="1" max="250" value={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)} />
                <ul>
                    {radios.map((radio) => {
                        return (
                            <li key={radio}>
                                <input type="radio" value={radio} id={radio}
                                    checked={radio === selectedRadio}
                                    onChange={(e) => setSelectedRadio(e.target.value)}
                                />
                                <label htmlFor={radio}>{radio}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="cancel">
                { /* SI selectedRadio est egal a TRUE alors affiche ce qui est apres "&&" et on appel la fonction "setSelectedRadio" apres le click pour une chaine vide*/}
                {selectedRadio && <h5 onClick={(e) => setSelectedRadio("")}>Annuler la recherche</h5>}
            </div>
            <ul className="countries-list">
                {sortedData
                    .filter((country) => country.region.includes(selectedRadio))
                    .map((country) => (
                        <Cards country={country} key={country.name} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Countries;