<template>
  <div class="error_header">
    <div class="error_header_container">
      <div class="error_header_home_link">
        <img class="error_logo" :src="image">
        <router-link class="error_home_link" :to="{ path: '/' }">
          Sobakachain  
        </router-link>  
      </div>
    </div>  
  </div>
  <router-view/>
</template>

<script>
import image from '../img/dog_logo.svg'

export default {
  name: 'error-header',
  data: () => ({
    image
  }),
}


</script>


<style>
.error_header {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: #ffffff;
  border-bottom: 1px solid #c9c9c9;
}

.error_header_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  width: 1100px;
}

.error_home_link {
  font-size: 25px;
  font-weight: 600;
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  color: #2c016f; 
}

.error_header_home_link {
  padding-right: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;

}

.error_logo {
  width: 45px;
  height: 45px;
  padding-right: 10px;
}

</style>

