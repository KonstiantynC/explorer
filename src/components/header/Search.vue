<template>
  <div class="header_header">
    <strong>Explorer</strong>
    <input v-model="hash" type="text" placeholder="Search">
    <select v-model="selected">
      <option disabled value="">make your choice</option>
      <option>{{ block }}</option>
      <option>{{ address }}</option>
      <option>{{ transaction }}</option>
    </select>
    <button @click="Search">Search</button>
  </div>
  <router-view/>
</template>

<script>
import { validate, getAddressInfo } from 'bitcoin-address-validation';


export default {
  name: 'search',
  components: {
  },
  data: () => ({
    hash: '',
    selected: '',
    block: 'Block',
    address: 'Address',
    transaction: 'Transaction'
  }),
  methods: {
    Search() {
      const valid = validate(this.hash)
      if (this.selected == 'Address' || valid) {
        this.$router.push('/address')
      }else if (this.selected == 'Transaction') {
        this.$router.push('/transaction')
      }else if(this.selected == 'Block'){
        this.$router.push('/block')
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
  justify-content: center;
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

strong {
  padding-right: 500px;
  font-size: 25px;
  margin-right: 200px ;
}


</style>

