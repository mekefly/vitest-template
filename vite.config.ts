/// <reference types="vitest"/>
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    //全局导出，不需要导入就可以直接使用几个基本的测试api
    globals: true,
    //虚拟dom,nodejs下测试web
    environment: "jsdom",
    //解决TypeError: Cannot read property 'modules' of undefined
    transformMode: {
      web: [/.tsx$/, /.jsx$/],
    },
  },
  plugins: [vueJsx(), vue()],
});
