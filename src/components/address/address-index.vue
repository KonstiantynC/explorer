<template>
  <div class="ul_list">
    <address-page-underheader
      :address-page-underheader="info"
    />
    <address-list-main 
      :address-list-main="info"
    />
    <address-list-other 
      :address-list-other="info"
    />
    <address-table-list
      :address-table-list="info"
    />
  </div>
</template>


<script>
import axios from 'axios'
import addressTableList from './address-table-list.vue'
import addressPageUnderheader from './address-page-underheader.vue'
import addressListMain from './address-list-main.vue'
import addressListOther from './address-list-other.vue'

export default {
  components: {
    addressTableList,
    addressPageUnderheader,
    addressListMain,
    addressListOther
  },
  name: 'address',
  data: () => ({
    info: [],
    errored: true ,
  }),
  methods: {
    loadAddress () {
      axios
      .get('https://blockchain.info/rawaddr/' + this.$route.params.addr, {
        params: {
          cors: true  
        }
      })
      .then(response => {
        this.info = response.data
      })
      .catch(error  => {
        this.$router.push({
          name: 'error',
          params: { 
            input: this.$route.params.addr, 
          }
        })
        console.log(error)
      })
    }
  },
  mounted() {
    this.loadAddress ()
  },
  /*updated() {
    this.loadAddress ()
  }*/
}

  

</script>


<style>
.ul_list {
  display: flex;
  flex-direction: column;
  justify-content: center;align-items: center;
  width: 100%;
}

</style>
