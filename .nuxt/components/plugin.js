import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Chip: () => import('../../components/atoms/Chip.vue' /* webpackChunkName: "components/chip" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/atoms/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  PageTitle: () => import('../../components/atoms/PageTitle.vue' /* webpackChunkName: "components/page-title" */).then(c => wrapFunctional(c.default || c)),
  Container: () => import('../../components/bosons/Container.vue' /* webpackChunkName: "components/container" */).then(c => wrapFunctional(c.default || c)),
  BookCard: () => import('../../components/molecules/BookCard.vue' /* webpackChunkName: "components/book-card" */).then(c => wrapFunctional(c.default || c)),
  BookCategories: () => import('../../components/molecules/BookCategories.vue' /* webpackChunkName: "components/book-categories" */).then(c => wrapFunctional(c.default || c)),
  BookCover: () => import('../../components/molecules/BookCover.vue' /* webpackChunkName: "components/book-cover" */).then(c => wrapFunctional(c.default || c)),
  BookInfo: () => import('../../components/molecules/BookInfo.vue' /* webpackChunkName: "components/book-info" */).then(c => wrapFunctional(c.default || c)),
  BookDetails: () => import('../../components/organisms/BookDetails.vue' /* webpackChunkName: "components/book-details" */).then(c => wrapFunctional(c.default || c)),
  BookList: () => import('../../components/organisms/BookList.vue' /* webpackChunkName: "components/book-list" */).then(c => wrapFunctional(c.default || c)),
  BookReader: () => import('../../components/organisms/BookReader.vue' /* webpackChunkName: "components/book-reader" */).then(c => wrapFunctional(c.default || c)),
  Dashboard: () => import('../../components/organisms/Dashboard.vue' /* webpackChunkName: "components/dashboard" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/organisms/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/organisms/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  LoginForm: () => import('../../components/organisms/LoginForm.vue' /* webpackChunkName: "components/login-form" */).then(c => wrapFunctional(c.default || c)),
  Presentation: () => import('../../components/organisms/Presentation.vue' /* webpackChunkName: "components/presentation" */).then(c => wrapFunctional(c.default || c)),
  Releases: () => import('../../components/organisms/Releases.vue' /* webpackChunkName: "components/releases" */).then(c => wrapFunctional(c.default || c)),
  AboutTemplate: () => import('../../components/templates/AboutTemplate.vue' /* webpackChunkName: "components/about-template" */).then(c => wrapFunctional(c.default || c)),
  BookDetailsTemplate: () => import('../../components/templates/BookDetailsTemplate.vue' /* webpackChunkName: "components/book-details-template" */).then(c => wrapFunctional(c.default || c)),
  BookReaderTemplate: () => import('../../components/templates/BookReaderTemplate.vue' /* webpackChunkName: "components/book-reader-template" */).then(c => wrapFunctional(c.default || c)),
  DashboardTemplate: () => import('../../components/templates/DashboardTemplate.vue' /* webpackChunkName: "components/dashboard-template" */).then(c => wrapFunctional(c.default || c)),
  HomeTemplate: () => import('../../components/templates/HomeTemplate.vue' /* webpackChunkName: "components/home-template" */).then(c => wrapFunctional(c.default || c)),
  LoginTemplate: () => import('../../components/templates/LoginTemplate.vue' /* webpackChunkName: "components/login-template" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
