const postBox = document.querySelector('.post-box textarea');
const postButton = document.querySelector('.post-box button');
const feed = document.querySelector('.feed');

postButton.addEventListener('click', () => {
  const postContent = postBox.value;

  if (postContent) {
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.innerHTML = `
      <h3>Your Name</h3>
      <p>${postContent}</p>
      <div class="post-actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    `;
    feed.prepend(newPost);
    postBox.value = ''; // Clear the text area
  }
});
