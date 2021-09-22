/* eslint-disable prettier/prettier */
import { shallowMount } from "@vue/test-utils";
import RadioButton from "@/components/RadioButton.vue";

describe("RadioButton.vue", () => {
  it("Find Parent Component Title", () => {
    const text = "Parent Component";
    const wrapper = shallowMount(RadioButton);
    expect(wrapper.find(".parent-component-title").text()).toMatch(text);
  });
});
describe("RadioButton.vue", () => {
  it("Find Sub Component Title", () => {
    const text = "Sub Component";
    const wrapper = shallowMount(RadioButton);
    expect(wrapper.find(".sub-component-title").text()).toMatch(text);
  });
});
describe("RadioButton.vue", () => {
  it("Find Radio Input Text", () => {
    const wrapper = shallowMount(RadioButton);
    expect(wrapper.find("#radio-parent-1").).toBeDefined();
  });
});
describe("RadioButton.vue", () => {
  it("Find Radio Date Picker", () => {
    const wrapper = shallowMount(RadioButton);
    expect(wrapper.find("#radio-parent-2")).toBeDefined();
  });
});
describe("RadioButton.vue", () => {
  it("Find Radio More Complex Form", () => {
    const wrapper = shallowMount(RadioButton);
    expect(wrapper.find("#radio-parent-3")).toBeDefined();
  });
});