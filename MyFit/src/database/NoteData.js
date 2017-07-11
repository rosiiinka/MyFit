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
    getAllByUserId: (id) => {
        let user = {
            id
        }
        return window.fetch('http://localhost:1337/notes/all', {
            method: 'POST',
            body: JSON.stringify(user),
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }
}
