const microphoneButton = document.getElementById('microphone');
const inputField = document.getElementById('user-prompt');

microphoneButton.addEventListener('click', () => {
  console.log('Microphone button clicked');

  if ('webkitSpeechRecognition' in window) {
    console.log('Speech recognition API supported');

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.maxResults = 10;

    recognition.onstart = () => {
      console.log('Speech recognition started');
    };

    recognition.onresult = (event) => {
      console.log('Speech recognition result:', event.results[0][0].transcript);
      inputField.value = event.results[0][0].transcript;
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event);
    };

    recognition.onend = () => {
      console.log('Speech recognition ended');
    };

    recognition.start();
  } else {
    console.error('Speech recognition API not supported');
  }
});
