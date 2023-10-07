
/*video iframe state*/
let ytPlayer;

function onYouTubeIframeAPIReady() {
	ytPlayer = new YT.Player('ytPlayer', {
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {}

function onPlayerStateChange(event) {
	const img = document.querySelector('.video-poster');

	if (event.data == YT.PlayerState.PLAYING) 
		img.classList.add('hide');
	else img.classList.remove('hide');
}
