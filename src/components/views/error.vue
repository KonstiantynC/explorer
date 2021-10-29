<template>
  <div class="error_container">
    <div class="error_title">
      <fa size='2x' icon="exclamation-circle" class="error_icon" />
      <div class="error_item">
        <span>Sorry, '</span> 
          <div class="error_item_text">
            {{ $route.params.input }}
          </div>
        <span>' is not a valid address, transaction or block</span>
      </div> 
      <div class="error_text">
        hash is not found  
      </div>
    </div>
  </div>
</template>

<script>
import loader from './loader.vue'

export default {
  name: 'error',
  components: {
    loader
  },
  props: {
    input: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({

  }),
  mounted () {
    console.log(this.$route.params.input)
  }
}
</script>

<style>
.error_container {
  width: 100%;
  position: absolute;
  top: 38%;
}

.error_title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  margin-top: 10px;
  width: 100%;
}

.error_text {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
}

.error_icon {
  color: red;
  margin-right: 8px;
}

.error_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.error_item_text {
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 10px 0;
  color: #ff4d4d;
}


</style>
