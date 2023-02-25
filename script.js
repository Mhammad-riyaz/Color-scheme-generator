const url = "https://www.thecolorapi.com/scheme"

document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault()
    const colorHex = document.querySelector("input").value.replace("#","")
    const mode = document.querySelector("select").value
    let colorArray = []
    fetch(url+`?hex=${colorHex}&mode=${mode}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data.colors)
        colorArray = data.colors.map(function(item){
            return {
                image: item.image.bare,
                hex:item.hex.value
            }
        })
        render(colorArray)
    })  
})

function render(colorArray){
    const html  = colorArray.map(function(item){
        return `<div class="color" >
        <img class="img-height" src="${item.image}">
        <p>${item.hex}</p>
        </div>`
    })

    let htmlString= ""
    html.forEach(function(item){
        htmlString += item
    })

    document.querySelector(".palette").innerHTML = htmlString
}