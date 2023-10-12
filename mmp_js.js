var currentAudio;
var currentAudioURL;
var myspaceInterval;

$('.music_player_play_button').on("click",function(){
	if(currentAudioURL && (currentAudioURL = "SONG_URL")) {
		currentAudio.pause();
		currentAudio.currentTime = 0;
		currentAudioURL = undefined;
		clearInterval(myspaceInterval);
$('.music_player_visual_bar').children().remove();
$('.music_player_play_button').html(`<i class="fa-solid fa-play"></i>`);
		return;
	}
	$('.music_player_play_button').html(`<i class="fa-solid fa-pause"></i>`);
	currentAudioURL = "SONG_URL"
	currentAudio = new Audio(currentAudioURL);
	currentAudio.play();
	myspaceInterval = setInterval(myspaceVisualizer, 100);
});

function myspaceVisualizer(){
	for(i=0; i<8; i++){
		switch(i){
			case 0:
			case 7:
				if(rand(1,10) > 5){
					if($(`#visual_${i}`).children().length == 3){
						$(`#visual_${i}`).children().last().remove();
					} else {
						$(`#visual_${i}`).append(`<div class="music_player_visual_pip"></div>`);
					}
				} else {
					if(i == 0 && $(`#visual_${i+1}`).children().length == 0) {
						$(`#visual_${i}`).children().last().remove();
					} else if(i == 7 && $(`#visual_${i-1}`).children().length == 0) {
						$(`#visual_${i}`).children().last().remove();
					}
				}
				break;
			case 1:
			case 6:
				if(rand(1,10) > 5){
					if($(`#visual_${i}`).children().length == 4){
						$(`#visual_${i}`).children().last().remove();
					} else {
						$(`#visual_${i}`).append(`<div class="music_player_visual_pip"></div>`);
					}
				} else {
					$(`#visual_${i}`).children().last().remove();
				}
				break;
			case 2: 
			case 5:
				if(rand(1,10) > 5){
					if($(`#visual_${i}`).children().length == 5){
						$(`#visual_${i}`).children().last().remove();
					} else {
						$(`#visual_${i}`).append(`<div class="music_player_visual_pip"></div>`);
					}
				} else {
					$(`#visual_${i}`).children().last().remove();
				}
				break;
			case 3: 
			case 4:
				if(rand(1,10) > 5){
					if($(`#visual_${i}`).children().length == 7){
						$(`#visual_${i}`).children().last().remove();
					} else {
						$(`#visual_${i}`).append(`<div class="music_player_visual_pip"></div>`);
					}
				} else {
					$(`#visual_${i}`).children().last().remove();
				}
				break;
		}
	}
}

function rand(min,max){
	return Math.floor(Math.random() * max) + min;
}
