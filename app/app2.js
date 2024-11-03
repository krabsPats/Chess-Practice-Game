// Set an interval to make a request every 5 seconds
setInterval(() => {
    fetch('http://localhost:4000/api/data-from-b', {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Received data from Application B:', JSON.stringify(data.timestamp));
    })
    .catch(error => console.error('Error:', error));
}, 5000); // 5000ms = 5 seconds
 