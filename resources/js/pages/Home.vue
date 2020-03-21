<template>
    <div class="container">
        <vue-element-loading :active="isActive" :is-full-screen="true" :size="'80'" :color="'#FF6700'"/>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <!-- search textbox -->
                home
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                searchText:'',
                movies: {},
                myMovies: {},
                isActive: false,
            }
        },

        methods: {
                searchMovie() {
                    this.isActive = true;
                    let query = this.searchText;
                    
                    var instance = axios.create();
                    delete instance.defaults.headers.common['X-CSRF-TOKEN'];
                    delete instance.defaults.headers.common['X-Requested-With'];
                    axios.get(baseURL + 'search/movie?api_key=' + apiKey + '&query=' + query)
                        .then((data) => {
                            this.movies = data.data
                            this.isActive = false;
                        })
                    .catch((error) => {
                        console.log("searchMovie had this error" + error)
                    })
                },
                
        },
        created() {
        }
    }
</script>
