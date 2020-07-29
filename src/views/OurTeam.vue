<template>
    <div class="ourTeam">
        <v-app>
            <div id="grad">
                     <v-container class="my-5">
                    <v-row justify="center" class="my-2 white--text">
                        <h3 id="headin">OUR TEAM</h3>
                    </v-row>
                    <v-row justify="center" class="my-2 white--text">
                        <h5 id="headin">Team Leader</h5>
                    </v-row>
                    <v-layout row wrap justify-center="true">
                        <v-flex xs4 md3 v-for="person in teamLeader" :key="person.name">
                            <v-card class="text-center ma-md-5 ma-3">
                                <v-responsive class="pt-4">
                                    <v-avatar size="50">
                                        <img :src="person.avatar"/>
                                    </v-avatar>
                                </v-responsive>
                                <v-card-text>
                                    <div class="text-sm-button text-body2" style="color: black;">{{ person.name }}</div>
                                    <div class="grey--text text-caption">{{ person.role }}</div>
                                </v-card-text>
                                <v-card-actions class="center">
                                    <v-btn class="mx-2" fab dark small color="primary" absolute>
                                        <v-icon dark>mdi-linkedin</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-row justify="center" class="my-2 white--text">
                        <h5 id="headin">Web Developers</h5>
                    </v-row>
                     <v-layout row wrap justify-center="true">
                        <v-flex xs4 md3 v-for="person in WebDevelopers" :key="person.name">
                            <v-card class="text-center ma-md-5 ma-3">
                                <v-responsive class="pt-4">
                                    <v-avatar size="50">
                                        <img :src="person.avatar"/>
                                    </v-avatar>
                                </v-responsive>
                                <v-card-text>
                                    <div class="text-sm-button text-body2" style="color: black;">{{ person.name }}</div>
                                    <div class="grey--text text-caption">{{ person.role }}</div>
                                </v-card-text>
                                <v-card-actions class="center">
                                    <v-btn class="mx-2" fab dark small color="primary" absolute>
                                        <v-icon dark>mdi-linkedin</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>

                    <v-row justify="center" class="my-2 white--text">
                        <h5 id="headin">Flutter Developers</h5>
                    </v-row>
                     <v-layout row wrap justify-center="true">
                        <v-flex xs4 md3 v-for="person in FlutterDevelopers" :key="person.name">
                            <v-card class="text-center ma-md-5 ma-3">
                                <v-responsive class="pt-4">
                                    <v-avatar size="50">
                                        <img :src="person.avatar"/>
                                    </v-avatar>
                                </v-responsive>
                                <v-card-text>
                                    <div class="text-sm-button text-body2" style="color: black;">{{ person.name }}</div>
                                    <div class="grey--text text-caption">{{ person.role }}</div>
                                </v-card-text>
                                <v-card-actions class="center">
                                    <v-btn class="mx-2" fab dark small color="primary" absolute>
                                        <v-icon dark>mdi-linkedin</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>

                    <v-row justify="center" class="my-2 white--text">
                        <h5 id="headin">Marketing And Data Analysis</h5>
                    </v-row>
                     <v-layout row wrap justify-center="true">
                        <v-flex xs4 md3 v-for="person in FlutterDevelopers" :key="person.name">
                            <v-card class="text-center ma-md-5 ma-3">
                                <v-responsive class="pt-4">
                                    <v-avatar size="50">
                                        <img :src="person.avatar"/>
                                    </v-avatar>
                                </v-responsive>
                                <v-card-text>
                                    <div class="text-sm-button text-body2" style="color: black;">{{ person.name }}</div>
                                    <div class="grey--text text-caption">{{ person.role }}</div>
                                </v-card-text>
                                <v-card-actions class="center">
                                    <v-btn class="mx-2" fab dark small color="primary" absolute>
                                        <v-icon dark>mdi-linkedin</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </div>
        </v-app>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                teamLeader: [
                    { name: 'Hardik Vij', role: 'Team Leader', avatar: '/user.png'},
                 
                ],
                
                WebDevelopers: [
                    { name: 'Hardik Vij', role: 'Team Leader', avatar: '/user.png'},
                    { name: 'Mehak Bhatia', role: 'Web developer', avatar: '/user.png'},
                    { name: 'Aditi Chandra', role: 'Web developer', avatar: '/user.png'},
                    { name: 'xyz', role: 'App Developer', avatar: '/user.png'}
                ],
                
                FlutterDevelopers: [
                    { name: 'Hardik Vij', role: 'Team Leader', avatar: '/user.png'},
                    { name: 'Mehak Bhatia', role: 'Web developer', avatar: '/user.png'},
                    { name: 'Aditi Chandra', role: 'Web developer', avatar: '/user.png'},
                    { name: 'xyz', role: 'App Developer', avatar: '/user.png'}
                ]

            }
        }
    }
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Modak&display=swap');

#grad { 
     background-image: linear-gradient( #3594DD ,  #4563DB,
                  #5036D5,
                  #5B16D0);
   height: 100%;
}

#headin {
    font-family: cursive;
}

</style>