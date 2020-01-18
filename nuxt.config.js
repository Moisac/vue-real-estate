
export default {
  mode: 'spa',

  generate: {
    routes: [
      '/properties/1',
      '/properties/2',
      '/properties/3',
      '/properties/4',
      '/properties/5',
      '/properties/6',
      '/properties/7',
      '/properties/8',
      '/properties/9',
      '/properties/10'
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    { src: '~/plugins/vue-date-pick', ssr: false },
    { src: '~/plugins/vue-chartjs.js', ssr: false },
    {src: '~/plugins/vue-dropzone', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      'assets/scss/_variables.scss'
    ]
  },


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
