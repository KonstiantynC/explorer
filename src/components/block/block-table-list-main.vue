<template>
  <div>
   <div class="block__info">
      <ul class="block_main_info">
        <li>
          <span class="block_item_title">RECEIVED</span>
          <br>
          <fa icon="clock" class="block_clock_icon" />
          <time class="block_item_text">
            {{ blockDate(tableListMain.time) }}
          </time>

        </li>
        <li>
          <div>
            <span class="block_item_title">TOTAL TRANSACTED</span>
            <div class="block_item_text">
              {{ tableListMain.nonce }}
          </div>
          </div>
        </li>
        <li>
          <div>
            <span class="block_item_title">TOTAL FEES</span>
            <div class="block_item_text">
              {{ tableListMain.fee }}
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
  name: 'table-list-main',
  props: {
    tableListMain: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({

  }),
  methods: {
    blockDate () {
      return moment(this.tableListMain.time * 1000).fromNow()
    }
  }
}
</script>


<style>
.block__info {
  background-color: #e6e6e6;
  border: 1px solid #919191;
  border-radius: 8px;
  width: 1150px;
}

.block_main_info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  height: 80px;
  padding-right: 40px;
}

ul.block_main_info li {
  display: inline-block;  
}

.block_item_title {
  font-size: 14px;
  color: grey;
}

.block_item_text {
  font-size: 25px;
  font-weight: 600;
}

</style>
