    const apiUrl = 'https://goldberries.net/api/player/stats'
    const id = 1784

fetch(apiUrl + "?id=" + id)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json();
        })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
    })