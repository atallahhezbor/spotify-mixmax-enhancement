var albums = true;

var searchAlbums = function (query) {
	var type = albums ? 'album' : 'track'
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: type
        },
        success: function (response) {
        	if (albums) {
        		response['albums']['items'].forEach(function(item) {
        			$('#search-results').append(item['name'])
        		});	
        	} else {
        		response['tracks']['items'].forEach(function(item) {
        			$('#search-results').append(item['name'])
        		});	
        	}
        	
            
        }
    });
};

window.onload = function () {
	document.getElementById('search-form').addEventListener('submit', function (e) {
		e.preventDefault();
		searchAlbums(document.getElementById('search-box').value);
	}, false);


	$('.type-toggle').click(function(elem) {
		$('.selected-type').removeClass('selected-type');
		$(this).addClass('selected-type');
		albums = !albums;
	});
}