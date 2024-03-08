import { bd } from "../bd";

export const form =  {
    template:  //html
    `
    <h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
    <div class="row">
        
        <div class="col-6">
            <h3>Grupo</h3>
            <label for="nombreGrupo" class="label-control">Nombre del grupo:</label>
            <input type="text" class="form-control mt-2" placeholder ="Borrachos de DAW2">
            <label for="numeroMesa" class="label-control">Mesa numero</label>
            <input type="number" class="form-control mt-2" placeholder ="0">
            
            <h3 class="mt-5">Haz tu pedido</h3>
            <div class="d-flex gap-3 ">
                <select name="cervezas" id="cervezas" class="form-control">
                    <option value="">Selecciona qué birra quieres</option>
                </select>
            
                <input type="number" value="0" class="form-control">
            </div>
            <button class="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
        </div>
        <div class="col-6 border ">
            <div class="p-3 d-flex">
                <div class="w-50">
                    <img id="imagen" src="" alt="" class="w-100" style="max-width: 90%; max-height: 90%;">
                </div>
                <div>
                    <h4 id="nombre" class="">Estrella Galicia</h4>
                    <p id="descripcion">Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.</p>
                </div>
            </div>
        </div>
    </div>
    `,
    script : ()=>{
        const selectCerveza = document.querySelector('#cervezas')

        bd.forEach(item => {
            const option = document.createElement('option')
            option.text = item.nombre
            option.value = item.id
            selectCerveza.appendChild(option)
        });

        selectCerveza.addEventListener('change', () => {
            const imgSelectValue = bd.find(cerveza => cerveza.id == selectCerveza.value)

            if (imgSelectValue) {
                document.querySelector('#nombre').innerHTML = imgSelectValue.nombre
                document.querySelector('#descripcion').innerHTML = imgSelectValue.descripcion
                document.querySelector('#imagen').src = imgSelectValue.imagen
            }
        })

        // let siguienteIdComanda = 1

        // document.querySelector('#btnAñadir').addEventListener('click', (e) => {
        //     e.preventDefault()

        //     const cantidad = document.querySelector('#cantidad').value
        //     const nombre = selectCerveza.options[selectCerveza.selectedIndex].text

        //     const cervezaSeleccionada = bd.find(cerveza => cerveza.nombre == nombre)
            
        //     if (cervezaSeleccionada){
        //         let precioTotal = cantidad * cervezaSeleccionada.precio

        //         comandas.push({
        //             id: siguienteIdComanda++,
        //             nombre: nombre,
        //             cantidad: cantidad,
        //             precioTotal: precioTotal
        //         })

        //         const idPedido = siguienteIdComanda - 1

        //         document.querySelector('#tbodyCervezas').innerHTML += `
        //         <tr data-pedido="${idPedido}" class="cerveza">
        //             <td>${nombre}</td>
        //             <td>${cantidad}</td>
        //             <td>${precioTotal}€</td>
        //             <td class="text-center">
        //                 <button id="btnEliminar" class="btn btn-danger text-light btnEliminar" type="button">Eliminar</button>
        //             </td>
        //             <td class="text-center">
        //                 <button id="btnEdit" class="btn btn-warning text-light btnEditar" type="button">Editar</button>
        //             </td>
        //         </tr>
        //         `

        //         actualizarTotalPrecio(0)
        //     }

        // })
    }
}

// export let comandas = []

// export function actualizarTotalPrecio(precio) {
//     console.log('precio', precio);
//     comandas.forEach(comanda => {
//         precio += comanda.precioTotal;
//     });
//     document.querySelector('#totalPrecio').textContent = precio + "€";
// }
