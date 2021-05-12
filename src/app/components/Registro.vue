<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <a href="#" class="navbar-brand mx-auto my-0">Registro de clientes</a>
            <a href="../../public/addAsegurados.html" class="nav-link text-white mx-auto my-0"> Registro</a>
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

        <footer class="mt-5 text-center">            
                <figcaption class="text-gray mx-auto">
                    Desarrollado con MEVN Stack por @jromerooo2 
                </figcaption>
        </footer>
    </div>    
</template>