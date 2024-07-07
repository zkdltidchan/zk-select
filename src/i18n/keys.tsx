// const links = [
//   { to: "/", labelKey: keys.header.home },
//   { to: "/categories", labelKey: keys.header.categories },
//   { to: "/new-arrivals", labelKey: keys.header.new_arrivals },
//   { to: "/best-sellers", labelKey: keys.header.best_sellers },
//   { to: "/special-offers", labelKey: keys.header.special_offers },
//   { to: "/contact-us", labelKey: keys.header.contact_us },
//   { to: "/about-us", labelKey: keys.header.about_us },
//   { to: "/login", labelKey: keys.header.login },
//   { to: "/sign-up", labelKey: keys.header.sign_up },
//   { to: "/my-account", labelKey: keys.header.my_account }
// ];


const keys = {
  header: {
    home: 'header.home',
    about: 'header.about',
    language: 'header.language',
    openMenu: 'header.openMenu',
    closeMenu: 'header.closeMenu',
    title: 'header.title',

    // links: links
    cart: 'header.cart',
    products: {
      label: 'header.products.label',
      menTops: 'header.products.menTops',
      menSuits: 'header.products.menSuits',
      womenTops: 'header.products.womenTops',
      womenDresses: 'header.products.womenDresses',
      womenPants: 'header.products.womenPants',
      shirt: 'header.products.shirt',
      tshirt: 'header.products.tshirt',
      tops: 'header.products.tops',
      jacket: 'header.products.jacket',
      blouson: 'header.products.blouson',
      coat: 'header.products.coat',
      pants: 'header.products.pants',
      skirt: 'header.products.skirt',
      onepiece: 'header.products.onepiece',
      suit: 'header.products.suit',
      bag: 'header.products.bag',
      shoes: 'header.products.shoes',
      fashionZakka: 'header.products.fashionZakka',
      wallet: 'header.products.wallet',
      watch: 'header.products.watch',
      hairAccessory: 'header.products.hairAccessory',
      accessory: 'header.products.accessory',
      underwear: 'header.products.underwear',
      legwear: 'header.products.legwear',
      cap: 'header.products.cap',
      interior: 'header.products.interior',
      kitchen: 'header.products.kitchen',
      zakka: 'header.products.zakka',
      cosme: 'header.products.cosme',
      musicBooks: 'header.products.musicBooks',
      swimwear: 'header.products.swimwear',
      maternity: 'header.products.maternity',
      others: 'header.products.others',
    },
    profile: {
      label: 'header.profile.label',
      settings: 'header.profile.settings',
      logout: 'header.profile.logout'
    },
    styling: 'header.styling',
    newArrival: 'header.newArrival',

    menu: 'header.menu',

    favorites: 'header.favorites',
    search: 'header.search',


  },
  home: {
    title: 'home.title',
    subtitle: 'home.subtitle'
  }
} as const;


export type Keys = typeof keys;
export default keys;