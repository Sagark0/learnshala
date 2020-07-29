<template>
  <div class="about">
    <v-app>
      <div id="grad">
        <v-container>
          <v-row justify="center" align="center" class="my-5">
            <img v-scrollanimation class="mx-2" :src="require('../assets/logo.png')" height="100" />
            <img v-scrollanimation class="mx-2" :src="require('../assets/LEARNSHALA.png')" height="52"/>
          </v-row>
          <v-row justify="center" align="center" class="mx-5 mb-5 ins white--text text-center">
            <v-col lg="9" class="center" align-self="center">
              <p class="font-weight-bold"> As we saw 2020 bringing in a transition, everyone went from classroom learning to home learning and we, at Sharda University, wanted to help and enhance learning through Learnshala. A platform that provides quality education, where learning process runs smooth and readily available for all subjects and users.</p>
              <br>
     
              <img v-scrollanimation class="mx-2" :src="require('../assets/sh8.png')" height="100" />
              <img v-scrollanimation class="mx-2" :src="require('../assets/hv.png')" height="100" />
              <br>
              <br>
              <h5 class="font-weight-bold ">SHARDA UNIVERSITY</h5>
              <h5 class="font-weight-bold">SCHOOL OF ENGINEERING & TECHNOLOGY</h5>
              <p class="font-weight-bold">An E-Learning platform brought to you by Hv Technologies in association with Sharda University, School of Engineering and Technology</p>
              <br>
         
              <img v-scrollanimation class="mx-2" :src="require('../assets/books.png')" height="100" />
              <img v-scrollanimation class="mx-2" :src="require('../assets/quiz.png')" height="100" />
              <br>
              <br>
              <h4 class="font-weight-bold">How Learnshala will help you?</h4>
              <p class="font-weight-bold">Learnshala provides knowledgeable information on subjects such as Java, Python, etc. and also gives relevant and precise study material. Here we also help your skills through various quizzes, MCQs and descriptive Question-Answers</p>            
            </v-col>
          </v-row>
        </v-container>
    
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

.ins {
  font-family: "PT Sans", sans-serif;
}

#grad {
    background-image: linear-gradient( #3594DD ,#5B16D0);
}

#pow {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
}
#p {
  font-size: 1.5rem;
}
</style>