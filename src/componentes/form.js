import { cervezas } from "../bd";

export const form =  {
    template:  //html
    `
    <div class="card pt-5 m-5 shadow border-0 ">
        <div class="p-5 row">

            <div id="form" class="col-6 mb-5">
                <h3 class="">Selecciona tu cerveza y haz tu pedido</h3>
                <form id="formCerveza">
                    <div class="mb-3">
                        <label for="nombreGrupo">Nombre del Grupo:</label>
                        <input class="form-control" type="text" id="nombreGrupo" name="nombreGrupo" required minlength="4" maxlength="10">
                    </div>
                    <div class="mb-3">
                        <label for="mesa">Número de Mesa:</label>
                        <input class="form-control" type="number" id="mesa" name="mesa" required min="1" max="15">

                        <div class="invalid-feedback">El número de mesa debe estar entre 1 y 15.</div>
                    </div>
                    <div class="mb-3">
                        <label for="cerveza">Selecciona una cerveza:</label>
                        <select class="form-control" id="cerveza" name="cerveza">
                            <option value="">Selecciona una opción</option>
                        </select>

                        <div class="invalid-feedback">Selecciona una cerveza.</div>
                    </div>
                    <div class="mb-3">
                        <label for="cantidad">Cantidad de cervezas consumidas:</label>
                        <input type="number" id="cantidad" name="cantidad" class="form-control" required min="1">

                        <div class="invalid-feedback">La cantidad de cervezas debe ser mayor que 0.</div>
                    </div>
                    <button class="btn btn-success form-control" type="button" id="btnAñadir">Añadir Pedido</button>
                </form>
            </div>

            <div id="card" class="col-6 p-4">
                <h3 class="mb-3" id="cardNombre"></h3>
                <p class="mb-3" ><strong>Tipo:</strong> <span id="cardTipo"></span></p>
                <p class="mb-3" ><strong>Origen:</strong> <span id="cardOrigen"></span></p>
                <p class="mb-3" ><strong>Precio:</strong> <span id="cardPrecio"></span></p>
                <p class="mb-3" ><strong>Descripción:</strong> <span id="cardDescripcion"></span></p>
                <div class="d-flex justify-content-center align-items-center" style="width: 200px; height: 200px;">
                    <img id="cardImagen" src="" alt="Imagen de la cerveza" style="max-width: 90%; max-height: 90%;">
                </div>
            </div>

        </div>
    </div>
    `,
    script : ()=>{
        const selectCerveza = document.querySelector('#cerveza')

        cervezas.forEach(item => {
            const option = document.createElement('option')
            option.text = item.nombre
            option.value = item.id
            selectCerveza.appendChild(option)
        });

        selectCerveza.addEventListener('change', () => {
            const imgSelectValue = cervezas.find(cerveza => cerveza.id == selectCerveza.value)

            if (imgSelectValue) {
                document.querySelector('#cardNombre').innerHTML = imgSelectValue.nombre
                document.querySelector('#cardTipo').innerHTML = imgSelectValue.tipo
                document.querySelector('#cardOrigen').innerHTML = imgSelectValue.origen
                document.querySelector('#cardPrecio').innerHTML = imgSelectValue.precio
                document.querySelector('#cardDescripcion').innerHTML = imgSelectValue.descripcion
                document.querySelector('#cardImagen').src = imgSelectValue.imagen
            }
        })

        let siguienteIdComanda = 1

        document.querySelector('#btnAñadir').addEventListener('click', (e) => {
            e.preventDefault()

            const cantidad = document.querySelector('#cantidad').value
            const nombre = selectCerveza.options[selectCerveza.selectedIndex].text

            const cervezaSeleccionada = cervezas.find(cerveza => cerveza.nombre == nombre)
            
            if (cervezaSeleccionada){
                let precioTotal = cantidad * cervezaSeleccionada.precio

                comandas.push({
                    id: siguienteIdComanda++,
                    nombre: nombre,
                    cantidad: cantidad,
                    precioTotal: precioTotal
                })

                const idPedido = siguienteIdComanda - 1

                document.querySelector('#tbodyCervezas').innerHTML += `
                <tr data-pedido="${idPedido}" class="cerveza">
                    <td>${nombre}</td>
                    <td>${cantidad}</td>
                    <td>${precioTotal}€</td>
                    <td class="text-center">
                        <button id="btnEliminar" class="btn btn-danger text-light btnEliminar" type="button">Eliminar</button>
                    </td>
                    <td class="text-center">
                        <button id="btnEdit" class="btn btn-warning text-light btnEditar" type="button">Editar</button>
                    </td>
                </tr>
                `

                actualizarTotalPrecio(0)
            }

        })
    }
}

export let comandas = []

export function actualizarTotalPrecio(precio) {
    console.log('precio', precio);
    comandas.forEach(comanda => {
        precio += comanda.precioTotal;
    });
    document.querySelector('#totalPrecio').textContent = precio + "€";
}
