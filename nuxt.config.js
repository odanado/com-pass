module.exports = {
  plugins: [
    '~plugins/element-ui',
    '~plugins/touch-events',
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'こんぱす (Community Passport)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'こんぱすは脳梗塞患者の社会復帰に向けたコミュニティを見つけられるサイトです', name: 'こんぱす', content: 'こんぱすは脳梗塞患者の社会復帰に向けたコミュニティを見つけられるサイトです' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/normalize.css',
    'element-ui/lib/theme-chalk/index.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
