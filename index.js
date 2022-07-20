class Cliente {
    constructor(nombre, apellido, edad, domicilio, codigoPostal, ciudad, pais, estadoCivil) {
        this.nombre = nombre
            this.apellido = apellido
            this.edad = edad
            this.domicilio = domicilio
            this.codigoPostal = codigoPostal
            this.ciudad = ciudad
            this.pais = pais
            this.estadoCivil = estadoCivil
    }

   mostrandoCliente () {
    console.log (`${this.nombre}, ${this.apellido}, ${this.edad}, ${this.domicilio}`)
}  
}

const cliente1 = new Cliente ("Raul", "Davila", 28, "Lobos1254", 4547, "caracas", "Venezuela", "Viudo" )
const cliente2 = new Cliente("Juan" , "Suarez", 23, "Belgrano 224", "4000", "tucuman", "argentina" , "soltero")
const cliente3 = new Cliente ("Juan", "Sánchez", 19, "Rosales", 231, "Caballito", "Argentina", "Casado")
const cliente4 = new Cliente ("maria", "Pereyra",26, "bucardo 142", 5221, "cordoba", "argentina", "casada")
const cliente5 = new Cliente ("Emilio", "Ansaldi", 35, "Córdoba 1234", "Santa Fe", "Argentina", "Casado")

const carteraDeClientes = []

carteraDeClientes.push(cliente1, cliente2, cliente3, cliente4, cliente5)

const clientesMayoresDeVeinticinco = carteraDeClientes.filter((elemento) => {
    return elemento.edad > 25
})

console.log(clientesMayoresDeVeinticinco)

