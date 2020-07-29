<template>
  <div id="subjectprepare" class="mx-5">
    	<br>
        <h4  align="center"> {{ $route.params.name != null ? $route.params.name : this.name }} - Topics </h4>
        <br>

		<div>

		</div>
	</div>
</template>

<script>
import db from '@/fb'

export default {
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
          
            db.collection('Subjects').doc(id).collection('Prepare').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
               
               const data = {
                    id: doc.id,
                    quesno: this.count += 1 , 
                    ques: doc.data().name,
                    
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
              db.collection('Subjects').doc(id).collection('Prepare').doc(quesid).delete().then( ()=>{
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
 

                db.collection('Subjects').doc(id).collection('Prepare').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
               
               const data = {
                    id: doc.id,
                    quesno: this.count += 1 , 
                    ques: doc.data().name,
                    
                };
                this.quesans.push(data);
            })
            })

        
        }


        
        
  },
};
</script>