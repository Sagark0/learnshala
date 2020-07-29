<template>
  <div class="CreateSub">
    <v-app>
      <div id="grad">
        <v-form v-model="valid" ref="form">
          <v-container>
            <v-row justify="center" align="center" class="mt-5">
              <v-col cols="9" sm="7" md="5" lg="4">
                <v-text-field
                  v-model="name"
                  label="Subject Name"
                  required
                  dark
                  filled
                  prepend-icon="mdi-folder"
                ></v-text-field>
              </v-col>

              <v-col cols="5" sm="4" md="3" lg="2">
                <v-text-field v-model="code" label="Subject Code" required dark filled></v-text-field>
              </v-col>
            </v-row>

            <v-row justify="center" align="center">
              <v-col cols="9" sm="7" md="5" lg="4">
                <v-textarea v-model="description" label="Description" required solo></v-textarea>
              </v-col>
            </v-row>

            <div>
              <div>
                <p>Upload an image to Firebase:</p>
                <input type="file" @change="previewImage" accept="image/*" />
              </div>
              <div>
                <p>
                  Progress: {{uploadValue.toFixed()+"%"}}
                  <progress
                    id="progress"
                    :value="uploadValue"
                    max="100"
                  ></progress>
                </p>
              </div>
              <div v-if="imageData!=null">
                <img class="preview" :src="picture" />
                <br />
              </div>
            </div>

            <br />
            <br />
            <br />
            <v-btn rounded width="100%" @click="onUpload">ADD SUBJECT</v-btn>
          </v-container>
        </v-form>
      </div>
    </v-app>
  </div>
</template>

<script>
import db from '@/fb';
import firebase from 'firebase';

export default {
  data() {
    return {
      name: "",
      code: "",
      description: "",
      imageUrl: "",
      valid: "",
      imageData: null,
      picture: "",
      uploadValue: 0
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = "";
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.picture = null;
      this.imageUrl = "";
      var moment = require("moment");
      var curr = moment().format("YYYYMMDDHHmmss");
      console.log(curr);
      const storageRef = firebase
        .storage()
        .ref(`Icons/${curr}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          this.imageUrl = storageRef.snapshot.ref
            .getDownloadURL()
            .then(downloadURL => {
              console.log("File available at", downloadURL);
              this.imageUrl = downloadURL;
              // return downloadURL ;

              db.collection("Subjects")
                .doc(curr)
                .set({
                  Name: this.name,
                  Code: this.code,
                  Desc: this.description,
                  Image: downloadURL
                });
            });

          console.log("File ---->  ", this.imageUrl);
        }
      );
    },
    submit() {
      console.log("File available at", downloadURL);
    }
  }
};
</script>

<style lang="scss" scoped>
#grad {
  background-image: linear-gradient(#032b54, #34bbf8);
  height: 100%;
}
.base-image-input {
  display: block;
  width: 200px;
  height: 200px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
.placeholder {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.placeholder:hover {
  background: #e0e0e0;
}
.file-input {
  display: none;
}
</style>
