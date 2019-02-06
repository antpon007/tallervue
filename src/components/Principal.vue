<template>
  <div id="main clearfix">
    <div>
      <div class>
        <h1 class="nombre-sitio">Taller Vue JS</h1>
        <p class="slogan">
          Objetivos
          1. Consumir el API creado en Node JS, Express y MongoDB
          <br>2. Crear una aplicación Web con Vue JS
        </p>
      </div>
    </div>

    <h1>REGISTRA USUARIOS Y/O ASIGNA TAREAS</h1>
    <div class="box-principal clearfix">
      <div class="box-hija" v-on:click="tasks()">
        <p>Administra todas tus tareas .</p>
      </div>
      <div class="box-hija" v-on:click="users()">
        <p>Administra todos tus usuarios.</p>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "principal",
  data() {
    return {
      prueba: "HOLA",
      servidor: "http://localhost:3000/api/v1/"
    };
  },
  methods: {
    tasks() {
      this.$router.replace({ name: "tasks" });
    },
    users() {
      this.$router.replace({ name: "users" });
    }
  }
};
</script>

<style>
#main {
  margin-top: 80px;
}
#main h1 {
  padding: 10px;
  text-transform: uppercase;
}
.cabecera {
  position: relative;
}

.titulo {
  font-size: 18px;
  color: var(--piel);
}

.box-hija {
  width: 30%;
  border: 1px solid #ccc;
  padding: 20px 20px;
  margin: 20px;
  height: 150px;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(159, 188, 207, 1);
  -moz-box-shadow: 6px 6px 5px 0px rgba(159, 188, 207, 1);
  box-shadow: 6px 6px 5px 0px rgba(159, 188, 207, 1);
  float: left;
  text-align: center;
}

.img-medicina {
  width: 80%;
  height: 150px;
}

div.hero {
  height: 100vh;
  height: 300px;
  opacity: 0.24;
  background-position: top center;
  background-size: cover;
  margin-top: -30px;
  padding-top: 40px;
}
div.informacion-principal {
  text-align: right;
  color: #000;
  width: 90%;
  height: 300px;
  position: absolute;
  top: 0;
  right: 10px;
  padding-top: 80px;
}
div.informacion-principal {
  font-size: 48px;
}
div.informacion-principal label {
  font-size: 20px;
  color: var(--azul);
  padding-top: 10px;
}
p.slogan {
  color: var(--azul);
  font-size: 24px;
  margin-top: 28px;
  margin-bottom: 40px;
}
#busqueda {
  width: 500px;
  height: 35px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.nombre-sitio {
  margin-bottom: 0px;
}
@media only screen and (max-width: 768px) {
  div.informacion-principal {
    font-size: 28px;
  }
  p.slogan {
    color: var(--azul);
    font-size: 20px;
  }
  #busqueda {
    width: 250px;
  }
  div.informacion-principal label {
    font-size: 14px;
  }
  .box-hija {
    width: 90%;
    display: block;
  }
}

.dos {
  margin-top: 20px;
}
</style>
