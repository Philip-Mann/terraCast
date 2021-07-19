# Welcome to TerraCast!
A Weather App built with React utilizing Bootstrap and the OpenWeatherAPI.

# Want to run on your computer?
`git clone `


Using hooks, and `{ useEffect }`, I fetched the weather data from OpenWeather API and rendered it to the DOM using `{ useState }`.

The most challenging part for myself was passing the state of my input into my `<Current />` component. With this being my first React project I found myself having to think about how websites are created differently. 
```
<form onSubmit={handleSubmit} className="form">
    <input id="query" onChange={handleChange} placeholder="Search By City..." type="text" value={query} />
    <button className="btn-dark btn-sm" type="submit">Search</button>
</form>
```

I figured out, using hooks, that passing the value of my input as a prop `value={query}` into my Current componenet was as easy as: 
```
const [query, setQuery] = useState('');
const [locationQuery, setLocationQuery] = useState('Washington DC');


const handleChange = e => {
    setQuery(e.target.value);
}

const handleSubmit = e => {
    e.preventDefault();
    setLocationQuery(query);
    setQuery('');
}

return (
    <Current 
        locationQuery={locationQuery}
    />
)
```

From there I was able to add `{locationQuery}` to my API call to get the current weather forecast for any place the user types in.