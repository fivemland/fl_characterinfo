window.addEventListener('message', (event) => {
    let data = event.data

    if (data.action == 'showUI') {
        const showUI = document.querySelector('.container')
        showUI.style.display = 'block'
    }

    if (data.action == 'hideUI') {
        const hideUI = document.querySelector('.container')
        hideUI.style.display = 'none'
    }

    if (data.playerCount != undefined) {
        document.getElementById("player-text").innerHTML = data.playerCount;
    }

    if (data.playerName != undefined) {
        document.getElementById("playername").innerHTML = data.playerName;
    }


    if (data.cash != undefined) {
        document.getElementById("mcash").innerHTML = data.cash;
    }


    if (data.bankMoney != undefined) {
        document.getElementById("mbank").innerHTML = data.bankMoney;
    }

    if (data.dob != undefined) {
        document.getElementById("dob").innerHTML = data.dob;
    }

    if (data.job != undefined) {
        document.getElementById("job").innerHTML = data.job + " - " + data.jobgrade;
    }

    if (data.height != undefined) {
        document.getElementById("height").innerHTML = data.height + data.unit;
    }

    if (data.steam_id != undefined) {
        document.getElementById("steam_id").innerHTML = data.steam_id;
    }

    if (data.ServerName != undefined) {
        document.getElementById("ServerNameText").innerHTML = "Server Name";
    }


    if (data.Link != undefined) {
        document.getElementById("Link").innerHTML = "Server Link";
    }

    if (data.sex == "m") {
        document.getElementById("sex").innerHTML = data.Male;
    } else {
        document.getElementById("sex").innerHTML = data.Female;
    }
})

document.addEventListener('keydown', logKey);

function logKey(e) {
    if (e.key == 'Escape') {
        fetch('https://adam_characterinfo/close')

    }
}



