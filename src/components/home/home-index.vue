<template>
  <div class="header">
    <div class="header_header">
      <div class="header_home_link">
        <router-link class="home_link" :to="{ path: '/home-block' }">
          Explorer  
        </router-link>  
      </div>
      <div>
        <input class="input_hash" @keydown="search" v-model="hash" type="text" placeholder="Search">
        <select class="select_page" @keydown="search" v-model="selected">
          <option>{{ block }}</option>
          <option>{{ address }}</option>
          <option>{{ transaction }}</option>
        </select>
        <button class="button_search" @click="search" :disabled="!hash">Search</button>
      </div>  
    </div>  
  </div>
  <router-view/>
</template>

<script>
import { validate, getAddressInfo } from 'bitcoin-address-validation';
import error from '../views/error.vue'

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
  }),
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
  background-color: green;
  display: flex;
  justify-content: center;
}

.header_header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 1300px;
}

.input_hash {
  height: 25px;
}

.select_page {
  margin-left: 15px;
  height: 30px;
}

.button_search {
  margin-left: 15px;
  height: 30px;
}

.home_link {
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none; 
}

.header_home_link {
  padding-right: 600px;
}

</style>

