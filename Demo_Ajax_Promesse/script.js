const request = (url) => {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", (e) => {
            if(xhr.readyState === 4) {
    
                if(xhr.status === 200) {
                    let response
                    try {
                        response = JSON.parse(xhr.responseText);
                    }
                    catch {
                       reject(Error("Error on parse JSON"));
                    }
                    resolve(response);
                }
                else {
                    reject(Error(`Error status : ${xhr.status}`));
                }
            }
        })

        xhr.addEventListener("error", () => reject(Error(`Error status : ${xhr.status}`)))
    
        xhr.open("GET", url, true);
        xhr.send()
    });
}

const btnDemo = document.getElementById('demo');
btnDemo.addEventListener('click', () => {
    const url = "https://api.irail.be/liveboard/?station=ciney&format=json&lang=fr";

    request(url).then((data) => {
        console.log(data);
    }).catch(e => {
        console.error(e);
    });
})