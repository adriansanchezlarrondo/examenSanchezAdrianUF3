import { bd } from "../bd";

export const form =  {
    template:  //html
    `
    <h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
    <div class="row">
        
        <div class="col-6">
            <h3>Grupo</h3>
            <label for="nombreGrupo" class="label-control">Nombre del grupo:</label>
            <input id="nombreGrupo" type="text" class="form-control mt-2" placeholder ="Borrachos de DAW2">
            <label for="numeroMesa" class="label-control">Mesa numero</label>
            <input id="numeroMesa" type="number" class="form-control mt-2" placeholder ="0">
            
            <h3 class="mt-5">Haz tu pedido</h3>
            <div class="d-flex gap-3 ">
                <select name="cervezas" id="cervezas" class="form-control">
                    <option value="">Selecciona qué birra quieres</option>
                </select>
            
                <input id="cantidad" type="number" value="0" class="form-control">
            </div>
            <button id="btnAñadir" class="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
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
    }
}