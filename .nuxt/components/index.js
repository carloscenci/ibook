import { wrapFunctional } from './utils'

export { default as Chip } from '../../components/atoms/Chip.vue'
export { default as Logo } from '../../components/atoms/Logo.vue'
export { default as PageTitle } from '../../components/atoms/PageTitle.vue'
export { default as Container } from '../../components/bosons/Container.vue'
export { default as BookCard } from '../../components/molecules/BookCard.vue'
export { default as BookCategories } from '../../components/molecules/BookCategories.vue'
export { default as BookCover } from '../../components/molecules/BookCover.vue'
export { default as BookInfo } from '../../components/molecules/BookInfo.vue'
export { default as BookDetails } from '../../components/organisms/BookDetails.vue'
export { default as BookList } from '../../components/organisms/BookList.vue'
export { default as BookReader } from '../../components/organisms/BookReader.vue'
export { default as Dashboard } from '../../components/organisms/Dashboard.vue'
export { default as Footer } from '../../components/organisms/Footer.vue'
export { default as Header } from '../../components/organisms/Header.vue'
export { default as LoginForm } from '../../components/organisms/LoginForm.vue'
export { default as Presentation } from '../../components/organisms/Presentation.vue'
export { default as Releases } from '../../components/organisms/Releases.vue'
export { default as AboutTemplate } from '../../components/templates/AboutTemplate.vue'
export { default as BookDetailsTemplate } from '../../components/templates/BookDetailsTemplate.vue'
export { default as BookReaderTemplate } from '../../components/templates/BookReaderTemplate.vue'
export { default as DashboardTemplate } from '../../components/templates/DashboardTemplate.vue'
export { default as HomeTemplate } from '../../components/templates/HomeTemplate.vue'
export { default as LoginTemplate } from '../../components/templates/LoginTemplate.vue'

export const LazyChip = import('../../components/atoms/Chip.vue' /* webpackChunkName: "components/chip" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/atoms/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPageTitle = import('../../components/atoms/PageTitle.vue' /* webpackChunkName: "components/page-title" */).then(c => wrapFunctional(c.default || c))
export const LazyContainer = import('../../components/bosons/Container.vue' /* webpackChunkName: "components/container" */).then(c => wrapFunctional(c.default || c))
export const LazyBookCard = import('../../components/molecules/BookCard.vue' /* webpackChunkName: "components/book-card" */).then(c => wrapFunctional(c.default || c))
export const LazyBookCategories = import('../../components/molecules/BookCategories.vue' /* webpackChunkName: "components/book-categories" */).then(c => wrapFunctional(c.default || c))
export const LazyBookCover = import('../../components/molecules/BookCover.vue' /* webpackChunkName: "components/book-cover" */).then(c => wrapFunctional(c.default || c))
export const LazyBookInfo = import('../../components/molecules/BookInfo.vue' /* webpackChunkName: "components/book-info" */).then(c => wrapFunctional(c.default || c))
export const LazyBookDetails = import('../../components/organisms/BookDetails.vue' /* webpackChunkName: "components/book-details" */).then(c => wrapFunctional(c.default || c))
export const LazyBookList = import('../../components/organisms/BookList.vue' /* webpackChunkName: "components/book-list" */).then(c => wrapFunctional(c.default || c))
export const LazyBookReader = import('../../components/organisms/BookReader.vue' /* webpackChunkName: "components/book-reader" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboard = import('../../components/organisms/Dashboard.vue' /* webpackChunkName: "components/dashboard" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/organisms/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/organisms/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyLoginForm = import('../../components/organisms/LoginForm.vue' /* webpackChunkName: "components/login-form" */).then(c => wrapFunctional(c.default || c))
export const LazyPresentation = import('../../components/organisms/Presentation.vue' /* webpackChunkName: "components/presentation" */).then(c => wrapFunctional(c.default || c))
export const LazyReleases = import('../../components/organisms/Releases.vue' /* webpackChunkName: "components/releases" */).then(c => wrapFunctional(c.default || c))
export const LazyAboutTemplate = import('../../components/templates/AboutTemplate.vue' /* webpackChunkName: "components/about-template" */).then(c => wrapFunctional(c.default || c))
export const LazyBookDetailsTemplate = import('../../components/templates/BookDetailsTemplate.vue' /* webpackChunkName: "components/book-details-template" */).then(c => wrapFunctional(c.default || c))
export const LazyBookReaderTemplate = import('../../components/templates/BookReaderTemplate.vue' /* webpackChunkName: "components/book-reader-template" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardTemplate = import('../../components/templates/DashboardTemplate.vue' /* webpackChunkName: "components/dashboard-template" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeTemplate = import('../../components/templates/HomeTemplate.vue' /* webpackChunkName: "components/home-template" */).then(c => wrapFunctional(c.default || c))
export const LazyLoginTemplate = import('../../components/templates/LoginTemplate.vue' /* webpackChunkName: "components/login-template" */).then(c => wrapFunctional(c.default || c))
