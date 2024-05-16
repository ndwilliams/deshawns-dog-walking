import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
	// first argument -  what kind of event are we listening for
	// ANY click that occurs in the document
	"click",

	// second argument - function that is invoked when click(event) occurs
	// when click occurs/inner function is invoked, the browser passes that click as an argument for the inner function of higher order function
	(theClickEvent) => {
		// capture what was clicked on based on the target of the event
		const whatWasClickedOn = theClickEvent.target

		// conditional to limit window alert to only if data type that was clicked is 'walker'
		if (whatWasClickedOn.dataset.type === "walker") {
			window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)
		}
	}
)

export const Walkers = () => {
	let walkerHTML = "<ul>"

	for (const walker of walkers) {
		// Adding state to HTML or data stored in the HTML (Document Object Model)
		// HTML data attributes using `data-{name of state variable}`
		// Access id property of individual walker
		// Can access state and use state with JavaScript when inner activity on list item occurs(user takes the mouse and clicks/event listener)
		walkerHTML += `<li 
						data-id='${walker.id}'
						data-city='${walker.city}'
						data-type='walker'
						>${walker.name}</li>`
	}

	walkerHTML += "</ul>"

	return walkerHTML
}
