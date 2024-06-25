async function getData() {

    const sp = new URLSearchParams(window.location.search);
    const id = sp.get('id');

    // Specify the API endpoint for user data
    const apiUrl = 'https://swapi2.azurewebsites.net/api/films/${id}';
    const apiUrl3 = 'https://swapi2.azurewebsites.net/api/films/${id}/characters';
    const apiUrl4 = 'https://swapi2.azurewebsites.net/api/films/${id}/planets';


    // Make a GET request using the Fetch API
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
            }
        return response.json();
    })
    .catch(error => {
        console.error('Error:', error);
    });


}