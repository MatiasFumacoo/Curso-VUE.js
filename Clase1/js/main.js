console.log('Vue.js CDN')

Vue.component('contador', {
    data() {
        return {
            contador: this.valorInicial
        }
    },
    props: ['valor-inicial'],
    methods : {
        contar() {
            this.contador++
        }
    },
    template: 
    `
        <div>
            <button class="btn btn-danger my-2" @click="contar()">Contar {{contador}}</button>
        </div>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Soy un mensaje',
        mensajeHTML: '<i>Soy un mensaje</i>',
        valor : 123,
        valor2 : 456,
        valor3 : 789,
        contador : 0,
        contador2 : 0,
        contador3 : 0,
        mostrar : true,
        mostrar2 : true,
        estado1 : true,
        estado2 : true,
        nombre : '',
        usuarios : [
            'Pedro',
            'Juan',
            'Ana',
            'Laura'
        ],
        //https://www.iconfinder.com/free_icons
        alumnos : [
            {nombre: 'Juan', apellido:'Gomez', edad:32, curso:false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png'},
            {nombre: 'Ana', apellido:'Picos', edad:23, curso:true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-256.png'},
            {nombre: 'Diego', apellido:'Mei', edad:27, curso:true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png'},
            {nombre: 'Laura', apellido:'Gutierrez', edad:41, curso:false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png'}
        ]
    },
    methods: {
        incrementar() {
            this.contador3++
        },
        getContador() {
            return this.contador3
        },
        actualizar(e) {
            var dato = e.target.value
            this.valor2 = dato
        },
        cambiarVisibilidad() {
            this.mostrar2 = !this.mostrar2
        },
        obtenerTituloVisibilidad(){
            return this.mostrar2? 'Ocultar': 'Mostrar'
        },
        visibilidad() {
            return this.mostrar2
        },
        borrar(index) {
            this.alumnos.splice(index,1)
        },
        agregar() {
            var alumno = {nombre: 'Pablo', apellido:'Gonzalez', edad:33, curso:true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-256.png'}

            this.alumnos.push(alumno)
        }
    },
    computed: {
        calcularAlumnosCurso() {
            var cant = 0

            this.alumnos.forEach(function(alumno) {
                if(alumno.curso) cant ++
            })

            return {
                cantidad : cant,
                total : this.alumnos.length
            }

        }
    }
})