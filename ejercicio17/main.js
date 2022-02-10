// class Cliente {
//   constructor(nombre, direccion, telefono, nif) {
//     this.nombre = nombre;
//     this.direccion = direccion;
//     this.telefono = telefono;
//     this.nif = nif;
//   }
// }

// class Elemento {
//   constructor(descripcion, cantidad, precio) {
//     this.descripcion = descripcion;
//     this.cantidad = cantidad;
//     this.precio = precio;
//   }
// }

// class Factura {
//   constructor(cliente, elementos) {
//     this.cliente = cliente;
//     this.elementos = elementos;
//     this.informacion = {
//       baseImponible: 0,
//       iva: 21,
//       total:0,
//       formaPago: "contado"
//     };

//     this.calculaTotal = () => {
//       for (var i = 0; i <this.elementos.length; i++) {
//         this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
//       }
//       this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
//     }

//     this.muestraTotal = function () {
//       this.calculaTotal();
//       alert("total = " + this.informacion.total + " euros");
//     }
//   };
// }

// var elCliente = new Cliente("Cliente 1", "", "", "");
// var losElementos = [new Elemento("elemento1", "1", "5"), new Elemento("elemento2", "2", "12")];
// var laFactura = new Factura(elCliente, losElementos);
// laFactura.muestraTotal();


class Cliente {
  constructor(nombre, direc, tlf, nif){
    this.name = nombre;
    this.address = direc;
    this.phone = tlf;
    this.id = nif;
  }
};

class Elemento {
  constructor(descript, cantidad, precio){
    this.descrip = descript;
    this.quantity = cantidad;
    this.price = precio;
  }
};

class Factura {
  constructor(cliente, elementos) {
    this.client = cliente;
    this.elements = elementos;
    this.info = {
      baseImponible: 0,
      iva: 21,
      metodo: "contado",
      total: 0
    }

    this.totalPrice = function(){
      // Base imponible = precio * cantidad
      for(let i = 0; i < this.elements.length; i++){
        this.info.baseImponible += this.elements[i].quantity * this.elements[i].price;
      }
      console.log('base imponible', this.info.baseImponible);
      // total = baseimponible * (1 + (iva/100))
      this.info.total = this.info.baseImponible * (1+(this.info.iva/100));
      console.log(`El total es de  ${this.info.total}`);
    }
  }
};

const cliente1 = new Cliente('Pepe', 'Pinto', 123, '520');
const art1 = new Elemento('boli', 5, 1);
const art2 = new Elemento('lapiz', 1, 2);


const bill = new Factura(cliente1, [art1, art2]);