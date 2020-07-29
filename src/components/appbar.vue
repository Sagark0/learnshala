<template>
    <nav>
        <v-app-bar app clipped-left color="#472dcc">
        
            <router-link to="/">
                <img class="ml-5 mr-2" :src="require('../assets/logo.png')" height="50"/>
                <img :src="require('../assets/LEARNSHALA.png')" height="30"/>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text class="white--text links" to="/">Home</v-btn>
                <v-btn text class="white--text links" to="/about">About Us</v-btn>
                <v-btn text class="white--text links" to="/ourTeam">Our Team</v-btn>
            </v-toolbar-items>
            <router-link to="/Set">
                <img class="ml-2 hidden-sm-and-down" :src="require('../assets/sh8.png')" height="50"/>
                <img class="mr-2 hidden-sm-and-down" :src="require('../assets/shardaname.png')" height="50"/>
            </router-link>
            <router-link to="/HvTech">
                <img class="ml-2 hidden-sm-and-down" :src="require('../assets/hv.png')" height="40"/>
            </router-link>
            <v-app-bar-nav-icon class="hidden-md-and-up white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        
        <v-navigation-drawer v-model="drawer" app :clipped="$vuetify.breakpoint.mdAndUp" disable-resize-watcher color="#472dcc">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-content>
                        <v-list-item-title class="white--text ml-5 links" >{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>

import firebase from 'firebase';
// import Popup from './popup'

export default {
    // components: { Popup },
    data () {
        return {
            drawer: false,
            links: [
                { text:'Home', route:'/'},
                { text:'About Us', route:'/about'},
                { text:'Our Team', route:'/ourTeam'},
                { text:'Sharda University', route:'/Set'},
                { text:'Hv Technologies', route:'/hvTech'},
            ],
            isLoggedIn: false,
            currentUser: false
        }
    },
    created() {
        if(firebase.auth().currentUser) {
            this.isLoggedIn = true;
            this.currentUser = firebase.auth().currentUser.email;
        }
    },
    methods: {
        logout: function() {
            firebase.auth().signOut().then(() => {
                this.$router.go({ path: this.$router.path });
            })
        }
    }
}
</script>

<style lang="scss" scoped>

.links {
    text-decoration: none;
}

.animation {
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 0;
    background: #34bbf8;
    width: 100px;
    border-radius: 8px;
}

</style>