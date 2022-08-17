import { add } from "../src";
import { mount } from "@vue/test-utils";
import Hello from "../src/components/Hello.vue";
import testTsx from "../src/components/test";

test("first test", () => {
  expect(1 + 1).toBe(2);
});
//按F5调试错误
test("add", () => {
  expect(add(1, 1)).toBe(2);
});

test("vue-component", () => {
  mount(Hello);
});

test("vue-tsx", () => {
  mount(testTsx);
});
