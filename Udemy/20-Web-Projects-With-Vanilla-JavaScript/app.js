const grid = document.getElementById('grid')


const projects = [
  {
    name: "Form Validator",
    type: 'dom',
    path: './form-validator/index.html'
  },
  {
    name: "Movie Seat",
    type: 'dom',
    path: './movie-seat-booking/index.html'
  }

]
function addCards(){

  projects.forEach((project, idx) => {
    let number;
    if(idx <= 9){
      number = '0' + ++idx;
    }else{
      number = ++idx
    }

    const card = document.createElement('div')
    card.className = 'card';
    card.classList.add(`${project.type}`);
    card.innerHTML = `
          <h1 class="number"></h1>
          <p class="type"></p>
          <h1 class="name"></h1>
    `

        // Project number[0] name[1] 
    const cardHead = card.querySelectorAll('h1')
    cardHead[0].classList.add(`${project.type}`)
    cardHead[0].innerText = `${number}`

    cardHead[1].innerText = `${project.name}`

    // Project type
    const cardPara = card.querySelector('p')
    cardPara.classList.add(`${project.type}`)
    cardPara.innerText = `${project.type.toUpperCase()}`

    grid.appendChild(card)

    card.addEventListener('click', () => {
      window.location.href = `${project.path}`
    })



  })

  
}

addCards()


// db.person.aggregate(
//   [
//     {
//       id: 1,
//       firstName: "Ahmed ",
//       lastName: "Elmoslmany",
//       fullName: {
//         $add: [ "$firstName", "$lastName"]
//       }
//     }
// ])


// db.person.findOne({firstName: "Ahmed"})
// /*
// Result:
// [
//   { "id" : 1, "firstName" : "Ahmed" , "lastName" : "Elmoslmany",
//     "fullName" : "Ahmed Elmoslmany" }
  
  
//   ,
//   { 
//     "id" : 2, "firstName" : "Ahmed" , "lastName" : "Refaey",
//     "fullName" : "Ahmed Refaey"
//   },
// ]
// */


// [
//   { 
//     "id" : 1, "firstName" : "Ahmed" , "lastName" : "Elmoslmany",
//     "fullName" : "Ahmed Elmoslmany"
//   },

//   { 
//     "id" : 2, "firstName" : "Ahmed" , "lastName" : "Refaey",
//     "fullName" : "Ahmed Refaey"
//   },

//   { 
//     "id" : 3, "firstName" : "AbdelRahman" , "lastName" : "El-Shiekh",
//     "fullName" : "AbdelRahman El-Shiekh"
//   },
// ]



// db.person.update(
//   {"lastName": "Elmoslmany"},
//   {$set: {"lastName": "Samy"}}
// )

// /*
// Result:
// [
//   { "id" : 1, "firstName" : "Ahmed" , "lastName" : "Samy",
//     "fullName" : "Ahmed Elmoslmany" },

//   { "id" : 2, "firstName" : "Ahmed" , "lastName" : "Refaey",
//     "fullName" : "Ahmed Refaey"},
// ]
// */


// db.person.deleteMany({firstName : "Ahmed"})

// /*
// Result: []
// */

