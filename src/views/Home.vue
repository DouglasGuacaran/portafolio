<template>
  <div class="container-fluid">

        <p class="text-white display-1">Software and Web Developer</p>
        <!-- <img class="rounded" src="../assets/image2.png" alt="chess" /> -->
        <p class="title m-3">Bienvenidos a mi página, soy</p>
        <h1>Douglas Daniel Guacarán Méndez</h1>
  </div>
</template>

<script>
export default {
  name: "viewHome",
  components:{},
  data() {
    return{

    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container-fluid {
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container:hover {
  cursor: pointer;
}

.container img {
  width: 250px;
  border-radius: 5%;
  box-shadow: 10px 2px 10px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  transition: filter 0.4s ease-in-out;
}

.title {
  font-family: "Dancing Script", cursive;
  font-size: 1.5rem;
  color: orchid;
  position: relative;
}

.title::after {
  position: absolute;
  content: "";
  width: 0%;
  height: 2px;
  background-color: whitesmoke;
  left: 50%;
  bottom: -10px;
  transition: all 0.4s ease-in-out;
}

.container:hover .title::after {
  width: 100%;
  left: 0;
}
</style>
