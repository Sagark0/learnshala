<template>
    <div id="view-qna">
		<br>
        <h4  align="center"> {{ $route.params.name != null ? $route.params.name : this.name }} - Questions-Answers </h4>
        <br>
        <v-expansion-panels class="dark">
            <v-expansion-panel v-for="i in quesans" :key="i.quesid">
                    <v-expansion-panel-header class="mx-3" >
                        	Q{{i.quesno}} : {{i.ques}}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="mx-3">
							Ans : {{i.ans}}
                    </v-expansion-panel-content>
                
            </v-expansion-panel>
        </v-expansion-panels>
    </div>   
</template>
<script>
import db from '@/fb'

export default {
  name: "dashboard",
  data() {
    return {
      quesans: [],
       count:0 ,
       name:''
    };
  },

  created() {


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
					this.name = post['Name'];		
				
                } else {
                    console.log("No such document!");
                }     
             }
         )

		
		}
          
            db.collection('Subjects').doc(id).collection('QnA').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
               
               const data = {
                    id: doc.id,
                    quesno: this.count += 1 , 
                    ques: doc.data().ques,
                    ans : doc.data().ans 
                  
                };
                this.quesans.push(data);
            })
        })
  },
    methods: {

        Del(quesid) {
            var id = this.$route.params.id ;
            console.log('Delete Clicked - ' + quesid);
            console.log('Delete Sub Id - ' + id);
            
            if(confirm ('Are you sure?')) {
              db.collection('Subjects').doc(id).collection('QnA').doc(quesid).delete().then( ()=>{
                  this.refresh()
              }) ;
            }
        },
        Edit() {
            console.log('Edit Clicked');






   
        },
        refresh(){

                var id = this.$route.params.id ;
                this.quesans = []
                this.count = 0
 

                db.collection('Subjects').doc(id).collection('QnA').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
               
               const data = {
                    id: doc.id,
                    quesno: this.count += 1 , 
                    ques: doc.data().ques,
                    ans : doc.data().ans 
              
                };
                this.quesans.push(data);
            })
            })

        
        }


        
        
  },
};
</script>
<style lang="scss" scoped>
    .v-expansion-panel-header {
        background: transparent;
    }
</style>
