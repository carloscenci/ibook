import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nuxt-instance'

interface LoginForm {
  email: string
  password: string
}

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  private token = ''

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private DELETE_TOKEN() {
    this.token = ''
  }

  @Action
  async login(form: LoginForm) {
    const accessToken = await $axios.$post('/login', form)

    $cookies.set('token', accessToken, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })

    this.context.commit('SET_TOKEN', accessToken)
  }

  @Action logout() {
    $cookies.remove('token')
    this.context.commit('DELETE_TOKEN')
  }

  @Action update() {
    this.context.commit('SET_TOKEN', $cookies.get('token'))
  }

  public get $token() {
    return this.token
  }
}