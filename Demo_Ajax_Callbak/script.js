const formStation = document.getElementById("formStation");
const mainResult = document.getElementById('main_result');
const stationsResult = document.getElementById('stations_result');
//const formStation = document.querySelector("#formStation");
//const station = document.querySelector("#station");

const request = (url, cbSucces, cbError = null) => {
    if(!cbSucces || typeof(cbSucces) !== "function" || (cbError && typeof(cbSucces) !== "function")) {
            cbError(Error("Bad callback"));
    }

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
        if(xhr.readyState === 4) {

            if(xhr.status === 200) {
                let response
                try {
                    response = JSON.parse(xhr.responseText);
                }
                catch {
                    cbError(Error("Error on parse JSON"));
                }
                cbSucces(response);
            }
            else {
                cbError(Error(`Error status : ${xhr.status}`));
            }
        }
    })

    xhr.open("GET", url, true);
    xhr.send()
}

const BASE_URL = "https://api.irail.be/liveboard/?station=__city__&format=json&lang=fr";

formStation.addEventListener("submit", (event) => {
    console.log("Action par default déactivé");
    event.preventDefault();
})

formStation.addEventListener("submit", (event) => {
    const stationName = formStation["station"].value;

    const url = BASE_URL.replace('__city__', stationName);
    request(url, (response) => {
        console.log(response);
        afficherResultat(response);
    }, (error) => {
        console.error(error);
        afficherErreur(error);
    })

    console.log(`Requete pour ${stationName} envoyé`);
    formStation["station"].value = "";
    afficherRecherche();
})

const afficherResultat = (response) => {
    mainResult.innerText = `La gare de ${response.station}`;

    const departures = response.departures.departure.slice(0, 10).map(d => {
        return {
            station: d.station, 
            time: new Date(d.time * 1000), 
            platform: d.platform,
            delay: d.delay
        }
    });

    for(const d of departures) {
        const timeFormat = d.time.toLocaleTimeString('fr-BE');
        const late = d.delay > 0 ? `(+${d.delay / 60})` : '';
        
        const elem = document.createElement('li');
        elem.innerText = `${d.station} [${d.platform}] - ${timeFormat} ${late}`;
        stationsResult.appendChild(elem);
    }
} 

const afficherErreur = (e) => {
    mainResult.innerText = `Une erreur s'est produite !`;
}

const afficherRecherche = () => {
    mainResult.innerText = `Recherche en cours ...`;
    while(stationsResult.firstElementChild) {
        stationsResult.removeChild(stationsResult.firstElementChild);
    }
}
