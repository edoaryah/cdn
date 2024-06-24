// Script untuk mengontrol video
const video = document.getElementById('myVideo');

// Event listener untuk saat video dimuat
video.addEventListener('loadedmetadata', function() {
  console.log('Video dimensions: ' + video.videoWidth + 'x' + video.videoHeight);
});
