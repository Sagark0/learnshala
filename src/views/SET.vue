<template>
    <div class="SET">
        <v-app>
            <div id="grad">
                <v-container>
                    <br>
                    <br>
                    <v-row justify="center" align="center">
                        <img :src="require('../assets/Sharda_Logo.png')" height="80"/>
                    </v-row>
                    <v-row justify="center" align="center" class="white--text a">
                        <div>SCHOOL OF ENGINEERING & TECHNOLOGY</div>
                    </v-row>
                </v-container>
                <v-container>
                    <v-row justify="center" align="center" class="white--text mx-10 my-5">
                        <div>
                            <p>The School of Engineering and technology (SET) is an open platform for diverse voices where teaching runs parallel to the real world and students are groomed to join the global workforce. SET is distinguished as one of the top-ranked engineering schools in India. The students at SET benefit through the professional grooming of renowned faculty and industry experts having experience of tackling pressing engineering problems. Students discover their passion in one of the various offered Engineering majors at the School of Engineering and technology.\n\n A student-centric pedagogy, project-based approach and design-driven curriculum provides students with an inclination for complex problem solving, design, innovation, and a passion for learning.</p>
                            <p>The mission of the School of Engineering and technology through its various programmes is to educate well-integrated individuals who possess technical and social competence to succeed in professional arenas and design solutions for global problems.</p>
                        </div>
                    </v-row>
                    <v-row class="mb-5">
                        <v-col class="text-center" cols="12">
                            <v-btn rounded color="primary rounded-btn" target="_blank"  href="https://www.sharda.ac.in/">Visit Website</v-btn>
                        </v-col>
                    </v-row>
                    
                </v-container>
            </div>
        </v-app>
    </div>
</template>



<script>
export default {
    
}
</script>



<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

#grad {
    background-image: linear-gradient( #3594DD ,#5B16D0);
    height: 100%;
}

.a {
    font-family: 'Staatliches', cursive;
    font-size: 1.5rem;
}

</style>