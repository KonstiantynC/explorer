<template>
  <div class="address_block_page">
    <div class="container_address_block"> 
      <div>
        <img class="bitcoin_logo_image" :src="image">
      </div>
      <div class="address_block_name">
        Bitcoin Explorer
      </div>  
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import image from '../img/bitcoin_icon.svg'

export default {
  name: 'address-page-underheader',
  data: () => ({
    info: [],
    image,
  })
}

</script>


<style>

.address_block_page {
  background: rgb(17,0,42);
  background: linear-gradient(90deg, rgba(17,0,42,1) 3%, rgba(51,0,185,1) 82%, rgba(82,0,150,1) 100%);
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
}

.container_address_block {
  width: 1300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}


.bitcoin_logo_image {
  width: 70px;
  height: 70px;
  position: relative;
  padding: 0 20px 0 120px;
}

.address_block_name {
  font-size: 35px;
  color: #ffffff;
  font-weight: 500;
}



</style>
