import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener("click", (clickEvent) => {
	const cityTarget = clickEvent.target

	if (cityTarget.dataset.type === "city") {
		window.alert(`${cityTarget.dataset.walkername} is servicing this city`)
	}
})

export const CityList = () => {
	let citiesHTML = "<ol>"

	for (const walker of walkers) {
		citiesHTML += `<li
						data-type='city'
						data-walkername='${walker.name}'
						>${walker.city}</li>`
	}

	citiesHTML += "</ol>"

	return citiesHTML
}

// When we click on a city, want to find out what walker services that city
// Walkers database object has the city as a property - 1 walker per city
