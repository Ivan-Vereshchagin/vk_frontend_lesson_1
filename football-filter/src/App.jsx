import { useState, useMemo} from 'react'
import { clubs } from './data/clubs'
import List from './components/List'
import Filter from './components/Filter'
import './App.css'

function App() {
	console.log("App render");
	const [clubName, setClubName] = useState("");
	const [city, setCity] = useState("");
	const [count, setCount] = useState(0);

	const filteredClubs = useMemo(() => 
		clubs.filter((club) =>
			club.name.toLowerCase().includes(clubName.toLowerCase()) &&
			(city === "" || city === club.city)
		),
		[clubName, city]
	);

	const cities = [...new Set(clubs.map((club) => club.city))];

	return (
		<>
			<h1>Футбольные клубы</h1>
			<Filter
				clubName={clubName}
				onChangeName={setClubName}
				onReset={() => {
					setClubName("");
					setCity("");
				}}
				cities={cities}
				city={city}
				onChangeCity={setCity}
			/>
			<List clubs={filteredClubs} />
			<button onClick={() => setCount(count + 1)}>
				Нажатий: {count}
			</button>
		</>
		
	);
}

export default App