<template>
  <div>
   <div class="transaction__info">
      <ul class="transaction_main_info">
        <li>
          <span class="transaction_item_title">RECEIVED</span>
          <br>
          <fa icon="clock" class="transaction_clock_icon" />
          <time class="transaction_item_text">
            {{ transactionDate(transactionListMain.time) }}
          </time>
        </li>
        <li>
          <div>
            <span class="transaction_item_title">SIZE</span>
            <div class="transaction_item_text">
              {{ transactionListMain.size }}
          </div>
          </div>
        </li>
        <li>
          <div>
            <span class="transaction_item_title">FEES COLLECTED</span>
            <div class="transaction_item_text">
              {{ transactionListMain.fee }}
            </div>
          </div>
        </li>
        <li>
          <div>
            <span class="transaction_item_title">FEES COLLECTED</span>
            <div class="transaction_item_text">
              {{ transactionListMain.fee }}
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
  name: 'transaction-list-main',
  props: {
    transactionListMain: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({

  }),
  methods: {
    transactionDate () {
      return moment(this.transactionListMain.time * 1000).fromNow()
    }
  }
}
</script>


<style>
.transaction__info {
  background-color: #e6e6e6;
  border: 1px solid #919191;
  border-radius: 8px;
  width: 1150px;

}

.transaction_main_info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  height: 80px;
  padding-right: 40px;
}

ul.transaction_main_info li {
  display: inline-transaction; 
  margin-right: 5px;  
  padding: 3px; 
}

.transaction_item_title {
  font-size: 14px;
  color: grey;
}

.transaction_item_text {
  font-size: 25px;
  font-weight: 600;
}

</style>
