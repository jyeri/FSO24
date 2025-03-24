import { useState } from 'react';

const SingleCountry = ({ country }) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {Object.keys(country.languages).map((key) => (
                    <li key={key}>{country.languages[key]}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}></img>
        </div>
    );
};

const CountryList = ({ countries, onShowDetails }) => {
    return (
        <ul>
            {countries.map((country) => (
                <li key={country.name.common}>
                    {country.name.common}{' '}
                    <button onClick={() => onShowDetails(country)}>
                        More Info
                    </button>
                </li>
            ))}
        </ul>
    );
};

const Countries = ({ countries }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleShowDetails = (country) => {
        setSelectedCountry(country);
    };

    return (
        <div>
            {selectedCountry ? (
                <div>
                    <button onClick={() => setSelectedCountry(null)}>
                        Back
                    </button>
                    <SingleCountry country={selectedCountry} />
                </div>
            ) : countries.length === 0 ? (
                <p>No countries to display</p>
            ) : countries.length === 1 ? (
                <SingleCountry country={countries[0]} />
            ) : (
                <CountryList
                    countries={countries}
                    onShowDetails={handleShowDetails}
                />
            )}
        </div>
    );
};

export default Countries;