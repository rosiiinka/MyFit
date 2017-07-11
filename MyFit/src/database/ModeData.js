module.exports = {
    createMode: (mode) => {
        return window.fetch('http://localhost:1337/mode/create', {
            method: 'POST',
            body: JSON.stringify(mode),
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    },
    getAll: () => {
        return window.fetch('http://localhost:1337/mode/all', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }
}