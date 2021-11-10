<template>
  <div class="page_address">
    <div 
      v-if="!isLoaded"
      class="block_loader" 
    >
      <loader />
    </div>
    <div 
      v-else 
      class="page_block_title_address"
    >
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
  </div>
</template>


<script>
import axios from 'axios'
import addressTableList from './address-table-list.vue'
import addressPageUnderheader from './address-page-underheader.vue'
import addressListMain from './address-list-main.vue'
import addressListOther from './address-list-other.vue'
import loader from '../views/loader.vue'

export default {
  components: {
    addressTableList,
    addressPageUnderheader,
    addressListMain,
    addressListOther,
    loader
  },
  name: 'address',
  data: () => ({
    info: [],
    errored: true,
    isLoaded: false
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
        this.info = response.data,
        this.isLoaded = true
      })
      .catch(error  => {
        this.$router.push({
          name: 'error-index',
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
.page_address {
  display: flex;
  flex-direction: column;
  justify-content: center;align-items: center;
  width: 100%;
}

.block_loader {
  margin-top: 60px;
}

.page_block_title_address {
  width: 100%;
}
</style>
