import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Countries from './components/Countries';
import countryService from './services/countries';
import './app.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');
  const [newNotification, setNewNotification] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    countryService.getAll().then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    if (newFilter) {
      const matchingCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(newFilter.toLowerCase())
      );
      console.log('countries is:', countries);
      console.log('newFilter is:', newFilter);
      console.log(matchingCountries
      );
      if (matchingCountries.length > 10) {
        setFilteredCountries(matchingCountries);
        setNewNotification('Too many matches, specify another filter');
      } else {
        setFilteredCountries(matchingCountries);
        setNewNotification(null);
      }
    } else {
      setFilteredCountries(countries);
      setNewNotification(null);
    }
  }, [newFilter, countries]);

  const handleFilterChange = (event) => setNewFilter(event.target.value);

  return (
    <div>
      <h2>Country search!</h2>
      <Filter text="filter with" value={newFilter} handleFilterChange={handleFilterChange} />
      {filteredCountries.length > 10 ? (
        newNotification && <p>{newNotification}</p>
      ) : (
        <Countries countries={filteredCountries} />
      )}
    </div>
  );
};

export default App;