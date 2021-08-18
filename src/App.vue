<template>
  <RadioButton :radios="radios" />
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import RadioButton from "./components/RadioButton.vue";

export default {
  name: "App",
  components: {
    RadioButton,
  },
  data() {
    return {
      radios: [
        {
          value: 1,
          text: "Input Text",
          children: [
            {
              value: 11,
              type: ["input"],
            },
            {
              value: 12,
              type: "text",
              text: "Text Example",
            },
          ],
        },
        {
          value: 2,
          text: "Date Picker",
          children: [
            {
              value: 21,
              type: ["date"],
            },
            {
              value: 12,
              type: "text",
              text: "Date Picker Example",
            },
          ],
        },
        {
          value: 3,
          text: "More Complex Form",
          children: [
            {
              value: 31,
              type: ["input", "date", "textarea", "button|primary|Save"],
            },
            {
              value: 32,
              type: "text",
              text: "More Complex Form Example",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
