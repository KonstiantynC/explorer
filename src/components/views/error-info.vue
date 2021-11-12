<template>
  <div>
    <div class="error_background">
      <div class="error_container">
        <div class="error_header_title">
          <div class="error_title">
            <span>Sorry, '</span> 
            <div class="error_item_text">
              {{ $route.params.input }}
            </div>
            <span>' is not a valid BTC address, transaction or block</span>  
          </div>
        </div>
      </div>
      <div class="error_info_item">
        <div class="error_explanation">
          <div class="error_explanation_title">
            <span>Search the block chain</span>  
          </div>
          <div class="error_explanation_text">
            <span>Find info that other block explorers don't have</span>
          </div>
        </div>
        <div class="error_input_item">
          <select class="error_select_page" v-model="selected">
            <option>{{ block }}</option>
            <option>{{ address }}</option>
            <option>{{ transaction }}</option>
          </select>
          <input class="error_input_hash" @keydown.enter="search" v-model="hash" type="text" placeholder="Example: 1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F">
        </div> 
      </div>
      <div>
        <button class="error_button_search" @click="search" :disabled="!hash">
          <fa class="icon_search" icon="search"/>
          <span class="serch_text">Search</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { validate, getAddressInfo } from 'bitcoin-address-validation';

export default {
  name: 'error-info',
  props: {
    input: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({
    hash: '',
    selected: 'Block',
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
  },
  mounted () {
    console.log(this.$route.params.input)
  }
}
</script>

<style type="text/css">
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Open+Sans+Condensed:wght@300;700&display=swap');

.error_background {
  background: rgb(17,0,42);
  background: linear-gradient(90deg, rgba(17,0,42,1) 3%, rgba(51,0,185,1) 82%, rgba(82,0,150,1) 100%);
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 60px 0 50px 0;
}

.error_container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: -60px;
}

.error_header_title {
  width: 1120px;
  height: 60px;
  color: #31708f;
  background-color: #d9edf7;
  display: flex;
  border-radius: 5px;
  align-items: center;
}

.error_title {
  padding: 0 20px;
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.error_item_text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  margin: 10px 0;
}

.error_input_item {
  border-radius: 5px;
}

.error_input_hash {
  border-radius: 0 5px 5px 0;
  border-color: #5799d4;
  border-left-style: none;
  height: 39px;
  width: 550px;
  padding-left: 10px;
}

.error_input_hash::after {
  background-color: red;
}

.error_info_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error_explanation {
  color: white;
  width: 664px;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.error_explanation_title {
  font-size: 30px;
  font-family: 'Nanum Gothic', sans-serif;
}

.error_explanation_text {
  margin: 10px 0 15px 0;
  font-size: 18px;
  font-family: 'Nanum Gothic', sans-serif;
}

.error_select_page {
  height: 45px;
  width: 100px;
  background-color: #5799d4;
  font-weight: 500;
  border-radius: 5px 0 0 5px;
  border-color: #5799d4;
}

.error_button_search {
  margin-top: 30px;
  height: 40px;
  width: 105px;
  background-color: #5799d4;
  color: #ffffff;
  border-radius: 5px;
  border-color: #5799d4;
}

.icon_search {
  margin-right: 5px;
}

.serch_text {
  font-size: 15px;
}

</style>