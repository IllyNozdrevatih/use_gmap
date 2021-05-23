<template>
  <label class="checkbox-container">
    {{ label }}
    <input type="checkbox" checked="checked" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  props: {
    id: {
      type: String,
      default: () => uuidv4(),
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
/* The container */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 33px;
  cursor: pointer;
  font-size: 18px;
  letter-spacing: -0.5px;
  line-height: 1em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.checkbox-container:hover input ~ .checkmark {
  background-color: white;
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked ~ .checkmark {
  background-color: white;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 50%;
  top: 50%;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
