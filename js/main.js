let elList = document.querySelector('.list')
let elSelect1 = document.querySelector('#select1')
let elSelect2 = document.querySelector('#select2')
let elSelect3 = document.querySelector('#select3')
let elSelect4 = document.querySelector('#select4')
let newArr = []
let newArr2 = []
let newArr3 = []
let newArr4 = []
const allFilm = movies.slice(0,100)
mapper(allFilm)

function mapper(params) {
    elList.innerHTML = ""
    params.forEach((e, i)=>{
        let newLi = document.createElement('li')
        if(newArr.includes(e.Categories) != true){
            newArr.push(e.Categories)
        }
        if(newArr2.includes(e.movie_year) != true){
            newArr2.push(e.movie_year)
        }
        if(newArr3.includes(e.imdb_rating) != true){
            newArr3.push(e.imdb_rating)
        }
        if(newArr4.includes(e.language) != true){
            newArr4.push(e.language)
        }
        newLi.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="https://img.youtube.com/vi/${e.ytid}/default.jpg
        " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${e.Title}</h5>
          <p>${e.Categories}</p>
          <p>${e.movie_year}</p>
          <p>${e.imdb_rating}</p>
          <p>${e.language}</p>
          <a href="https://www.youtube.com/watch?v=${e.ytid}" class="btn btn-primary">Watch Film</a>
        </div>
      </div>`
      elList.appendChild(newLi)
    })
}


newArr.map((e,i)=>{
    let newOption = document.createElement('option')
    newOption.text = e
    elSelect1.appendChild(newOption)
})

elSelect1.addEventListener('change', (e) => {
    let value = e.target.value
    const categoryFilm = allFilm.filter((e)=> e.Categories == value)
    mapper(categoryFilm)
})

newArr2.map((e,i)=>{
    let newOption = document.createElement('option')
    newOption.text = e
    elSelect2.appendChild(newOption)
})

elSelect2.addEventListener('change', (e) => {
    let value = e.target.value
    const categoryFilm = allFilm.filter((e)=> e.movie_year == value)
    mapper(categoryFilm)
})

newArr3.map((e,i)=>{
    let newOption = document.createElement('option')
    newOption.text = e
    elSelect3.appendChild(newOption)
})

elSelect3.addEventListener('change', (e) => {
    let value = e.target.value
    const categoryFilm = allFilm.filter((e)=> e.imdb_rating == value)
    mapper(categoryFilm)
})

newArr4.map((e,i)=>{
    let newOption = document.createElement('option')
    newOption.text = e
    elSelect4.appendChild(newOption)
})

elSelect4.addEventListener('change', (e) => {
    let value = e.target.value
    const categoryFilm = allFilm.filter((e)=> e.language == value)
    mapper(categoryFilm)
})