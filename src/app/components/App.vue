<template>
    <div>    
        <nav class="navbar navbar-dark bg-danger">
            <a href="#" class="navbar-brand mx-auto my-0">Karla Seguros - Registro de asegurados </a>
            <a href="#" @click="redireccion" class="nav-link text-white mx-auto my-0"> Añadir Asegurado</a>
        </nav> 
        <div class="container mt-5">
            <div class="d-md-flex d-sm-block justify-content-md-between justify-content-sm-center">
                <h2 class="text-center text-bold mb-5">Tabla de registro de clientes</h2>   
                <div class="text-center">
                    <input type="search" v-model="searchQuery" class="mb-5" ref="inputName" placeholder="Buscar cliente..." aria-controls="example">
                </div>
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
                    <tbody class="text-center" >
                        <tr v-for="asegurado in filteredAsegurados" v-bind:key="asegurado">
                            <td>{{asegurado.nombre}}</td>
                            <td>{{asegurado.apellidos}}</td>
                            <td>{{asegurado.aseguradora}}</td>
                            <td>{{asegurado.numeroTele}}</td>
                            <td>{{asegurado.numeroPoliza}}</td>
                            <td>{{asegurado.fechadeNacimiento}}</td>
                            <td><button @click="Eliminar(asegurado._id)" class="btn btn-danger align-items-center">Eliminar</button></td>
                            <td><button @click="editar(asegurado)" class="btn btn-primary align-items-center">Editar</button></td> 
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="container md-col-12 ">
                <button class="btn btn-warning mt-2" href="#" @click="redireccion()">Agregar Asegurado</button>
                <button class="btn btn-warning mt-2" href="#" @click="checkBD()" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >¿Quienes cumplen años hoy?</button>
            </div>



                        <!--Modal-->
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                                <h5 class="modal-title" id="staticBackdropLabel">Cumpleañeros de hoy: </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body" id="text">
                                                <ul v-for="jeje of aseguradosCum" v-bind:key="jeje">
                                                    <li class="text-primary">{{jeje}}</li>
                                                </ul>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                                            </div>
                                        </div>
                                </div>
                            </div>
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
                msg : 'Nadie cumple años hoy',
                asegurados: [],
                aseguradosCum: [],
                searchQuery: '',          
        }
    },
    created(){
        this.getAsegurados();
    },
    computed:{
        filteredAsegurados: function(){

            return this.asegurados.filter((Asegurado)=>{
                 return Asegurado.nombre.toLowerCase().match(this.searchQuery.toLowerCase());
            });
        }
    },
    methods: {
        editar(persona){
            window.open('http://localhost:27017/addAsegurado.html?name=' + persona.nombre +'?apellidos='+ persona.apellidos);
            // alert(persona.nombre);
        },
        getAsegurados(){
             fetch('/get-asegurados', {
                     method: 'GET',
                 })
                 .then(res => res.json())
                 .then(data => {
                     this.asegurados = data;
                 })
        },
        
        redireccion(){
            window.open('http://localhost:27017/addAsegurado.html');
        },
        checkBD(){
            if (this.asegurados.length === 0 || this.aseguradosCum.length === 0 ) {                

                 if (!this.aseguradosCum.includes(this.msg)) {
                        // alert(this.asegurados[i].nombre +" cumple anos hoy")
                         this.aseguradosCum.push(this.msg)
                    }                

        } else{
                this.aseguradosCum.pop();
                
                let date = new Date()
                let day = date.getDate()
                let month = date.getMonth() + 1;
                let year = date.getFullYear()

                if(month < 10){
                const fecha = `${year}-0${month}-${day}`;
                // console.log(fecha);

                        for (let i = 0; i < this.asegurados.length; i++) {
                                    if (fecha === this.asegurados[i].fechadeNacimiento ) {
                                        if (!this.aseguradosCum.includes(this.asegurados[i].nombre) ) {
                                        // alert(this.asegurados[i].nombre +" cumple anos hoy")
                                        this.aseguradosCum.push(this.asegurados[i].nombre)
                                        }


                                    }
                            }

                }else {
                const fecha = `${year}-${month}-${day}`;

                        for (let i = 0; i < this.asegurados.length; i++) {
                                    if (fecha === this.asegurados[i].fechadeNacimiento ) {
                                        if (!this.aseguradosCum.includes(this.asegurados[i].nombre) ) {
                                        // alert(this.asegurados[i].nombre +" cumple anos hoy")
                                        this.aseguradosCum.push(this.asegurados[i].nombre)
                                        }

                                    }
                            }
                }
        }


    
             
            
            
        //     const currentDateWithFormat = currentDate.toJSON().slice(0,10);
        //     // const datee = this.convertTZ(currentDateWithFormat ,"America/El_Salvador");
        //    const usaTime = currentDateWithFormat.toLocaleString("en-US", {timeZone: "America/El_Salvador"});



        
        },
        Eliminar(id){
                    fetch('/delete/' + id, {
                     method: 'DELETE',
                     headers:{
                         'Accept': 'application/json',
                         'Content-type': 'application/json'
                     }
                 })
                 .then(res => res.json())
                 .then(data => {
                     this.getAsegurados();
                     location.reload();
                 })
            },



    
    }
}
                
</script>

