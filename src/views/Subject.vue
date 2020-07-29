<template>
    <div id="subject">
        <v-app>
			<div id="grad">
				<v-container>
					<br>
				
					<v-row justify="center" align="center">
						<img height="100" width="100"  :src="$route.params.img != null ? $route.params.img : this.img "/>
					</v-row>
					<br>
					<v-row justify="center" align="center" class="mx-5">
						<div ><span>{{ $route.params.name  != null ? $route.params.name : this.name }}</span></div>
					</v-row>
					<br>
					<v-row justify="center" align="center" class="mx-5">
						<div><span>{{ $route.params.description != null ? $route.params.description : this.description }}</span></div>
					</v-row>
					<br>
					<v-row justify="center" align="center">
						<router-link :to="{ name:'SubjectPrep' , params:{ id: $route.params.id != null ? $route.params.id : this.id , name: $route.params.name != null ? $route.params.name : this.name }}" >
							<v-btn class="indigo" dark="">Prepare</v-btn>
						</router-link>
					</v-row>
					<br>
					<v-row justify="center" align="center">
						<router-link :to="{ name:'SubjectQnA', params:{ id: $route.params.id != null ? $route.params.id : this.id , name: $route.params.name != null ? $route.params.name : this.name  }}" >
							<v-btn class="indigo" dark="">Question-Answers</v-btn>
						</router-link>
					</v-row>
					<br>
					<v-row justify="center" align="center">
						<router-link :to="{ name:'SubjectMcQ' , params:{  id: $route.params.id != null ? $route.params.id : this.id , name: $route.params.name != null ? $route.params.name : this.name  }}">
							<v-btn class="indigo" dark="">Multiple Choice Questions</v-btn>
						</router-link>
					</v-row>
					<br>
					<v-row justify="center" align="center">
						<router-link :to="{ name:'SubjectMcQ' , params:{ id: $route.params.id != null ? $route.params.id : this.id , name: $route.params.name != null ? $route.params.name : this.name }}">
							<v-btn class="indigo" dark="">Take Quiz</v-btn>
						</router-link>
					</v-row>
					
				</v-container>
			</div>
		</v-app>
    </div>
</template>

<script>

import db from '@/fb'

export default {
	name: 'subject',
	data () {
		return {
			id: '',
			name: '',
			code: '',
			description: '',
			img: ''
		}
	},
	created () {

		var id = this.$route.params.id ;
		var name =  this.$route.params.name ;
		//console.log(id);

		if(name == null){
			
			//console.log('Null hai');
				let ref = db.collection('Subjects').doc(id)
        		ref.get().then(
             snapshot => {
                if (snapshot.exists) {
                    var post = snapshot.data();
					//console.log(post['Name']);
					this.name = post['Name'];
					this.description = post['Desc'];
					this.img = post['Image'];
					
					
                } else {
                    console.log("No such document!");
                }     
             }
         )

		
		}


    }

}
</script>




<style lang="scss" scoped>

// #grad {
// 	background-image: linear-gradient(#032b54, #34bbf8);
// 	height: 100%;
// }

</style>