<template>
  <div class="home">
    <v-app>
        <div id="grad">
            <v-form>
                <v-container>
                    <br>
                    <v-row justify="center" align="center" class="">
                    <img  v-scrollanimation class="mx-1" :src="require('../assets/logo.png')" height="70"/>
                </v-row>
                    <v-row justify="center" align="center" class="my-2 white--text">
                        WHAT WOULD YOU LIKE TO LEARN TODAY?
                    </v-row>
                    <v-row justify="center" color= "#fff"  >
                          <v-col cols="10" sm="8" md="8" lg="8">
                            <v-text-field dark label="Search here!" placeholder="Search Subject" outlined append-icon="mdi-magnify"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="white--text">
                        <h5>COURSES</h5>
                    </v-row>
                </v-container>
            </v-form>
            <v-container>
                <v-layout row wrap class="mb-5">
                    <v-flex xs4 md3 lg2 v-for="course in courses" :key="course.id">
                        <router-link :to="{ name:'Subject', params: { id: course.id, name: course.Name, code: course.Code, description: course.Desc, img: course.Image } }">
                            <v-card v-scrollanimation dark flat shaped color="rgba(0, 0, 0, 0.3)" class="text-center ma-3 links" height="140px">
                                <v-responsive class="pt-4">
                                    <v-avatar tile height="55" width="55">
                                        <img :src="course.Image"/>
                                    </v-avatar>
                                </v-responsive>
                                <v-card-text class="white--text pb-2">
                                    <div class="text-md-body-2 text-caption">{{ course.Name }}</div>
                                </v-card-text>
                            </v-card>
                        </router-link>
                    </v-flex>

                </v-layout>
            </v-container>
                   <v-container>
                <v-footer color="rgba(0, 0, 0, 0.0)">
                    <v-row justify="center" align="center" class="my-5 pt-1 white--text">
                       Available Natively For Android And iOS.
                    </v-row>
                    <v-row justify="center" align="center">
                        <div class="mr-5">
                            <a href="https://www.sharda.ac.in/">
                                <img :src="require('../assets/iosDownload.png')" height="60"/>
                            </a>
                        </div>
                        <div class="ml-5">
                            <a href="https://play.google.com/store/apps/developer?id=Hv+Technologies">
                                <img :src="require('../assets/androidDownload.png')" height="60"/>
                            </a>
                        </div>
                    </v-row>
                </v-footer>
            </v-container>

        </div>
    </v-app>
  </div>
</template>



<script>

import db from '@/fb'

export default {
    data () {
        return {
            courses: [],
            subs: {
                title: ""
            },
            id:'',

        }
    },
    created () {
        db.collection('Subjects').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                var subs = doc.data();
                subs.id = doc.id;
                this.courses.push(subs);
                //console.log(doc.id);
            })
        })
    }
}
</script>



<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

#grad {
//   background-image: linear-gradient(#000080, #0bb5ff);
//    background-image: linear-gradient(#032b54, #34bbf8);
   background-image: linear-gradient( #3594DD ,#5B16D0);
//    5036D5
   height: 100%;
}

.rounded-card{
    border-radius:50px;
}

.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0px);
}

#pow {
    font-family: 'Montserrat', sans-serif;
}

.links {
    text-decoration: none;
}

</style>