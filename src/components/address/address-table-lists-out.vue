<template>
  <div class="address_out">
    <div class="address_out_item">
      <span>
        <span class="address_out_fee">
          {{ addressTableListsOut.prev_out.value }}
        </span>
        BTC from
      </span> 
      <div>
        <fa icon="qrcode" class="address_qrcode_icon_out" />
        <router-link
          class="address_link" 
          :to="{ name: 'address', params: { addr: this.addressTableListsOut.prev_out.addr  }}"
        >
          {{ addressTableListsOut.prev_out.addr }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'address-table-lists-out',
  props: {
    addressTableListsOut: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({

  }),
  /*mounted() {
    console.log(this.addressTableListsOut)
  }*/
}
</script>


<style>
.address_out {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 15px 20px;
  margin: 0 0 10px 0;
  border-radius: 25px;
  border: 1px solid #e0e0e0;
  width: 380px; 
}

.address_qrcode_icon_out {
  color: #000000;
  margin-right: 10px;
}

.address_link {
  text-decoration: none;
}

.address_out_item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.address_out_fee {

}
</style>
