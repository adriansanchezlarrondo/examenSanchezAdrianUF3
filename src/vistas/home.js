import { form } from "../componentes/form";
import { tabla } from "../componentes/tabla";

export const Home =  {
    template:  //html
    `
    <div id="formPedido" class="container mt-3 p-5 border shadow-lg "></div>
    <div id="tablaPedidos" class="container mt-5 mb-5 p-5 border shadow-lg"></div>
    `,
    script : ()=>{
        document.querySelector('#formPedido').innerHTML= form.template
        form.script()
        document.querySelector('#tablaPedidos').innerHTML= tabla.template
        tabla.script()
    }
}
