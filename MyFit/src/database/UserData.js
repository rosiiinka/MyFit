module.exports = {
    register (user) {
        return window.fetch('http://localhost:1337/users/register', {
            method: 'POST',
            mod: 'cors',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
    },
    getByUsername (username) {
        return window.fetch(`http://localhost:1337/users/${username}`, {
            method: 'GET',
            mod: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
    }
}
