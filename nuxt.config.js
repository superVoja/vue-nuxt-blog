const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Hoemadefood",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Not your typical food blog!"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["~assets/styles/main.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV == "production"
            ? "N8TCFBqqXRKBF3mZNdJwlgtt"
            : "GLf40XFowbuHx8hHJH5pFgtt",
        cacheProvider: "memory"
      }
    ]
  ],

  generate: {
    routes: function() {
      return axios
        .get(
          "https://api.storyblok.com/v1/cdn/stories?version=published&token=LNmSxvNQyuwC2Ghnlwr1mAtt&starts_with=blog&cv=" +
            Math.floor(Date.now() / 1e3)
        )
        .then(res => {
          const blogPosts = res.data.stories.map(bp => bp.full_slug);
          return ["/", "/blog", "/about", ...blogPosts];
        });
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Global transitions
   */
  pageTransition: {
    name: "fade",
    mode: "out-in"
  }
};
