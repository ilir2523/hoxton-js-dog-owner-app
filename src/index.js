console.log(dogData);

// WRITE YOUR CODE BELOW!

function deselectAllNav() {
    const dogNavli = document.querySelector('.dogs-list__button.selected')
    if (dogNavli) dogNavli.classList.remove('selected')
  }

//   function isGoodYesNo(dogData) {
//     if (dogData.isGoodDog) return " No"
//     return " Yes"
    
//   }

//   function isGoodBtn(dogData) {
//     if (isGoodYesNo(dogData) === " No") return "Bad Dog"
//     return "Good Dog"
//   }

function toggleGoodDog(dog) {
    dog.isGoodDog = !dog.isGoodDog
    createDogProfile(dog) 
}

function createDogProfile(dogData) {
    const dogSection = document.querySelector('.main__dog-section')
    dogSection.innerHTML = ''

    const nameEl = document.createElement("h2")
    nameEl.textContent = dogData.name

    const dogImageEl = document.createElement("img")
    dogImageEl.setAttribute("src", dogData.image)
    dogImageEl.setAttribute("alt", "dog-image")

    const dogDivEl = document.createElement("div")
    dogDivEl.setAttribute("class", "main__dog-section__desc")
    
    const bioEl = document.createElement("h3")
    bioEl.textContent = "Bio"

    const bioTextEl = document.createElement("p")
    bioTextEl.textContent = dogData.bio

    const howItIsEl = document.createElement("p")
    // const isNaughty = document.createElement("em")
    // isNaughty.textContent = "Is naughty?"
    // howItIsEl.prepend(isNaughty, isGoodYesNo(dogData))

    const isNaughty = document.createElement("em")
    isNaughty.textContent = "Is naughty?"
    howItIsEl.prepend(isNaughty, dogData.isGoodDog ? " No" : " Yes")

    // howItIsEl.textContent = isGoodYesNo(dogData)

    const btnEl = document.createElement("button")
    btnEl.textContent = dogData.isGoodDog ? " Bad Dog" : " Good Dog"
    

    btnEl.addEventListener("click", function () {
        toggleGoodDog(dogData)
    })

    dogSection.append(nameEl, dogImageEl, dogDivEl, howItIsEl, btnEl)
    dogDivEl.append(bioEl, bioTextEl)
}


function createDogNav(dogData) {
    const dogliEl = document.createElement("li")
    dogliEl.setAttribute("class", "dogs-list__button")
    dogliEl.textContent = dogData.name

    dogliEl.addEventListener('click', function () {
    createDogProfile(dogData)

    deselectAllNav()

    dogliEl.classList.add('selected')
    })

    document.querySelector('.dogs-list').append(dogliEl)

}

for (item of dogData) {
    createDogNav(item)
}
