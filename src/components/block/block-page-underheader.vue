<template>
  <div class="home_block_page">
    <div class="container_home_block"> 
      <div class="home_block_name">
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
  }),
  mounted() {
    console.log(this.blockPageUnderheader)
    axios
      .get('https://blockchain.info/blocks', {
        params: {
          cors: true  
        }
      })
      .then(response => {
        this.info = response.data
      })
      .catch(error  => {
        console.log(error)
      })
  }
}
</script>


<style>

.home_block_page {
  background: rgb(17,0,42);
  background: linear-gradient(90deg, rgba(17,0,42,1) 3%, rgba(51,0,185,1) 82%, rgba(82,0,150,1) 100%);
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}

.container_home_block {
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home_block_name {
  font-size: 35px;
  color: #ffffff;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1050px;
  justify-content: flex-start;
}

.block_cube_icon {
  color: #ffffff;
}

.block_name_item {
  margin-left: 15px;
}

.block_item_hash {
  width: 1050px;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
}

</style>
