import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 配置对象
export default defineConfig({
  plugins: [vue()],
  // 配置资源别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 配置前端代理
  server: {
    proxy: {
      '/api': {
        target: 'https://randomuser.me/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  // autoprefix
  css: {
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', '> 1%'],
          grid: true,
        }),
        require('postcss-flexbugs-fixes'),
      ],
    },
  },
})
