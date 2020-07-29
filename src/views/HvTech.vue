<template>
    <div>
        <v-app>
            <div id="grad">
                <v-container>
                    <v-row justify="center" align="center" class="mt-5">
                        <img :src="require('../assets/hv.png')" height="70"/>
                    </v-row>
                    <v-row justify="center" align="center" class="white--text a">
                        <div>Hv Technologies</div>
                    </v-row>
                    <v-row justify="center" align="center" class="white--text my-3">
                        Mobile + Web Innovators
                    </v-row>
                    <v-row justify="center" align="center" class="white--text mx-15 mb-4 mt-6">
                        Whether you’re interested in developing an app for your start-up, giving your personal website a creative boost or building a business and looking to create a unique brand and presence online, our services are tailored to suit your specific requests.
                    </v-row>
                    <v-row>
                        <v-col class="text-center" cols="12">
                            <v-btn color="primary rounded-btn" target="_blank" href="https://hvtechnologies.github.io/Hv-Technologies-Website/">Website</v-btn>
                        </v-col>
                    </v-row>
                    <v-row class="mb-5">
                        <v-col class="text-center" cols="12">
                            <v-btn rounded color="primary rounded-btn" target="_blank" href="https://play.google.com/store/apps/developer?id=Hv+Technologies">Our Apps</v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-card class="mx-auto rounded-card" align="center" width="270px">
                            <div class="text-button grey--text">FOUNDER</div>
                            <div class="text-h6 mb-2">Hardik Vij</div>
                            <v-btn small target="_blank" href="https://hardikvij195.github.io/MyPortfolio/" color="primary">Portfolio</v-btn>
                            <br>
                            <br>
                        </v-card>
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

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

#grad {
    background-image: linear-gradient( #3594DD ,#5B16D0);
    height: 100%;
}

.a {
    font-family: 'Dancing Script', cursive;
    font-size: 1.8rem;
}

.rounded-card {
    border-radius:20px;
}

.rounded-btn {
    border-radius:10px;
}

</style>