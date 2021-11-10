<template>
  <div class="address__page">
    <div class="container__address"> 
      <div class="address__name">
        <div>
          <fa icon="qrcode" class="address_qrcode_icon" />
        </div>
        <div class="address_name_item">
          Bitcoin Address {{ addressPageUnderheader.height }}
        </div>
      </div>  
      <div class="address_item_hash">
        <div>
          {{ addressPageUnderheader.address }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import image from '../img/bitcoin_icon.svg'

export default {
  name: 'address-page-underheader',
  props: {
    addressPageUnderheader: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data: () => ({
    info: [],
    image,
  })
}

</script>


<style>
.address__page {
  background: rgb(17,0,42);
  background: linear-gradient(90deg, rgba(17,0,42,1) 3%, rgba(51,0,185,1) 82%, rgba(82,0,150,1) 100%);
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0 50px 0;
}

.container__address {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
}

.address__name {
  font-size: 35px;
  color: #ffffff;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1140px;
  justify-content: flex-start;
}

.address_qrcode_icon {
  color: #ffffff;
  margin-right: 15px;
}

.address_item_hash {
  width: 1140px;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
}




</style>
