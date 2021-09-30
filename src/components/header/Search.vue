<template>
  <div class="header_header">
    <strong>Explorer</strong>
    <input type="text" placeholder="Search">
    <select v-model="selected">
      <option disabled value="">make your choice</option>
      <option>{{ block }}</option>
      <option>{{ address }}</option>
      <option>{{ transaction }}</option>
    </select>
    <button @click="Search">Search</button>
  </div>
</template>

<script>
export default {
  name: 'search',
  components: {
  },
  data: () => ({
    selected: '',
    block: 'Block',
    address: 'Address',
    transaction: 'Transaction'
  }),
  methods: {
    Search() {
      if (this.selected == 'Address') {
        this.$router.push('/address')
      }else if (this.selected == 'Transaction') {
        this.$router.push('/transaction')
      }else if(this.selected == 'Block'){
        this.$router.push('/block')
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
}
.header_header {
  margin: -8px;
}

</style>

