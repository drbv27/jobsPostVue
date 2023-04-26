<template>
    <div>
      <Navbar />
      <div class="flex">
        <Sidebar />
        <div class="principal m-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  import Navbar from './Navbar.vue'
  import Sidebar from './Sidebar.vue'
  
  export default {
    name: 'Layout',
    components: {
      Navbar,
      Sidebar
    }
  }
  </script>
  <style>
    .flex {
      display: flex;
    }
    .principal{
        width: 100%;
    }
</style>
  