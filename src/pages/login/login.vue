<template>
  <v-app>
    <v-content>
      <v-dialog :value='true' persistent max-width="400px">
          <v-card hover='' style='background:white'>
            <v-card-title class='white--text deep-purple darken-1'>
                登录
            </v-card-title>
            <v-card-text class='pt-4'>
                <v-form action='login' :fields='fields' @success='onSuccess' submitButtonText="Login">
                  <v-text-field v-model="username" label="登录名" required>
                  </v-text-field>
                  <v-text-field v-model="password" label="密码" required>
                  </v-text-field>
                  <v-layout wrap>
                  <v-flex xs2 offset-xs2>
                    <v-btn color="info" @click="login">
                      登录
                    </v-btn>
                  </v-flex>
                  <v-flex xs2 offset-xs3>
                  <v-btn color="info" @click="register">
                    注册
                  </v-btn>  
                  </v-flex>
                  </v-layout>
                  <span>
                    <a rel="nofollow" href="">
                     忘记密码</a>？
                  </span>
                </v-form>
            </v-card-text>
          </v-card>
      </v-dialog>
    </v-content>
  </v-app>
</template>

<style>
  body{
    background: #666 !important;
  }

</style>
<script>

export default {

  data () {
    return {
      username: 'admin',
      password: '123456',

      fields: {
        username: { label: 'Username' },
        password: { label: 'Password', type: 'password' }
      },
      show: true
    }
  },
  methods: {
    onSuccess (data) {
      this.$store.commit('setAuth', data)
      this.$router.replace('/')
    },
    login (data) {
      console.log(this.$router)
      this.$router.push({ path: '/home' })
    },
    register (data) {
      this.$router.push("/home")
    }
  },

  mounted () {
  }
}
</script>
