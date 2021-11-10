<template>
  <div class="address_input">
    <div class="address_inputs_item">
      <span>
        <span class="address_input_fee">
          {{ addressTableListsInput.prev_out.value }}
        </span>
        BTC from
      </span> 
      <router-link
        class="address_link" 
        :to="{ name: 'address', params: { addr: this.addressTableListsInput.prev_out.addr  }}"
      >
        {{ addressTableListsInput.prev_out.addr }}
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'address-table-lists-input',
  props: {
    addressTableListsInput: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({

  }),
  methods: {
    convertSatoshiFee() {
      
    }
  },
  /*mounted() {
    console.log()
  }*/
}
</script>


<style>
.address_link {
  text-decoration: none;
}

.address_input {
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

.address_inputs_item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

</style>
