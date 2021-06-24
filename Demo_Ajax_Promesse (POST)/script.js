const request = (url, data) => {
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
    
        xhr.open("POST", url, true);
        xhr.send(data)
    });
}

