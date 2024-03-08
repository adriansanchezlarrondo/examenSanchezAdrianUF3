let pedidos = []

export const tabla =  {
    template:  //html
    `
    <div class="row">
        <h1 class="text-center mb-5 ">----- Vista camareros -----</h1>
        <h3>Pedidos</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Grupo</th>
                    <th>Mesa</th>
                    <th>Cerveza</th>
                    <th>Cantidad</th>
                    <th>Estado</th>
                </tr>        
            </thead>
            <tbody id="tbodyPedidos"></tbody>
        </table>
    </div>
    `,
    script : ()=>{
        document.querySelector('#btnAñadir').addEventListener('click', (e) => {
            e.preventDefault()

            const nombreGrupo = document.querySelector('#nombreGrupo').value
            const numeroMesa = document.querySelector('#numeroMesa').value
            const nombreCerveza = document.querySelector('#cervezas').options[document.querySelector('#cervezas').selectedIndex].text
            const cantidad = document.querySelector('#cantidad').value
            
            pedidos.push({
                id: pedidos.length + 1,
                numeroMesa: numeroMesa,
                nombreGrupo: nombreGrupo,
                cerveza: nombreCerveza,
                cantidad: cantidad,
                estado: 'pendiente'
            })
            console.log(pedidos)

            const ultimoPedido = pedidos[pedidos.length - 1]
            // console.log('ultimoPedido', ultimoPedido);

            document.querySelector('#tbodyPedidos').innerHTML += `
            <tr data-pedido="${ultimoPedido.id}" class="pedido">
                <td>${ultimoPedido.nombreGrupo}</td>
                <td>${ultimoPedido.numeroMesa}</td>
                <td>${ultimoPedido.cerveza}</td>
                <td>${ultimoPedido.cantidad}</td>
                <td>
                    <div class="d-flex gap-2">
                        <button id="btnPendiente" class="btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>
                        <button id="btnEliminar" class="btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
                    </div>
                </td>
            </tr>
            `                
        })


        document.querySelector('#tbodyPedidos').addEventListener('click', (e) => {
            
            if(e.target.id == 'btnPendiente'){
                const botonPendiente = e.target

                botonPendiente.classList.remove('btn-outline-warning')
                botonPendiente.classList.add('btn-outline-success')
                botonPendiente.innerHTML = 'Pedido servido'
            }

            if(e.target.id == 'btnEliminar'){
                const trPedido = e.target.closest('tr')
                const idPedido = parseInt(trPedido.dataset.pedido)

                const pedidosNuevo = pedidos.filter(pedido => pedido.id != idPedido)
                
                document.querySelector('#tbodyPedidos').innerHTML = ''
                pedidosNuevo.forEach(item => {
                    document.querySelector('#tbodyPedidos').innerHTML += `
                    <tr data-pedido="${item.id}" class="pedido">
                        <td>${item.nombreGrupo}</td>
                        <td>${item.numeroMesa}</td>
                        <td>${item.cerveza}</td>
                        <td>${item.cantidad}</td>
                        <td>
                            <div class="d-flex gap-2">
                                <button id="btnPendiente" class="btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>
                                <button id="btnEliminar" class="btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
                            </div>
                        </td>
                    </tr>
                    `                
                })

                pedidos = pedidosNuevo
            }
        })
    }
}
