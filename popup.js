document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.getElementById('download-btn');
    const watchBtn = document.getElementById('watch-btn');
    const iframeBtn = document.getElementById('iframe-btn');
    const iframeContainer = document.getElementById('iframe-container');
    const videoIframe = document.getElementById('video-iframe');
  
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentUrl = new URL(tabs[0].url);
      const params = new URLSearchParams(currentUrl.search);
      const id = params.get('surl');
  
      if (id) {
        const baseUrl = `https://teraboxapp.com/s/1${id}`;
        
        downloadBtn.addEventListener('click', function () {
          window.open(`https://www.terabox.tech?url=${baseUrl}`, '_blank');
        });
  
        watchBtn.addEventListener('click', function () {
          window.open(`https://player.terabox.tech?url=${baseUrl}`, '_blank');
        });
        videoIframe.src = `https://www.terabox.tech/play.html?url=${encodeURIComponent(baseUrl)}`;
        iframeContainer.style.display = 'block';
  
        iframeBtn.addEventListener('click', function () {
          videoIframe.src = `https://www.terabox.tech/play.html?url=${encodeURIComponent(baseUrl)}`;
          iframeContainer.style.display = 'block';
        });
      } else {
        downloadBtn.disabled = true;
        watchBtn.disabled = true;
        iframeBtn.disabled = true;
        alert('Invalid URL');
      }
    });
  });
  