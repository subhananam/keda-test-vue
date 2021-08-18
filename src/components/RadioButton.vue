<template>
  <div class="card" style="width: 40%;">
    <div class="row g-0">
      <div class="col-md-4">
        <div class="card-body">
          <h5 class="card-title">Parent Component</h5>
          <div class="form-check" v-for="item in radios" :key="item.value">
            <input
              class="form-check-input"
              type="radio"
              name="radioParent"
              :id="'radio' + item.value"
              :value="item.value"
              v-model="selectedParent"
            />
            <label class="form-check-label" :for="'radio' + item.value">
              {{ item.text }}
            </label>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Sub Component</h5>
          <div
            class="form-check"
            v-for="item in getSubComponentItems"
            :key="item.value"
          >
            <input
              class="form-check-input"
              type="radio"
              name="radioChild"
              :id="'radio' + item.value"
              :value="item.value"
              v-model="selectedChild"
            />
            <div v-if="item.type === 'text'">
              <label class="form-check-label" :for="'radio' + item.value">
                {{ item.text }}
              </label>
            </div>
            <div v-else>
              <div v-for="(x, i) in item.type" :key="i">
                <div v-if="x === 'input'">
                  <input
                    type="text"
                    class="form-control"
                    :disabled="selectedChild !== item.value"
                  />
                  <br />
                </div>
                <div v-else-if="x === 'date'">
                  <input
                    type="date"
                    class="form-control"
                    :disabled="selectedChild !== item.value"
                  />
                  <br />
                </div>
                <div v-else-if="x === 'textarea'">
                  <textarea
                    class="form-control"
                    :disabled="selectedChild !== item.value"
                  ></textarea>
                  <br />
                </div>
                <div v-else-if="x.includes('button')">
                  <button type="button" :class="`btn btn-${x.split('|')[1]}`" :disabled="selectedChild !== item.value">{{x.split('|')[2]}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RadioButton",
  props: ["radios"],
  data() {
    return {
      selectedParent: 0,
      selectedChild: 0,
    };
  },
  computed: {
    getSubComponentItems() {
      if (this.selectedParent === 0) {
        return [];
      }
      return this.radios.find((x) => x.value === this.selectedParent).children;
    },
  },
};
</script>
<style></style>
