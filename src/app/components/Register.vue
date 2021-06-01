<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">

        </nav>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">

                    <div class="card">
                     <div class="card-title">
                        <h3 class="text-center p-4">Regsitrate</h3>
                    </div>
                        <div class="card-body">
                            <form @submit.prevent="login">
                                <div class="form-group">
                                    <label class="mt-2 text-bold">Usuario</label>
                                        <input class="form-control" 
                                        type="text" v-model="Usuario.correo" 
                                        placeholder="Nombres">
                                        <label class="mt-3">Contraseña</label> 
                                        <input class="form-control mt-2" 
                                        type="password"  v-model="Usuario.contr" 
                                        placeholder="Apellidos">
                                            <div class="container">
                                                    <button class="btn btn-success mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar</button>
                                                    <button v-on:click="cleanTxt" class="btn btn-danger mt-4">Cancelar</button>
                                            </div>   
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

 class Usuario{
     constructor(correo, contra){
         this.correo = correo;
         this.contr = contra;
     }
 }


export default {
    data(){
        return {
            Usuario : new Usuario(),
            msg_modal : 'Operacion Exitosa, recarga para ver los cambios',
            Title_Modal : 'Operacion Exitosa',   
        }
    },
    methods: {
        login(){
           if (
                !this.Usuario.correo ||
                !this.Usuario.contr ) 
            {
                this.msg_modal = 'Revisa que todos los campos esten correctamente llenos';
                 this.Title_Modal = 'Operacion fallida';
            }
            else{
                fetch('/create-user', {
                     method: 'POST',
                     body: JSON.stringify(this.Usuario),
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
            this.asegurado = new Usuario();
        },        
        redireccion(){
            window.open('http://localhost:27017/index.html');
        }

    }
}
                
</script> 