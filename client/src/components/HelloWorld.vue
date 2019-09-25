<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div> {{ username }}</div>
    <v-btn color="#c0c0c0" light>Light</v-btn>
    <v-btn color="#303030" dark>Dark</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { getUsername } from '../services/AxiosServices'

@Component
export default class HelloWorld extends Vue {
  username: string = 'Jen'
  @Prop() private msg!: string

  getUsername1 () {
    getUsername()
      .then(data => {
        this.username = data.name
      })
  }

  created () {
    this.getUsername1()
  }
}

</script>

<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
