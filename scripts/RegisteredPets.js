import { getPets, getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener("click", (clickEvent) => {
	const clickTarget = clickEvent.target

	// get walkerId
	const walkerId = clickTarget.dataset.walkerforeignkey

	// find the walker object based on the walkerId that was located above
	const allWalkers = getWalkers()
	for (const walker of allWalkers) {
		if (walker.id === parseInt(walkerId)) {
			window.alert(`This pet is being walked by ${walker.name}`)
		}
	}
})

export const RegisteredPets = () => {
	let petHTML = "<ul>"

	// want to be able to view who is walking what pet when the pet is clicked on/viewed
	// we know walkerId of the pet, but not the name of the walker
	// need to iterate through walker array and find when walkerId foreign key of pet matches
	// primary key of walker and extract the name from said object

	for (const pet of pets) {
		petHTML += `<li
                    data-walkerForeignKey='${pet.walkerId}'           
                    >${pet.name}</li>`
	}

	petHTML += "</ul>"

	return petHTML
}
