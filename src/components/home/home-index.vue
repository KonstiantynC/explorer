<template>
  <div class="header">
    <div class="header_header">
      <div class="header_home_link">
        <img class="logo" :src="image">
        <router-link class="home_link" :to="{ path: '/' }">
          Sobakachain  
        </router-link>  
      </div>
      <div class="input_item">
        <select class="select_page" @keydown="search" v-model="selected">
          <option>{{ block }}</option>
          <option>{{ address }}</option>
          <option>{{ transaction }}</option>
        </select>
        <input class="input_hash" @keydown="search" v-model="hash" type="text" placeholder="Address, transaction or block">
        <button class="button_search" @click="search" :disabled="!hash">
          <fa icon="search"/>
        </button>
      </div>  
    </div>  
  </div>
  <router-view/>
</template>

<script>
import { validate, getAddressInfo } from 'bitcoin-address-validation';
import error from '../views/error.vue'
import image from '../img/dog_logo.svg'
import homeBlock from './home-block.vue'

export default {
  name: 'home-header',
  components: {
    error
  },
  data: () => ({
    hash: '',
    selected: '',
    block: 'Block',
    address: 'Address',
    transaction: 'Transaction',
    image
  }),
  components: {
    homeBlock
  },
   methods: {
    search() {
      const valid = validate(this.hash)
      if (this.selected == 'Address' || valid) {
        this.$router.push({ 
          name: 'address',
          params: { 
            addr: this.hash  
          }
        })
      }else if (this.selected == 'Transaction') {
        this.$router.push({
          name: 'transaction',
          params: { 
            tx: this.hash 
          }
        })
      }else if(this.selected == 'Block'){
        this.$router.push({
          name: 'block',
          params: { 
            hash: this.hash  
          }
        })
      } else {
        console.log(validate('invalid'))
      }
    }
  }
}


</script>


<style>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: #ffffff;
  border-bottom: 1px solid #c9c9c9;
}

.header_header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  width: 1300px;
}

.input_item {
  border-radius: 5px;
}

.input_hash {
  height: 29px;
  width: 350px;
}

.input_hash::after {
  background-color: red;
}

.select_page {
  height: 35px;
  background-color: #5799d4;
  font-weight: 500;
  border-radius: 5px 0 0 5px;
  border-color: #5799d4;
}

.button_search {
  height: 35px;
  width: 45px;
  background-color: #5799d4;
  color: #ffffff;
  border-radius: 0 5px 5px 0;
  border-color: #5799d4;
}

.home_link {
  font-size: 25px;
  font-weight: 600;
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  color: #2c016f; 
}

.header_home_link {
  padding-right: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;

}

.logo {
  width: 45px;
  height: 45px;
  padding-right: 10px;
}

</style>

