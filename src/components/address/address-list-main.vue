<template>
  <div>
   <div class="address__info">
      <ul class="address_main_info">
        <li>
          <span class="address_item_title">RECEIVED</span>
          <br>
          <time class="address_item_text">
            {{ addressListMain.total_received }}
          </time>
        </li>
        <li>
          <div>
            <span class="address_item_title">SENT</span>
            <div class="address_item_text">
              {{ addressListMain.total_sent }}
            </div>
          </div>
        </li>
        <li>
          <div>
            <span class="address_item_title">BALANCE</span>
            <div class="address_item_text">
              {{ addressListMain.final_balance }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import satoshiBitcoin from 'satoshi-bitcoin'

export default {
  name: 'address-list-main',
  props: {
    addressListMain: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({

  }),
  methods: {
    addressDate () {
      return moment(this.addressListMain.time * 1000).fromNow()
    }
  }
}
</script>


<style>
.address__info {
  background-color: #e6e6e6;
  border: 1px solid #919191;
  border-radius: 8px;
  margin-bottom: 25px;
}

.address_main_info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  width: 1060px;
  height: 80px;
  padding-right: 40px;
}

ul.address_main_info li {
  display: inline-address; 
  margin-right: 5px;  
  padding: 3px; 
}

.address_item_title {
  font-size: 14px;
  color: grey;
}

.address_item_text {
  font-size: 25px;
  font-weight: 600;
}

</style>
