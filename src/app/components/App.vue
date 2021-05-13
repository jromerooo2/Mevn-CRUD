<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <a href="#" class="navbar-brand mx-auto my-0">Karla Seguros - Registro de asegurados </a>
            <a href="#" @click="redireccion" class="nav-link text-white mx-auto my-0"> Añadir Asegurado</a>
        </nav>
        <div class="container mt-5">
            <div class="d-md-flex d-sm-block justify-content-md-between justify-content-sm-center">
                <h2 class="text-center text-bold mb-5">Tabla de registro de clientes</h2>   
                <input type="search" class="mb-5" placeholder="" aria-controls="example">
            </div>
           
            <div class="table-responsive">               
               <table class="table table-bordered">                                    
                    <thead class="text-center thead-dark">                        
                        <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Aseguradora</th>
                            <th>No. Telefono</th>
                            <th>No. Poliza</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Editar</th>
                            <th>Eliminar</th> 
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <tr v-for="asegurado in asegurados" v-bind:key="asegurado">
                            <td>{{asegurado.nombre}}</td>
                            <td>{{asegurado.apellidos}}</td>
                            <td>{{asegurado.aseguradora}}</td>
                            <td>{{asegurado.numeroTele}}</td>
                            <td>{{asegurado.numeroPoliza}}</td>
                            <td>{{asegurado.fechadeNacimiento}}</td>
                            <td><button @click="Eliminar(asegurado._id)" class="btn btn-danger align-items-center">Eliminar</button></td>
                            <td><button @click="editar(asegurado._id)" class="btn btn-primary align-items-center">Editar</button></td> 
                        </tr>
                    </tbody>
                </table>
            </div>

           <!-- <div class="row">
                <div class="col-md-12">

                    <div class="card">
                     <div class="card-title">
                        <h3 class="text-center p-4">Agregar nuevo Registro</h3>
                    </div>
                        <div class="card-body">
                            <form @submit.prevent="addAsegurado">
                                <div class="form-group">
                                        <input class="form-control" 
                                        type="text" v-model="asegurado.nombre" 
                                        placeholder="Nombres">
                                        <input class="form-control mt-2" 
                                        type="text"  v-model="asegurado.apellidos" 
                                        placeholder="Apellidos">
                                        <select class=" form-select mt-2" v-model="asegurado.aseguradora">
                                            <option value="Mapfre">Mapfre</option>
                                            <option value="Asesuisa">Asesuisa</option>
                                            <option value="Acsa">Acsa</option>
                                        </select>
                                       <input class="form-control mt-2" 
                                        type="text"  v-model="asegurado.numeroTele"
                                         placeholder="Numero Telefonico">
                                </div>
                                            <div class="container">
                                                    <button class="btn btn-success mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar</button>
                                                    <button v-on:click="cleanTxt" class="btn btn-danger mt-4">Cancelar</button>
                                            </div>   
                            </form>
                            -->
                            <!-- 
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
            </div>  -->
        </div>

        <footer class="mt-5 text-center">            
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
         this.numeroTele = fechadeNacimiento;
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
            window.open('http://localhost:27017/addAsegurado.html');
        },
        editar(aseguradora, nombre, numeroTele){
            //alert('Hola' + " " +nombre +" " + aseguradora + " " + numeroTele);
        },
        Eliminar(id){
                    fetch('/registro/' + id, {
                     method: 'DELETE',
                     headers:{
                         'Accept': 'application/json',
                         'Content-type': 'application/json'
                     }
                 })
                 .then(res => res.json())
                 .then(data => {
                     this.getAsegurados();
                 })
            }
        }


    
}
                
</script>


