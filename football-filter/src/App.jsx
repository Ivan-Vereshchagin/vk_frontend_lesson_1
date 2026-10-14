import { useState, useMemo, useCallback } from 'react'
import { clubs } from './data/clubs'
import List from './components/List'
import Filter from './components/Filter'
import Counter from './components/Counter'
import './App.css'

function App() {
	console.log("App render");
	const [clubName, setClubName] = useState("");
	const [city, setCity] = useState("");

	const filteredClubs = useMemo(() => 
		clubs.filter((club) =>
			club.name.toLowerCase().includes(clubName.toLowerCase()) &&
			(city === "" || city === club.city)
		),
		[clubName, city]
	);

	const cities = useMemo(
		() =>[...new Set(clubs.map((club) => club.city))],
		[]
	);

	const handleReset = useCallback(() => {
		setClubName("");
		setCity("");
	}, []);

	return (
		<>
			<h1>Футбольные клубы</h1>
			<Filter
				clubName={clubName}
				onChangeName={setClubName}
				onReset={handleReset}
				cities={cities}
				city={city}
				onChangeCity={setCity}
			/>
			<List clubs={filteredClubs} />
			<Counter />
		</>
		
	);
}

export default App