import { memo } from 'react';

function Filter({ clubName, onChangeName, onReset, cities, city, onChangeCity }) {
    console.log("Filter render");
    return (
        <div className="filter">
            <input
                value={clubName}
                onChange={(event) => onChangeName(event.target.value)}
                placeholder="Поиск клуба"
            />

            <select value={city} onChange={(event) => onChangeCity(event.target.value)}>
                <option value="">Все города</option>
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>

            <button onClick={onReset}>
                Сбросить
            </button>
        </div>
    );
}

export default memo(Filter);