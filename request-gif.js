

var ajaxson5 = new Vue({
    el: '#mount-point',
    data: function () {
        return {
            tagValue: 'jackson 5',
            errorMessage: null,
            loadingMessage: 'Giphy loading',
            loading: false,
            imgSrc: null,
            inputData: ""
        };
    },
    methods: {
        fetchGif: function() {
            // get the user's input text from the DOM
            var searchQuery = this.inputData;   
            var api_key = "dc6zaTOxFJmzC";
            var tag = this.tagValue + ' ' + this.inputData;

            this.loading = true;

            // TODO what do we want this URL to be?
            fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`)
                .then(response => response.ok ? response.json() : 
                 Promise.reject(response))
                .then(response => {
                    // if the response comes back successfully, the code in here will execute.

                    console.log("we received a response!");
                    console.log(response);
                    this.loading = false;
                    
                    this.imgSrc = response.data.image_url;
                    console.log(response);
                
                })
                .catch(err => {
                    // if something went wrong, the code in here will execute instead of the success function

                    this.loading = false;
                    this.errorMessage = 'Sorry, could not load GIF. Try again!';

                    
                });
                  
            },   


    },
});
