import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: false,
  markdown: {
    image: {
      lazyLoading: true
    },
    math: true
  },
  vite: { 
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
      ], 
    }, 
  }, 
  lastUpdated: true,
  lang: 'zh-CN',
  base: '/',
  title: "RMVision-001",
  description: "西安交大视觉组教程",
  themeConfig: {
    sidebarMenuLabel:'目录', 
    returnToTopLabel:'返回顶部', 
    lastUpdated: {
      text: '上次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },
    footer: { 
      message: 'Released under the MIT License.', 
      copyright: 'Copyright © 2023-2024present XJTU-RMV', 
    }, 
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    editLink: { 
      pattern: 'https://github.com/XJTU-RMV/XJTU-RMV.github.io/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    }, 
    outline: {
      level: 'deep', // 显示2-6级标题
      label: '目录' // 文字显示
    },
    search: { 
      provider: 'local'
    }, 
    // logo: {
    //   src: '/logo.svg',
    //   alt: 'Logo: XiStudyGroup',
    // },
    siteTitle: false, //标题隐藏
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前言', link: '/前言/' },
      { text: '贡献指南', link: '/前言/贡献指南' },
      { text: '快速查阅', link: '/快速查阅/' },
      { text: '任务书', link: '/任务书/' },
    ],

    sidebar: [
      {
        text: '前言',
        link: '/前言/',
        collapsed: true,
        items: [
          { text: '贡献指南', link: '/前言/贡献指南' },
        ]
      },
      {
        text: '任务书',
        link: '/任务书/',
        collapsed: true,
        items: [
          { text: '安装 Ubuntu 20.04', link: '/任务书/Ubuntu' },
        ]
      },
      {
        text: '快速查阅',
        link: '/快速查阅/',
        collapsed: true,
        items: [
          { text: 'Windows 安装 C++ 环境', link: '/快速查阅/windows-cpp' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XJTU-RMV/XJTU-RMV.github.io' }
    ]
  }
})
