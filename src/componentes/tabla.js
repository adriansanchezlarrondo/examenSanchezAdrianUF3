// import { comandas } from "../main"

import { actualizarTotalPrecio, comandas } from "./form"

export const tabla =  {
    template:  //html
    `
    <div class="card pt-5 m-5 shadow border-0 ">
        <div class="p-5">
            <h3 class="">Selecciona tu cerveza y haz tu pedido</h3>
            <table id="tablaPedidos" class="container table table-bordered">
                <thead>
                    <tr>
                        <th>Cerveza</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="tbodyCervezas">

                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2">Total:</td>
                        <td id="totalPrecio" colspan="3">0</td>
                    </tr>
                </tfoot>
            </table>

        </div>
    </div>
    `,
    script : ()=>{
        document.querySelector('#tablaPedidos').addEventListener('click', (e) => {

            console.log('Hola desde TablaPedidos')
            
            if(e.target.id == 'btnEdit'){
              console.log('editar', e.target.id)
              Editar(e)
            }

            if(e.target.id == 'btnEliminar'){
              console.log('borrar', e.target.id)
              Eliminar(e)
            }
    
        })

        function Eliminar(e) {

            const fila = e.target.closest('tr')
            const idPedido = parseInt(fila.dataset.pedido)

            // Crear un nuevo array sin la comanda que se desea eliminar
            const comandasFiltradas = comandas.filter(pedido => pedido.id !== idPedido);
            console.log('comandasFiltradas', comandasFiltradas);
            // Actualizar el array comandas con el nuevo array filtrado
            comandas.length = 0;
            comandas.push(...comandasFiltradas);
            console.log('comandas', comandas)
            // Eliminar la fila de la tabla
            fila.remove();
            
            actualizarTotalPrecio(comandasFiltradas.precioTotal)
        }

        function Editar(e) {

            const fila = e.target.closest('tr')
            const comandaId = parseInt(fila.dataset.comandaid)

            // Crear un nuevo array sin la comanda que se desea eliminar
            const comandasFiltradas = comandas.filter(comanda => comanda.id !== comandaId);
            
            // Actualizar el array comandas con el nuevo array filtrado
            comandas.length = 0;
            comandas.push(...comandasFiltradas);
            console.log(comandas)
            // Eliminar la fila de la tabla
            fila.remove();
            
            actualizarTotalPrecio()
        }

    }
}
