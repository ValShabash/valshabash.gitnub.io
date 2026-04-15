document.addEventListener('DOMContentLoaded', function() {
 fetch('header.html')
    .then(response => response.text())
    .then(data => {
      const headerDiv = document.getElementById('header');
      if (headerDiv) headerDiv.innerHTML = data;
    })
    .catch(err => console.error('Ошибка загрузки шапки:', err));

 fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      const footerDiv = document.getElementById('footer');
      if (footerDiv) footerDiv.innerHTML = data;
    })
    .catch(err => console.error('Ошибка загрузки подвала:', err));

const postsContainer = document.getElementById('posts-container');
  if (postsContainer) {
    fetch('posts.json')
      .then(response => response.json())
      .then(posts => {
        let html = '<ul class="post-list">';
        posts.forEach(post => {
          html += 
            <li>
              <a href="${post.url}">${post.title}</a>
              <span class="post-date">(${post.date})</span>
            </li>
          ;
        });
        html += '</ul>';
        postsContainer.innerHTML = html;
      })
      .catch(err => {
        console.error('Ошибка загрузки posts.json:', err);
        postsContainer.innerHTML = '<p style="color:red;">Не удалось загрузить список публикаций. Проверьте файл posts.json.</p>';
      });
  }
const shareContainer = document.getElementById('share-buttons');
  if (shareContainer) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    shareContainer.innerHTML = 
      <div style="text-align: center; margin: 30px 0 20px;">
        <p style="font-size: 0.9rem; color: #aaa;">Поделиться этой статьёй:</p>
        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
          <a href="https://t.me/share/url?url=${url}&text=${title}" target="_blank" style="background:#0088cc; padding:6px 14px; border-radius:30px; color:white; text-decoration:none;">📱 Telegram</a>
          <a href="https://twitter.com/intent/tweet?url=${url}&text=${title}" target="_blank" style="background:#1DA1F2; padding:6px 14px; border-radius:30px; color:white; text-decoration:none;">🐦 Twitter</a>
          <a href="https://vk.com/share.php?url=${url}&title=${title}" target="_blank" style="background:#4680C2; padding:6px 14px; border-radius:30px; color:white; text-decoration:none;">📘 VK</a>
        </div>
      </div>
    ;
  }
});
