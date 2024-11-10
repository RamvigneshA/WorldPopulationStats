import { useCallback } from 'react';
import WorldMap from 'react-svg-worldmap';
import { useState } from 'react';

function Worldmap() {
  const [state, setState] = useState({ iso: 'gg' });
  const [data, setData] = useState([
    { country: 'cn', value: 10 },
    { country: 'in', value: 9 },
    { country: 'us', value: 8 },
    { country: 'id', value: 7 },
    { country: 'pk', value: 6 },
    { country: 'br', value: 5 },
    { country: 'ng', value: 4 },
    { country: 'bd', value: 3 },
    { country: 'ru', value: 2 },
    { country: 'jp', value: 1 },
    { country: 'mg', value: 11}]);

 
  const clickAction = useCallback(({ countryCode }) => {
    setState({
      iso: countryCode,
    });
    const add = {'country':countryCode,'value':3}
    setData((prev)=>[...prev,add])
    
  }, []);
  return (
    <div>
      <WorldMap
        color="purple"
        title="Top 10 Populous Countries"
        value-suffix="people"
        size="xxl"
        data={data}
        onClickFunction={clickAction}
      />
       <div>
       
        ISO :{state.iso}
        
      </div>
    </div>
  );
}

export default Worldmap;
