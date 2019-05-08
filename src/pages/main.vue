<template>
    <v-app :dark="dark">
        <v-navigation-drawer 
          v-model='drawer' 
          :mini-variant="miniVariant" 
          persistent 
          enable-resize-watcher 
          :dark="dark"
          fixed
          app>
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                    <img src="../assets/logo.png">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                    <v-list-tile-title>虎哥</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider/>
            <!-- 左侧菜单 -->
            <v-list class="pt-0" dense>
                <v-list-group
                    v-model="item.active"
                    v-for="item in items"
                    :key="item.title"
                    :prepend-icon="item.action"
                    no-action
                    >
                    <!--一级菜单 -->
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <!-- 二级菜单 -->
                    <v-list-tile v-for="subItem in item.items" :key="subItem.title" :to="item.path + subItem.path">
                        <v-list-tile-content>
                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                        <v-icon>{{ subItem.action }}</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-content>
          <v-breadcrumbs>
            <v-icon slot="divider">chevron_right</v-icon>
            <v-breadcrumbs-item>{{item1}}</v-breadcrumbs-item>
            <v-breadcrumbs-item>{{item2}}</v-breadcrumbs-item>
          </v-breadcrumbs>
        <div>
            <router-view/>
        </div>
        </v-content>
    </v-app>
</template>
    
<script>
  import menus from "../menu";

  export default {
    data() {
      return {
        dark: false,// 是否暗黑主题
        drawer: true,// 左侧导航是否隐藏
        miniVariant: false,// 左侧导航是否收起
        title: '乐优商城后台管理',// 顶部导航条名称,
        menuMap:{}
      }
    },
    computed: {
      items() {
        return menus;
      },
      item1(){
        const arr = this.$route.path.split("/");
        console.log(arr[1])
        return this.menuMap[arr[1]].name;
      },
      item2(){
        const arr = this.$route.path.split("/");
        return this.menuMap[arr[1]][arr[2]];
      }
    },
    name: 'App',
    watch: {
    },
    created(){
      menus.forEach(m => {
        const p1 = m.path.slice(1);
        this.menuMap[p1] = {name:m.title};
        m.items.forEach(i => {
          this.menuMap[p1][i.path.slice(1)] = i.title;
        })
      })
    }
  }
</script>

<style scoped>
  .box {
    width: 90%;
  }
</style>
