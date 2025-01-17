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
        document.getElementById("hardList").innerHTML = data.count_total_hard_list
        document.getElementById("standardList").innerHTML = data.count_total_standard_list
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("hardList").innerHTML = "Error loading"
        document.getElementById("standardList").innerHTML = "Error Loading"
    })