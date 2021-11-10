<template>
  <div class="block__page">
    <div class="container__block"> 
      <div class="block__name">
        <div>
          <fa icon="cube" class="block_cube_icon" />
        </div>
        <div class="block_name_item">
          Block: {{ blockPageUnderheader.height }}
        </div>
      </div>  
      <div class="block_item_hash">
        <div>
          {{ blockPageUnderheader.hash }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import image from '../img/bitcoin_icon.svg'

export default {
  name: 'block-page-underheader',
  props: {
    blockPageUnderheader: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({
    info: [],
    image,
  })
}

</script>


<style>

.block__page {
  background: rgb(17,0,42);
  background: linear-gradient(90deg, rgba(17,0,42,1) 3%, rgba(51,0,185,1) 82%, rgba(82,0,150,1) 100%);
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0 50px 0;
}

.container__block {
  width: 1260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.block__name {
  font-size: 35px;
  color: #ffffff;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1140px;
  justify-content: flex-start;
}

.block_cube_icon {
  color: #ffffff;
}

.block_name_item {
  margin-left: 15px;
}

.block_item_hash {
  width: 1140px;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
}

</style>
