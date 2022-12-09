class AddressClass {
    #country
    #city
    #street

    constructor(address) {
        this.setAddress(address)
    }

    setAddress({ country, city, street }) {
        this.#country = country
        this.#city = city
        this.#street = street
    }

    getAddress() {
        return {
            country: this.#country,
            city: this.#city,
            street: this.#street,
        }
    }
}

class ClientAddress extends AddressClass {
    #client

    constructor(client, address) {
        super(address)
        this.updateClientInfo(client)
    }

    updateClientInfo(client, address) {
        this.#client = client
        address && this.setAddress(address)
    }

    getClientInfo() {
        return {
            client: this.#client,
            address: this.getAddress(),
        }
    }
}

const address = new ClientAddress(
    {
        name: 'Max Grant',
    },
    {
        country: 'Russia',
        city: 'Moscow',
        street: 'Moskovskaya',
    }
)
console.log(address.getClientInfo())

address.updateClientInfo(
    {
        name: 'Bobby Pearson'
    },
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        street: 'Pushkinskaya',
    }
)
console.log(address.getClientInfo())
