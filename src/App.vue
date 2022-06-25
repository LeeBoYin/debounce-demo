<template>
  <div class="debounce-demo">
    <label>
      message: <input type="text" v-model="message">
    </label>
    <button @click="handleClickButton">
      alert message with 1000 ms debounce
    </button>
  </div>
</template>

<script>
import debounce from './debounce.js';

function alertMessage(message) {
  alert(message);
}

const debouncedAlertMessage = debounce(alertMessage, 1000);

export default {
  data() {
    return {
      message: 'hello Spaceship',
    };
  },
  methods: {
    handleClickButton() {
      debouncedAlertMessage(this.message);
    }
  },
};
</script>

<style>
.debounce-demo {
  display: grid;
  gap: 12px;
  justify-content: left;
}
</style>
