<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <a href="#"  class="navbar-brand mx-auto my-0">Karla Seguros - Añadir clientes</a>
            <a href="" @click="redireccion" class="nav-link text-white mx-auto my-0"> Registro de clientes</a>
        </nav>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">

                    <div class="card">
                     <div class="card-title">
                        <h3 class="text-center p-4">Agregar nuevo Registro</h3>
                    </div>
                        <div class="card-body">
                            <form @submit.prevent="addAsegurado">
                                <div class="form-group">
                                    <label class="mt-2 text-bold">Nombres</label>
                                        <input class="form-control" 
                                        type="text" v-model="asegurado.nombre" 
                                        placeholder="Nombres">
                                    <label class="mt-3">Apellidos</label> 
                                        <input class="form-control mt-2" 
                                        type="text"  v-model="asegurado.apellidos" 
                                        placeholder="Apellidos">
                                        <label class="mt-3">Aseguradora</label> 
                                        <select class=" form-select mt-2" v-model="asegurado.aseguradora">
                                            <option value="Mapfre">Mapfre</option>
                                            <option value="Asesuisa">Asesuisa</option>
                                            <option value="Acsa">Acsa</option>
                                        </select>
                                        <label class="mt-3">Numero de Telefono</label> 
                                       <input class="form-control mt-2" 
                                        type="text"  v-model="asegurado.numeroTele"
                                         placeholder="Numero Telefonico">
                                       <label class="mt-3">Numero de Poliza</label> 
                                        <input type="string" class="form-control mt-2"
                                        v-model="asegurado.numeroPoliza"
                                        placeholder="No. Poliza">
                                        <label class="mt-3">Fecha de nacimiento</label> 
                                        <input type="date" class="form-control mt-2"
                                        v-model="asegurado.fechadeNacimiento">
                                </div>
                                            <div class="container">
                                                    <button class="btn btn-success mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar</button>
                                                    <button v-on:click="cleanTxt" class="btn btn-danger mt-4">Cancelar</button>
                                            </div>   
                            </form>
                            <!-- Modal -->
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                                <h5 class="modal-title" id="staticBackdropLabel">{{Title_Modal}}</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body" id="text">
                                                {{msg_modal}}
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="mt-5 mb-5 text-center">            
                <figcaption class="text-gray mx-auto">
                    Desarrollado con MEVN Stack por @jromerooo2 
                </figcaption>
        </footer>
    </div>   
</template>
    <script>
 class Asegurado{
     constructor(nombre, apellidos, aseguradora, numeroTele, numeroPoliza, fechadeNacimiento){
         this.nombre = nombre;
         this.apellidos = apellidos;
         this.aseguradora = aseguradora;
         this.numeroTele = numeroTele;
         this.numeroPoliza = numeroPoliza;
         this.fechadeNacimiento = fechadeNacimiento;
         
     }
 }


export default {
    data(){
        return {
                asegurado : new Asegurado(),  
                msg_modal : 'Operacion Exitosa, recarga para ver los cambios',
                Title_Modal : 'Operacion Exitosa',   
                asegurados: [],          
        }
    },
    created(){
        this.getAsegurados();
    },
    methods: {
        addAsegurado() {
            if (
                !this.asegurado.nombre ||
                !this.asegurado.apellidos ||
                !this.asegurado.aseguradora || 
                !this.asegurado.numeroTele) 
                {
                this.msg_modal = 'Revisa que todos los campos esten correctamente llenos';
                 this.Title_Modal = 'Operacion fallida';
            }
            else{
                fetch('/registro', {
                     method: 'POST',
                     body: JSON.stringify(this.asegurado),
                     headers:{
                         'Accept': 'application/json',
                         'Content-type': 'application/json'
                     }
                 })
                 .then(res => res.json())
                 .then(data => {
                     this.getAsegurados();
                 })
                this.cleanTxt();
            }
        },

        cleanTxt(){
            this.asegurado = new Asegurado();
        },

        getAsegurados(){
             fetch('/registro', {
                     method: 'GET',
                 })
                 .then(res => res.json())
                 .then(data => {
                     this.asegurados = data;
                     console.log(this.asegurados);
                 })
        },
        
        redireccion(){
            window.open('http://localhost:27017/index.html');
        }

    }
}
                
</script> 