document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter');
    let count = 0;
  
    function incrementCounter() {
      count += 1;
      counter.innerText = count;
    }
  
    let intervalID = setInterval(incrementCounter, 1000);
  
    let plusButton = document.getElementById('plus');
    let minusButton = document.getElementById('minus');
    let likeButton = document.getElementById('heart');
    let pauseButton = document.getElementById('pause');
    let commentForm = document.getElementById('comment-form');
    let commentInput = document.getElementById('comment-input');
    let commentList = document.getElementById('list');
    let likesList = document.querySelector('.likes');
    let likes = {};
  
    plusButton.addEventListener('click', () => {
      count += 1;
      counter.innerText = count;
    });
  
    minusButton.addEventListener('click', () => {
      count -= 1;
      counter.innerText = count;
    });
  
    likeButton.addEventListener('click', () => {
      if (likes[count]) {
        likes[count] += 1;
      } else {
        likes[count] = 1;
      }
  
      let likeItem = document.getElementById(`like-${count}`);
      if (likeItem) {
        likeItem.innerText = `${count} has been liked ${likes[count]} times`;
      } else {
        let newLikeItem = document.createElement('li');
        newLikeItem.id = `like-${count}`;
        newLikeItem.innerText = `${count} has been liked 1 time`;
        likesList.appendChild(newLikeItem);
      }
    });
  
    pauseButton.addEventListener('click', () => {
      if (pauseButton.innerText === 'pause') {
        clearInterval(intervalID);
        pauseButton.innerText = 'resume';
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
      } else {
        intervalID = setInterval(incrementCounter, 1000);
        pauseButton.innerText = 'pause';
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
      }
    });
  
    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      let comment = commentInput.value;
      let commentItem = document.createElement('p');
      commentItem.innerText = comment;
      commentList.appendChild(commentItem);
      commentForm.reset();
    });
  });
  