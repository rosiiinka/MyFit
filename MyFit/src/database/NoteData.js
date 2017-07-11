module.exports = {
    add: (note) => {
        return window.fetch('http://localhost:1337/notes/add', {
            method: 'POST',
            body: JSON.stringify(note),
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    },
    getAll: () => {
        return window.fetch('http://localhost:1337/notes/all', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }
}
