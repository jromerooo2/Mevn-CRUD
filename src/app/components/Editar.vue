<template>
        <div>
        <nav class="navbar navbar-dark bg-dark">
            <a href="#"  class="navbar-brand mx-auto my-0">Karla Seguros - Añadir clientes</a>
            <a href="" class="nav-link text-white mx-auto my-0"> Registro de clientes</a>
        </nav>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">

                    <div class="card">
                     <div class="card-title">
                        <h3 class="text-center p-4">Agregar nuevo Registro</h3>
                    </div>
                        <div class="card-body">
                            <form  @submit.prevent="">
                                <div class="form-group">
                                    <label class="mt-2 text-bold">Nombres</label>
                                        <input v-model="asegurado.nombre" class="form-control" 
                                        type="text"  
                                        placeholder="Nombres">
                                    <label class="mt-3">Apellidos</label> 
                                        <input  v-model="asegurado.apellidos" class="form-control mt-2" 
                                        type="text"   
                                        placeholder="Apellidos">
                                        <label class="mt-3">Aseguradora</label> 
                                        <select  v-model="asegurado.aseguradora" class=" form-select mt-2" >
                                            <option value="Mapfre">Mapfre</option>
                                            <option value="Asesuisa">Asesuisa</option>
                                            <option value="Acsa">Acsa</option>
                                        </select>
                                        <label class="mt-3">Numero de Telefono</label> 
                                       <input v-model="asegurado.numeroTele" class="form-control mt-2" 
                                        type="text" 
                                         placeholder="Numero Telefonico">
                                       <label class="mt-3">Numero de Poliza</label> 
                                        <input v-model="asegurado.numeroPoliza" type="string" class="form-control mt-2"
                                        
                                        placeholder="No. Poliza">
                                        <label class="mt-3">Fecha de nacimiento</label> 
                                        <input v-model="asegurado.fechadeNacimiento" type="date" class="form-control mt-2"
                                        >
                                </div>
                                            <div class="container">
                                                    <button @click="updateAsegurado()" class="btn btn-success mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Actualizar</button>
                                                    <button class="btn btn-danger mt-4">Cancelar</button>
                                            </div>   
                            </form>
                            <!-- Modal -->
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                                <h5 class="modal-title" id="staticBackdropLabel">Operación exitosa</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body" id="text">
                                            El Asegurado ha sido actualizado.
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
export default {
    data(){
        return{
            asegurado : [],
            id: "",
        }
    },
    created(){
        this.findAsegurado()
    },
    methods:{
        findAsegurado(id){
            var url_string = window.location.href
            var url = new URL(url_string);
            var idreq = url.searchParams.get("id");
            this.id = idreq

            fetch('/asegurados/'+this.id)
                 .then(res => res.json())
                 .then(data => {
                     this.asegurado = data;
                     console.log(this.asegurado)
                 })
        },
        updateAsegurado(){
            fetch("/update/"+this.id, {
                     method: 'PUT',
                     body: JSON.stringify(this.asegurado),
                     headers:{
                         'Accept': 'application/json',
                         'Content-type': 'application/json'
                     }
                 })
        },
    }
    
}
</script>