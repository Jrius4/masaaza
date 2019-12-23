<style lang="scss" scoped>
$red: lighten(red, 30%);
$darkRed: darken($red, 50%);
.form-group label {
  display: block;
}
.alert {
    background: $red;
    color: $darkRed;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 50%;
    border: 1px solid $darkRed;
    border-radius: 5px;
}
</style>
<template>
  <div>
      <div v-if="message" class="alert">{{ message }}</div>
      <div v-if="!loaded">Loading...</div>
      <form @submit.prevent="onSubmit($event)">
        <div class="form-group">
            <label for="user_name">Title</label>
            <input id="user_name" v-model="article.title" />
        </div>
        <div class="form-group">
            <label for="user_email">Excerpt</label>
            <textarea id="user_email" type="text" v-model="article.excerpt"></textarea>
        </div>
        <div class="form-group">
            <button class="btn btn-md btn-info" :disabled="saving" type="submit">Update</button>
        </div>
    </form>
  </div>
</template>
<script>
import articleApi from '../api/articles';
export default {
  data() {
    return {
    message:null,
    loaded:false,
    saving:false,
      article: {
        id: null,
        title: "",
        excerpt: ""
      }
    };
  },
  methods: {
    onSubmit(event) {
        this.saving = true;
        articleApi.update(this.user.id,{
            title:this.article.title,
            excerpt:this.article.excerpt,
        }).then((response)=>{
            this.message = "User updated";
            setTimeout(()=>this.message = null,2000);
            this.article = response.data.data;
        }).catch(error=>{
            console.log(error)
        }).then(_=>this.saving = false)
    }
  },
  created() {
      articleApi.find(this.$route.params.id).then((response)=>{
          setTimeout(()=>{
                this.loaded = true;
                this.article = response.data.data;
          },5000);
      });
  }
};
</script>
