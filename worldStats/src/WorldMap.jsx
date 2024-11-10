import { useCallback, useEffect } from 'react';
import axios from 'axios';
import WorldMap from 'react-svg-worldmap';
import { useState } from 'react';

function Worldmap() {
  const [CountryData, setCountry] = useState({});
  const [code, setCode] = useState('in');
  const [data, setData] = useState([{ country: 'in', value: 9 }]);

  useEffect(() => {
    const fetchdata = async () => {
      const Response = await axios.get(
        `https://api.worldbank.org/v2/country/${code}/indicator/SP.POP.TOTL?format=json`
      );
      const CountryData = (await Response.data[1]) || [];
      const dataObject = {
        name: CountryData[0].country.value,
        populationYears: CountryData.map((data) => {
          return {
            year: data.date,
            population: data.value,
          };
        }),
      };
      setCountry(dataObject);
      console.log(dataObject);
    };
    fetchdata();
  }, [code]);
  const clickAction = ({ countryCode }) => {
    setCode(countryCode);
  };
  console.log(CountryData.name);
  return (
    <div>
      <WorldMap
        color="purple"
        title="Top 10 Populous Countries"
        value-suffix="people"
        size="md"
        backgroundColor="lightblue"
        data={data}
        onClickFunction={clickAction}
      />
      {CountryData ? (
        <div>
          <p>{CountryData.name}</p>
          {CountryData.populationYears?.length > 0 ? (
            CountryData.populationYears.map((populationData) => (
              <p key={populationData.year}>
                Year: {populationData.year} - Population:{' '}
                {populationData.population}
              </p>
            ))
          ) : (
            <p>No population data available.</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Worldmap;
