
var ajaxson5 = new Vue({
    el: '#mount-point',
    data: function () {
        return {
            tagValue: "jackson 5",
            errorMessage: null,
            loadingMessage: null,
            loading: false,
            imgSrc: null,
            inputData: ""
        };
    },
    methods: {
        fetchGif: function() {
            // get the user's input text from the DOM
            var searchQuery = this.inputData;   // TODO should be e.g. "dance"
//my Qs - something with this variable and Vue is not working.  
            // configure a few parameters to attach to our request
            var api_key = "dc6zaTOxFJmzC";
            var tag = this.tagValue + ' ' + this.inputData;

            this.loading = true;
            this.loadingMessage = "Loading your giphy...be patient!";

            // TODO what do we want this URL to be?
            fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`)
                .then(response => response.ok ? response.json() : Promise.reject(response))
                .then(results => {
                    // if the response comes back successfully, the code in here will execute.

                    console.log("we received a response!");
                    console.log(results);
                    this.loading = false;
                    //this.tagValue = response.results;
                    
                    this.imgSrc = response.data.image_url;
                
                    return this.imgSrc;
           // TODO // 1. set the imgSrc value in our data to the GIF's image_url inside results
                
                    // 2. clear the error message and loading state (since our request just succeede)
                })
                .catch(err => {
                    // if something went wrong, the code in here will execute instead of the success function

                    this.loading = false;
                    this.errorMessage = 'Sorry, could not load GIF. Try again!';

                    
                });
                this.loading = true;
                this.errorMessage = 'Giphy loading';  
            },   
        
                 

              // TODO We've just made a request, so this is a good time to
            // set "loading = true"


    },
});
