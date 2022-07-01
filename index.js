const classSelector = document.getElementById('class-select')

let request = async() => {
    let req = await fetch('https://www.dnd5eapi.co/api/classes')
    let res = await req.json()
    res.results.forEach((char) => {
        console.log('Class:', char.name)
        let option = document.createElement('option')
        option.setAttribute('value', char.name)
        option.textContent = char.name
        classSelector.append(option)
    })
}

request();