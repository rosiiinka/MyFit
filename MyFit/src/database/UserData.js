module.exports = {
    register: (user) => {
        return window.fetch('http://localhost:1337/users/register', {
            method: 'POST',
            body: JSON.stringify(user),
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    },
    login: (user) => {
        return window.fetch('http://localhost:1337/users/login', {
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
