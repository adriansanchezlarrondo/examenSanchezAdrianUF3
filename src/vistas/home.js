import { form } from "../componentes/form";
import { tabla } from "../componentes/tabla";

export const Home =  {
    template:  //html
    `
    <div class="container mt-3 p-5 border shadow-lg ">
        <h2 class="text-center">Birras y Tapas</h2>
        <div id="formPedido"></div>
        <div id="tablaPedido"></div>
        <button id="btnEnviar" class="btn btn-primary text-light">Enviar pedido</button>
    </div>
    `,
    script : ()=>{
        document.querySelector('#formPedido').innerHTML= form.template
        form.script()
        document.querySelector('#tablaPedido').innerHTML= tabla.template
        tabla.script()
    }
}
