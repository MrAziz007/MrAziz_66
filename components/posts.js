export function createPosts(arr) {
    const postContainer = document.createElement('div');
    postContainer.style.width = '500px';
    postContainer.style.border = '1px solid #ddd';
    postContainer.style.borderRadius = '10px';
    postContainer.style.margin = '20px 75px';

    const postHeader = document.createElement('div');
    postHeader.style.display = 'flex';
    postHeader.style.alignItems = 'center';
    postHeader.style.padding = '10px';

    const avatar = document.createElement('img');
    avatar.style.width = '40px';
    avatar.style.height = '40px';
    avatar.style.borderRadius = '50%';
    avatar.setAttribute('src', arr.profilePhoto);
    postHeader.appendChild(avatar);

    const userInfo = document.createElement('div');
    userInfo.style.marginLeft = '10px';

    const nickname = document.createElement('div');
    nickname.innerText = arr.nikname;
    nickname.style.fontWeight = 'bold';
    userInfo.appendChild(nickname);

    const location = document.createElement('div');
    location.innerText = arr.city + ', ' + arr.country;
    location.style.color = '#888';
    userInfo.appendChild(location);

    postHeader.appendChild(userInfo);
    postContainer.appendChild(postHeader);

    const postImage = document.createElement('img');
    postImage.style.width = '100%';
    postImage.setAttribute('src', arr.img);
    postContainer.appendChild(postImage);

    const postFooter = document.createElement('div');
    postFooter.style.padding = '10px';

    const likes = document.createElement('div');
    likes.innerText = '8,888 likes';
    likes.style.fontWeight = 'bold';
    postFooter.appendChild(likes);

    const description = document.createElement('div');
    description.innerHTML = `<span style="font-weight: bold;">nickname</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...`;
    description.style.marginTop = '10px';
    postFooter.appendChild(description);

    const viewComments = document.createElement('div');
    viewComments.innerText = 'View all 33 comments';
    viewComments.style.color = '#888';
    viewComments.style.marginTop = '10px';
    postFooter.appendChild(viewComments);

    const comment1 = document.createElement('div');
    comment1.innerHTML = `<span style="font-weight: bold;">nickname</span> Lorem ipsum dolor sit amet`;
    comment1.style.marginTop = '10px';
    postFooter.appendChild(comment1);

    const comment2 = document.createElement('div');
    comment2.innerHTML = `<span style="font-weight: bold;">nickname</span> Lorem ipsum dolor sit amet`;
    comment2.style.marginTop = '10px';
    postFooter.appendChild(comment2);

    const postTime = document.createElement('div');
    postTime.innerText = '1 HOUR AGO';
    postTime.style.color = '#888';
    postTime.style.marginTop = '10px';
    postFooter.appendChild(postTime);

    postContainer.appendChild(postFooter);

    return postContainer
}