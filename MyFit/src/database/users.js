let users = []

module.exports = {
    register: (username, password, firstName, lastName) => {
        new Promise((resolve, reject) => {
            let id = users.length
            let newUser = {
                id,
                username,
                password,
                firstName,
                lastName
            }
            users.push({ newUser })
            resolve(newUser)
        })
    },
    getById: (id) => {
        new Promise((resolve, reject) => {
            let user = users.find(user => user.id == id)
            resolve(user)
            reject(new Error('error'))
        })
    }
}
