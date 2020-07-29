<template>
    <div id="view-mcq">
		<br>
        <h4  align="center"> {{ $route.params.name != null ? $route.params.name : this.name }} - Multiple Choice Questions </h4>
        <br>
        <v-expansion-panels class="dark">
            <v-expansion-panel v-for="i in quesans" :key="i.quesid">
                    <v-expansion-panel-header >
                        
                            Q{{i.quesno}}. {{i.ques}}<br><br>
                            (a) {{i.op1}}<br><br>
                            (b) {{i.op2}}<br><br>
                            (c) {{i.op3}}<br><br>
                            (d) {{i.ans}}<br>
                        
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        
                            Answer: {{i.ans}}<br>
                            Explanation: {{i.explaination}}
                        
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
          
            db.collection('Subjects').doc(id).collection('McQ').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
               
               const data = {
                    id: doc.id,
                    quesno: this.count += 1 , 
                    ques: doc.data().ques,
                    ans: doc.data().ans,
                    op1: doc.data().op1,
                    op2: doc.data().op2,
                    op3: doc.data().op3,
                    explaination: doc.data().explaination,
                    
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
              db.collection('Subjects').doc(id).collection('McQ').doc(quesid).delete().then( ()=>{
                  this.refresh()
              }) ;
            }
        },
        Edit() {
            console.log('Edit McQ Clicked');
   
        },
        refresh(){

                var id = this.$route.params.id ;
                this.quesans = []
                this.count = 0
 

                db.collection('Subjects').doc(id).collection('McQ').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
               
               const data = {
                    id: doc.id,
                    quesno: this.count += 1 , 
                    ques: doc.data().ques,
                    ans: doc.data().ans,
                    op1: doc.data().op1,
                    op2: doc.data().op2,
                    op3: doc.data().op3,
                    explaination: doc.data().explaination,
                };
                this.quesans.push(data);
            })
            })

        
        }


        
        
  },
};
</script>