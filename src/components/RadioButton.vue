/* eslint-disable prettier/prettier */
<template>
  <div style="width: 100%; display: flex; justify-content: center;">
    <div class="card" style="width: 40%;">
      <div class="row g-0">
        <div class="col-md-4">
          <div class="card-body">
            <h5 class="card-title parent-component-title">Parent Component</h5>
            <div class="form-check" v-for="item in radios" :key="item.value">
              <input
                class="form-check-input radio-parent"
                type="radio"
                name="radioParent"
                :id="'radio-parent-' + item.value"
                :value="item.value"
                v-model="selectedParent"
              />
              <label
                class="form-check-label"
                :for="'radio-parent-' + item.value"
              >
                {{ item.text }}
              </label>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title sub-component-title">Sub Component</h5>
            <div
              class="form-check"
              v-for="item in getSubComponentItems"
              :key="item.value"
            >
              <input
                class="form-check-input"
                type="radio"
                name="radioChild"
                :id="'radio-sub-component-' + item.value"
                :value="item.value"
                v-model="selectedChild"
              />
              <div v-if="item.type === 'text'">
                <label
                  :class="`form-check-label text-${item.value}`"
                  :for="'radio-sub-component-' + item.value"
                >
                  {{ item.text }}
                </label>
              </div>
              <div v-else>
                <div v-for="(x, i) in item.type" :key="i">
                  <div v-if="x === 'input'">
                    <input
                      type="text"
                      :class="`form-control input-${i}`"
                      :disabled="selectedChild !== item.value"
                      v-model="inputValue"
                    />
                    <br />
                  </div>
                  <div v-else-if="x === 'date'">
                    <input
                      type="date"
                      :class="`form-control date-${i}`"
                      :disabled="selectedChild !== item.value"
                      v-model="dateValue"
                    />
                    <br />
                  </div>
                  <div v-else-if="x === 'textarea'">
                    <textarea
                      :class="`form-control textarea-${i}`"
                      :disabled="selectedChild !== item.value"
                      v-model="textareaValue"
                    ></textarea>
                    <br />
                  </div>
                  <div v-else-if="x.includes('button')">
                    <button
                      type="button"
                      :class="`btn btn-${x.split('|')[1]} button-${i}`"
                      :disabled="selectedChild !== item.value"
                    >
                      {{ x.split('|')[2] }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-0">
        <div class="col-md-4">
          <div class="card-body">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Get Value
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Value</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              <b>Parent Component : {{ getSelectedParentComponent }}</b>
            </p>
            <p><b>Sub Component :</b></p>
            <p>Input Value : {{ inputValue }}</p>
            <p>Date Value : {{ dateValue }}</p>
            <p>Textarea Value : {{ textareaValue }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RadioButton',
  props: ['radios'],
  data() {
    return {
      selectedParent: 0,
      selectedChild: 0,
      inputValue: '',
      dateValue: '',
      textareaValue: '',
    }
  },
  computed: {
    getSubComponentItems() {
      if (this.selectedParent === 0) {
        return []
      }
      return this.radios.find((x) => x.value === this.selectedParent).children
    },
    getSelectedParentComponent() {
      if (this.selectedParent === 0) {
        return ''
      }
      return this.radios.find((x) => x.value === this.selectedParent).text
    },
    getInputValue() {},
  },
}
</script>
<style></style>
