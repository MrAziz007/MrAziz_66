import { createHeader } from "./components/header.js";
import { createPosts } from "./components/posts.js";
import { createReels } from "./components/reels.js";

document.querySelector('header').append(createHeader());

function reload(arr, place, component) {
    let box = document.querySelector(`.${place}`);
    for (const item of arr) {
        let elem = component(item);
        box.append(elem);
    };
}

axios.get('http://localhost:3001/reals')
    .then(res => {
        console.log(res)
        reload(res.data, 'reelsBox', createReels);
    })
    .catch(error => console.error(error));

axios.get('http://localhost:3001/posts')
    .then(res => {
        console.log(res)
        reload(res.data, 'posts', createPosts);
    })
    .catch(error => console.error(error));