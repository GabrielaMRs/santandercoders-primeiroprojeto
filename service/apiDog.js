// busca uma quantidade de imagens de cachorro de acordo com a quantidade passada em amount
async function searchDogs(amount){
    const apiUrl = `https://dog.ceo/api/breed/hound/images/random/${amount}`;
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            return data.message; 
        }
    } catch (error) {
        return [];
    }
}

async function searchAllBreeds() {
    const apiUrl = "https://dog.ceo/api/breeds/list/all";
    try {
        const response = await fetch(apiUrl);
        if(response.ok){
            const data = await response.json();
            return(data.message);
        }
    } catch(error) {
        return null;
    }
}


