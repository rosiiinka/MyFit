module.exports = {
    add: (product) => {
        return window.fetch('http://localhost:1337/products/add', {
            method: 'POST',
            body: JSON.stringify(product),
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }
}
