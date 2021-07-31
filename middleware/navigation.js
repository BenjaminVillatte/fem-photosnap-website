export default function ({ store }) {
  if (!process.server) {
    store.dispatch('navigation/closeMenu')
    document.body.classList.remove('menu-opened')
  }
}
