<template>
<!--     <div class="sidebar">
      <button class="btn" @click="onButtonClick(1)">Botón 1</button>
      <button class="btn" @click="onButtonClick(2)">Botón 2</button>
      <button class="btn" @click="onButtonClick(3)">Botón 3</button>
      <button class="btn" @click="onButtonClick(4)">Botón 4</button>
    </div> -->
    <div class='sidebar'>

      
        <div class="link">
            <v-icon name="io-briefcase-outline" />
        </div>
        <div class="link">
            <v-icon name="bi-file-earmark-check" />
        </div>
        <div class="link">
            <v-icon name="io-game-controller" />
        </div>
        <div class="link">
            <v-icon name="io-chatbubble-outline" />
        </div>
        <div class="link">
            <v-icon name="bi-code-slash" />
        </div>
        <div class="link">
            <v-icon name="io-diamond-outline" />
        </div>
        <div class="link">
            <v-icon name="ri-file-user-line" />
        </div>


    
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    methods: {
      onButtonClick(index) {
        // Lógica para manejar el clic en cada botón
        console.log('Se hizo clic en el botón ' + index)
      }
    }
  }
  </script>
  
  <style>
  .sidebar {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    height: 90vh;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .link{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }
  p{
    font-size: 0.8rem;
  }
  </style>
  