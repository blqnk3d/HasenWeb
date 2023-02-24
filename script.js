let json = {
    "left": {
        "0": {
            "name": "test",
            "anzahl": "",
            "zugelassen": ""
        },
        "1": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "2": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "3": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "4": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "5": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "6": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "7": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        }
    },
    "right": {
        "10": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "11": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "12": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "13": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "14": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "15": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "16": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "17": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "18": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        },
        "19": {
            "name": "",
            "anzahl": "",
            "zugelassen": ""
        }
    }
}



window.onload = function () {

    json = JSON.parse(localStorage.data)
    console.log(json)
    for (let i = 0; i < 7; i++) {
        let button = document.getElementById(i.toString())
        let name = json["left"][i.toString()]["name"]
        let anzahl = json["left"][i.toString()]["anzahl"]
        let zugelassen = json["left"][i.toString()]["zugelassen"]
        button.innerHTML = "Name: " + name + "<br>\nAnzahl: " + anzahl + "<br>\nWann zugelassen: " + zugelassen
    }

    for (let i = 10; i < 20; i++) {
        let button = document.getElementById(i.toString())
        let name = json["right"][i.toString()]["name"]
        let anzahl = json["right"][i.toString()]["anzahl"]
        let zugelassen = json["right"][i.toString()]["zugelassen"]
        button.innerHTML = "Name: " + name + "<br>\nAnzahl: " + anzahl + "<br>\nWann zugelassen: " + zugelassen
    }
    localStorage.data = JSON.stringify(json)
}

function update() {
    for (let i = 0; i < 7; i++) {

    }
}


function run() {
    for (const key in json) {
        console.log(key)
        for (const index in json[key]) {
            if (index === document.getElementById("theid").value) {

                json[key][index] = document.getElementById("value").value
            }
        }
    }
}

window.onunload = function () {
    localStorage.data = JSON.stringify(json)
}

function popup(button) {
    let name = prompt("Name des Hasen: ")
    let anzahl = prompt("Die Hasen anzahl :")
    let zugelassen = prompt("Wann wurde der hase zugelassen: ")
    button.innerHTML = "Name: " + name + "<br>\nAnzahl: " + anzahl + "<br>\nWann zugelassen: " + zugelassen
    if (button.parentNode.id == "left" ){
    json ["left"][button.id] = {
        "name": name,
        "anzahl": anzahl,
        "zugelassen": zugelassen
    }
    }else {
        json ["right"][button.id] = {
            "name": name,
            "anzahl": anzahl,
            "zugelassen": zugelassen
        }
    }
    console.log(json)
}

function textInput(button) {
    let textInput = prompt("Wann wurde der hase zugelassen: ")
    button.innerHTML = button.id + ": " + textInput
}