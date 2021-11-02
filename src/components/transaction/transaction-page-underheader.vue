<template>
  <div class="transaction__page">
    <div class="container__transaction"> 
      <div class="transaction__name">
        <div>
          <fa icon="exchange-alt" class="transaction_arrows_icon" />
        </div>
        <div class="transaction_name_item">
          Block Transaction: {{ transactionPageUnderheader.height }}
        </div>
      </div>  
      <div class="transaction_item_hash">
        <div>
          {{ transactionPageUnderheader.hash }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import image from '../img/bitcoin_icon.svg'

export default {
  name: 'transaction-page-underheader',
  props: {
    transactionPageUnderheader: {
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
  mounted () {

  }
}

</script>


<style>

.transaction__page {
  background: rgb(17,0,42);
  background: linear-gradient(90deg, rgba(17,0,42,1) 3%, rgba(51,0,185,1) 82%, rgba(82,0,150,1) 100%);
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0 0 0;
}

.container__transaction {
  width: 1260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
}

.transaction__name {
  font-size: 35px;
  color: #ffffff;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1140px;
  justify-content: flex-start;
}

.transaction_arrows_icon {
  color: #ffffff;
  margin-right: 15px;
}

.transaction_item_hash {
  width: 1050px;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
}



</style>
