(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const s=[{id:3,nombre:"Mahou Cinco Estrellas",tipo:"Lager",origen:"Madrid",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://d2j6dbq0eux0bg.cloudfront.net/images/62086137/2352696799.jpg"},{id:22,nombre:"Estrella Galicia",tipo:"Lager",origen:"Galicia",descripcion:"Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.",imagen:"https://estrellagalicia.es/wp-content/uploads/2017/01/botella-estrella-galicia-especial.png"},{id:33,nombre:"Alhambra Reserva 1925",tipo:"Lager",origen:"Granada",descripcion:"Cerveza rubia con un sabor ligeramente dulce y toques de caramelo.",imagen:"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202204/04/00118602800916____3__600x600.jpg"},{id:34,nombre:"San Miguel Especial",tipo:"Lager",origen:"Barcelona",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://www.sanmiguel.com/es/wp-content/uploads/sites/2/2021/01/san-miguel-gluten-free-4.png"},{id:35,nombre:"Damm Estrella",tipo:"Lager",origen:"Barcelona",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://static.damm.com/sites/default/files/config-page/estrella_header_logo/estrella-damm_0.png"}],c={template:`
    <h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
    <div class="row">
        
        <div class="col-6">
            <h3>Grupo</h3>
            <form novalidate action="" method="get" class="">
                <label for="nombreGrupo" class="label-control">Nombre del grupo:</label>
                <input id="nombreGrupo" type="text" class="form-control mt-2" placeholder="Borrachos de DAW2" minlength="4" maxlength="10">
                <div class="invalid-feedback small">El nombre del grupo ha de ser entre 4 y 10 caracteres</div>

                <label for="numeroMesa" class="label-control">Mesa numero</label>
                <input id="numeroMesa" type="number" class="form-control mt-2" placeholder ="1" minlength="1" maxlength="15">
                <div class="invalid-feedback small">El numero de la mesa tiene que ser entre 1 y 15</div>

                <h3 class="mt-5">Haz tu pedido</h3>
                <div class="d-flex gap-3 ">
                    <select name="cervezas" id="cervezas" class="form-control">
                        <option value="">Selecciona qué birra quieres</option>
                    </select>
                
                    <input id="cantidad" type="number" value="0" class="form-control">
                </div>
                <button id="btnAñadir" class="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
            </form>
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
    `,script:()=>{const a=document.querySelector("#cervezas");s.forEach(t=>{const o=document.createElement("option");o.text=t.nombre,o.value=t.id,a.appendChild(o)}),a.addEventListener("change",()=>{const t=s.find(o=>o.id==a.value);t&&(document.querySelector("#nombre").innerHTML=t.nombre,document.querySelector("#descripcion").innerHTML=t.descripcion,document.querySelector("#imagen").src=t.imagen)})}};let d=[];const l={template:`
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
    `,script:()=>{document.querySelector("#btnAñadir").addEventListener("click",a=>{a.preventDefault();const t=document.querySelector("#nombreGrupo").value,o=document.querySelector("#numeroMesa").value,n=document.querySelector("#cervezas").options[document.querySelector("#cervezas").selectedIndex].text,e=document.querySelector("#cantidad").value;if(t.length<4||t.length>10||o.length<1||o.length>15||e==0)document.querySelector("#nombreGrupo").classList.add("border-danger"),document.querySelector("#numeroMesa").classList.add("border-danger"),document.querySelector("#cantidad").classList.add("border-danger");else{d.push({id:d.length+1,numeroMesa:o,nombreGrupo:t,cerveza:n,cantidad:e,estado:"pendiente"}),console.log(d);const r=d[d.length-1];document.querySelector("#tbodyPedidos").innerHTML+=`
                <tr data-pedido="${r.id}" class="pedido">
                    <td>${r.nombreGrupo}</td>
                    <td>${r.numeroMesa}</td>
                    <td>${r.cerveza}</td>
                    <td>${r.cantidad}</td>
                    <td>
                        <div class="d-flex gap-2">
                            <button id="btnPendiente" class="btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>
                            <button id="btnEliminar" class="btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
                        </div>
                    </td>
                </tr>
                `}}),document.querySelector("#tbodyPedidos").addEventListener("click",a=>{if(a.target.id=="btnPendiente"){const t=a.target;t.classList.remove("btn-outline-warning"),t.classList.add("btn-outline-success"),t.innerHTML="Pedido servido"}if(a.target.id=="btnEliminar"){const t=a.target.closest("tr"),o=parseInt(t.dataset.pedido),n=d.filter(e=>e.id!=o);document.querySelector("#tbodyPedidos").innerHTML="",n.forEach(e=>{document.querySelector("#tbodyPedidos").innerHTML+=`
                    <tr data-pedido="${e.id}" class="pedido">
                        <td>${e.nombreGrupo}</td>
                        <td>${e.numeroMesa}</td>
                        <td>${e.cerveza}</td>
                        <td>${e.cantidad}</td>
                        <td>
                            <div class="d-flex gap-2">
                                <button id="btnPendiente" class="btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>
                                <button id="btnEliminar" class="btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
                            </div>
                        </td>
                    </tr>
                    `}),d=n}})}},u={template:`
    <div id="formPedido" class="container mt-3 p-5 border shadow-lg "></div>
    <div id="tablaPedidos" class="container mt-5 mb-5 p-5 border shadow-lg"></div>
    `,script:()=>{document.querySelector("#formPedido").innerHTML=c.template,c.script(),document.querySelector("#tablaPedidos").innerHTML=l.template,l.script()}};document.querySelector("main").innerHTML=u.template;u.script();
