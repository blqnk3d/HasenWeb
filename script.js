


let json = {
    "left":{
        "0":0,
        "1":0,
        "2":0,
        "3":0,
        "4":0,
        "5":0,
        "6":0,
        "7":0
    },
    "right":{
        "10":0,
        "11":0,
        "12":0,
        "13":0,
        "14":0,
        "15":0,
        "16":0,
        "17":0,
        "18":0,
        "19":0
    }
}
console.log(localStorage.length)
if(localStorage.length == 0)
localStorage.data = JSON.stringify(json)

window.onload = function () {
    json = JSON.parse(localStorage.data)

    for (const key in json) {
        console.log(key)
        for (const index in json[key]) {
            if(document.getElementById(`${index}`) != null){

                document.getElementById(`${index}`).innerHTML = "Hasen : "+json[key][index]
            }
        }
    }
}

function update() {
    for (const key in json) {
        console.log(key)
        for (const index in json[key]) {
            if(document.getElementById(`${index}`) != null){

                document.getElementById(`${index}`).innerHTML = "Hasen : "+json[key][index]
            }
        }
    }
}

function run(){
    for (const key in json) {
        console.log(key)
        for (const index in json[key]) {
            if(index === document.getElementById("theid").value){

                json[key][index] = document.getElementById("value").value
            }
        }
    }
    update()
}
window.onunload = function () {
    localStorage.data = JSON.stringify(json)
}


