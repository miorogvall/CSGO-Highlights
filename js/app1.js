$(document).ready(function () {
    var newArray = []
    
    var timer = 1000;
    //om ingen sök har gjorts, hämta nyaste videon.
    

    //Trigga användarens sök på keyup
    $('#search-input').on('change', function () {
        
        //byt ut mellanrum i sökrutan mot + och lägg till + i början
        var searchInput = $(this).val();
        var replaced = searchInput.replace(/ /g, '+');
        var searchString = "+" + replaced;
        
        // rensa timer på keyup om ny keyup görs
        if (timer !== null) {
            clearTimeout(timer);
        }
        // Sökning som triggar på tid efter sista keyup
        timer = setTimeout(function () {

            // Om sökfältet blir tomt, hämta video. Om sök görs hämta JSON med sökparametrar inbakade
            if ($('#search-input').val().length < 1) {

                var redditURL = "https://www.reddit.com/r/GlobalOffensive/search.json?q=url%3Aclips.twitch.tv&restrict_sr=on&sort=new&t=month";

            } else {
                var redditURL = "https://www.reddit.com/r/GlobalOffensive/search.json?q=url%3Aclips.twitch.tv" + searchString + "&restrict_sr=on&sort=relevance&t=all";

                
                    }
            
            // hämta JSON baserat på sökresultat från if/else ovan
           $.getJSON(redditURL, function (CSGOhighlight) {
            
            $.each(CSGOhighlight.data.children, function (index, item) {
            newArray.push(item.data.title, item.data.url);

            });
                
                var url = CSGOhighlight.data.children[0].data.url;
                var directVideoLink = CSGOhighlight.data.children[0].data.media.oembed.thumbnail_url;
                directVideoLink = directVideoLink.replace("-preview.jpg", ".mp4");
              
                console.log(newArray);
            
        
           $('#mainvideo').attr('src', directVideoLink);

            var currentVideo = $('#mainvideo').attr('src');
            console.log(currentVideo);
               console.log(newArray[0]);
               console.log(newArray[1]);

              
                

            
});

 /*ajaxToPHP(searchString);*/
 generateRelatedVideos(searchString);

}, 1000);
 

    }); 

function getVideo(searchString) {
    $.getJSON("https://www.reddit.com/r/GlobalOffensive/search.json?q=url%3Aclips.twitch.tv" + searchString + "&restrict_sr=on&sort=relevance&t=all", function (CSGOhighlight) {

        var url = CSGOhighlight.data.children[0].data.url;
        var directVideoLink = CSGOhighlight.data.children[0].data.media.oembed.thumbnail_url;
        console.log(directVideoLink);
        console.log(url);
        directVideoLink = directVideoLink.replace("-preview.jpg", ".mp4");
        console.log("modified link is:" + directVideoLink);
        document.getElementById('mainvideo').src = directVideoLink;
        console.log(CSGOhighlight.data.children[0].data);

        /*$.getJSON(url, function (streamableHTML) {
            
            if (timer !== null) {
                clearTimeout(timer);
            }
            $('#videocontent').attr('src', "https://streamable.com/e/" + streamableHTML.html.substring(182, 186) + "?autoplay=1");
            timer = setTimeout(function () {

                $('#videotitle').append(CSGOhighlight.data.children[0].data.title.substring(0, 60));
                console.log(CSGOhighlight.data.children[0].data.title);
                // var uniqueURL1 = .substring(25, 29);
                console.log(streamableHTML.html.substring(182, 186));

            }, 1000);

        }); //stäng StreamableHTML*/


    }); //Stäng CSGOhighlight 

    generateRelatedVideos();
    }


function generateRelatedVideos(searchTerm) {



$.getJSON("https://www.reddit.com/r/GlobalOffensive/search.json?q=url%3Aclips.twitch.tv" + searchTerm + "&restrict_sr=on&sort=relevance", function (CSGOhighlight) {
        var i = 0;

        $('.videoThumbnail').remove();
       for (i = 0; i < 11; i++) { 

          
           var currentItem = CSGOhighlight.data.children[i].data.media.oembed.thumbnail_url;
           var currentThumb = CSGOhighlight.data.children[i].data.thumbnail;
           var currentItemText = CSGOhighlight.data.children[i].data.title;
           
            console.log(CSGOhighlight);
           
           var newThumbnailDiv = document.createElement('div');
           newThumbnailDiv.classList.add('videoThumbnail');
           var newThumbnail = document.createElement('img');
           var newText = document.createElement('p');
           newText.classList.add('thumbdesc');
           var textNode = document.createTextNode(currentItemText);
           newText.appendChild(textNode);

         
           newThumbnail.classList.add('thumbnail');
           newThumbnailDiv.appendChild(newThumbnail);
           newThumbnailDiv.appendChild(newText);
           newThumbnail.setAttribute('src', currentThumb);

           var modifiedSrc = currentItem.replace("-preview.jpg", ".mp4");
           newThumbnail.setAttribute('link', modifiedSrc);
           
           $('.sidebar').append(newThumbnailDiv);



}


          });

}

$('.tags').click(function() {



var tagText = $(this).text();
tagText = tagText.replace('#', '');
document.getElementById("search-input").value = tagText;
getVideo(tagText);
console.log('tag clicked');

});
 
 /*document.getElementById('myVideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        if(!e) { e = window.event; }
        alert("Video Finished");
    }
    
      var titleCounter = 0;
        var videoCounter = 1;
console.log(newArray);*/

/*function ajaxToPHP(searchTerm) {

searchTerm = searchTerm.replace(/\+/g, " ");
searchTerm = searchTerm.trim();
console.log(searchTerm);

$('#submitsearch').trigger('submit');
$('#submitsearch').submit(function(e) {

e.preventDefault;

$.ajax({
  type: "POST",
  url: 'savetoxml.php',
  data: searchTerm,
});

});


                    


}*/
    
   

$('body').on('click', '.videoThumbnail', function() {


    var getLink = $(this).find('.thumbnail').attr('link');
    var getText = $(this).find('.thumbdesc').text();
    console.log('item clicked');
    $('#mainvideo').attr('src', getLink);


    $('#videotitle').text(getText);
    


    });
    

});