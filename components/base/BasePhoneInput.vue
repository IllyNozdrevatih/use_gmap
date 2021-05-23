<template>
  <div
    :class="{
      'text-black': focusFlag,
      'border-danger': hasError,
    }"
    class="input-field d-flex position-relative"
  >
    <label class="input-field__label position-absolute" :for="id">
      <span v-text="label" />
    </label>
    <div class="pl-100 w-100">
      <input
        ref="input"
        @focus="focusFlag = true"
        @blur="focusFlag = false"
        v-mask="{ mask: '+380-99-999-99-99', greedy: true }"
        v-on="{
          ...$listeners,
          input: (event) => onInputHandler(event.target.value),
        }"
        class="input-field__input w-100"
        :type="type"
        :id="id"
      />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  props: {
    id: {
      type: String,
      default: () => uuidv4(),
    },
    type: {
      type: String,
      default: 'text',
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    hasError: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      innerValue: '',
      focusFlag: false,
    }
  },
  methods: {
    onInputHandler(value = '') {
      this.innerValue = value
      this.$emit('input', value)
    },
  },
}
</script>
<style lang="scss" scoped>
.input-field {
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid;
  padding-bottom: 10px;
  &__label {
    left: 0;
    top: 0;
    font-size: 18px;
    margin-bottom: 0;
  }
  &.border-danger {
    border-bottom-color: #c4422b;
  }
  &__input {
    font-size: 18px;
    background-color: transparent;
    border: 0px;
    outline: unset;
    color: inherit;
  }
}
</style>
