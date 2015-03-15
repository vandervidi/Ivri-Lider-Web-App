var player,
    albumsData,
    sHtml,
    albumReleaseYear,
    selectedAlbum,
    selectedSongName;

$(window).load(function() {
	$.ajax({
		type : "GET",
		url : "includes/json/albums.json",
		success : function(data) {
			albumsData = data;
			startSite();
		},
		error : function(objRequest, errortype) {
			console.log("Failed reading Json file... ");
		}
	});
});

function startSite() {

	//initialize youtube player
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	//populate the albums colums
	$.each(albumsData.albums, function(key, val) {

		sHTML = "<li><section>" + val.albumName + "</section></li>" + "<ul><li class='albumCoverHolder'><img src='" + val.albumCroverPhoto + "'></li></ul>";
		$("#music_accordion").append(sHTML);

	});

	$("#music_accordion > li").click(function() {

		//if the songs column is hidden then make it visible
		$("#music_songsListHolder").css("display", "block");

		//stop any playing videos
		player.stopVideo();

		//hide video and lyrics holder
		$("#music_lyricsAndVideoHolder").css("display", "none");

		//The following manages the accordion events
		if (false == $(this).next().is(':visible')) {
			$('#music_accordion > li').css("color", "#FFFFFF");
			$(this).css("color", "#ff3300");
			$('#music_accordion > ul').slideUp(300);

			//fill songsColumn with songs from the clicked album
			//save clicked album name
			selectedAlbum = $(this).text();

			//iterate all albums
			$.each(albumsData.albums, function(key, val) {

				if (selectedAlbum == val.albumName) {
					$("#music_songsList").empty();

					// clear any children elements before appending songs
					albumReleaseYear = val.albumReleaseYear;
					$("#music_albumDate").html(albumReleaseYear);

					//populate the albums colums
					$.each(val.songs, function(key, val) {
						//Create new 'li' element
						sHTML = "<li><section>" + val.songName + "</section><section class='music_arrowPlaceholder music_hideArrow'><section></li>";
						//append new element to the list of songs
						$("#music_songsList").append(sHTML);
					});

					//Click event handler for songs
					$("#music_songsList li > section").click(function() {

						//Handle Arrow visibility
						// hide all arrows
						$("#music_songsList li section:nth-child(2) ").each(function(index) {

							if ($(this).hasClass("music_showArrow") == true) {
								$(this).removeClass('music_showArrow').addClass('music_hideArrow');
							}
						});
						//Show the arrow that is associated to the song clicked
						$(this).next().removeClass('music_hideArrow').addClass('music_showArrow');

						//Handle songs stuff
						selectedSongName = $(this).text();
						//show the lyrics and video holder
						$("#music_lyricsAndVideoHolder").css("display", "block");

						//iterate and find the selected song
						$.each(albumsData.albums, function(key, val) {
							if (val.albumName == selectedAlbum) {
								$.each(val.songs, function(key, val) {
									if (selectedSongName == val.songName) {
										//change the video src for this song
										player.loadVideoById(val.youtubeLink);

										//change the lyrics text
										$("#music_lyrics").html(val.lyrics);
									}
								});
							}
						});

					});
				}
			});
		} else {
			//This happenes when none of the albums is selected
			$("#music_accordion > li").css("color", "#FFFFFF");
			//Change all albums names font color to white
			$("#music_songsListHolder").css("display", "none");
			//hide the video and lyrics column
			$("#music_lyricsAndVideoHolder").css("display", "none");
		}

		$(this).next().slideToggle(300);

	});
}

//Youtube API functions
function onYouTubeIframeAPIReady() {
	player = new YT.Player('music_player', {
		height : '170',
		width : '270',
		playerVars:{iv_load_policy:3,autohide:1,showinfo:0},
		videoId : '',
		events : {
			'onReady' : onPlayerReady,
			'onStateChange' : onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {
	event.target.playVideo();
}

function stopVideo() {
	player.stopVideo();
}

function onPlayerStateChange(event) {

}