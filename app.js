console.log(`Let's get this party started!`);

const inputForm = document.querySelector('input.input-form')
const searchButton = document.querySelector('button.search-but');
const removeButton = document.querySelector('button.remove-but');
const gifContainer = document.querySelector('div.gif-container');

function postGIF(result){
   let resLength = result.data.data.length;
   let ranIndex = Math.floor(Math.random() * resLength);
   let link = result.data.data[ranIndex].images.original.url;
   $('<img src="' + link + '">').appendTo(gifContainer);
   console.log(link);
}

searchButton.addEventListener("click", async function(e){
    e.preventDefault();
    let search = inputForm.value;
    inputForm.value = '';

    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: search,
            api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    });
    return postGIF(response);
});

removeButton.addEventListener('click', function(e){
    e.preventDefault();
    $('img').remove();
});