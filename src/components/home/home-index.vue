<template>
  <div class="header_header">
    <div class="qwe">
      <router-link class="home_link" :to="{ path: '/home-block' }">
        Explorer  
      </router-link>  
    </div>
    <div>
      <input v-model="hash" type="text" placeholder="Search">
      <select v-model="selected">
        <option>{{ block }}</option>
        <option>{{ address }}</option>
        <option>{{ transaction }}</option>
      </select>
      <button @click="Search" :disabled="!hash">Search</button>
    </div>  
  </div> 
  <router-view/>
</template>

<script>
import { validate, getAddressInfo } from 'bitcoin-address-validation';

export default {
  name: 'home-header',
  components: {
  },
  data: () => ({
    hash: '',
    selected: '',
    block: 'Block',
    address: 'Address',
    transaction: 'Transaction',
  }),
  methods: {
    Search() {
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
.header_header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: green;
  height: 50px;
  width: 100%;
}

input {
  height: 25px;
}

select {
  margin-left: 15px;
  height: 30px;
}

button {
  margin-left: 15px;
  height: 30px;
}

.home_link {
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none; 
}

.qwe {
  padding-right: 150px;
}

</style>

