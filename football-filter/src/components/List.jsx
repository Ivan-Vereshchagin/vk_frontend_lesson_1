import { memo } from "react";

function List({ clubs }) {
	console.log("List render");
	return (
		<ul>
			{clubs.map((club) => (
				<li key={club.name}>
					<strong>{club.name}</strong> — {club.city}, {club.stadium}, {club.founded}
				</li>
			))}
		</ul>
	);
}

export default memo(List);