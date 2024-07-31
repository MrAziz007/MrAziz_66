export function createHeader() {
    let head_cont = document.createElement('div');
    let header_logo = document.createElement('div');
    let logoImg = document.createElement('img');
    let form = document.createElement('form');
    let inpSearch = document.createElement('input');
    let header_elements = document.createElement('div');
    let btnHome = document.createElement('button');
    let homeImg = document.createElement('img');
    let btnChat = document.createElement('button');
    let chatImg = document.createElement('img');
    let btnNavigator = document.createElement('button');
    let navigatorImg = document.createElement('img');
    let btnLike = document.createElement('button');
    let likeimg = document.createElement('img');
    let btnProfile = document.createElement('button');
    let profileImg = document.createElement('img');

    inpSearch.setAttribute('placeholder', 'search');
    logoImg.setAttribute('src', './img/Logo.png');
    homeImg.setAttribute('src', './img/home.png');
    chatImg.setAttribute('src', './img/chat.png');
    navigatorImg.setAttribute('src', './img/navigator.png');
    likeimg.setAttribute('src', './img/like.png');
    profileImg.setAttribute('src', './img/pexels-minan1398-1547971.jpg');

    head_cont.classList.add('container');
    head_cont.classList.add('head_cont');
    btnProfile.classList.add('btnProfile');
    inpSearch.classList.add('search');
    header_logo.classList.add('header_logo');
    header_elements.classList.add('header_elements');

    header_logo.append(logoImg);
    form.append(inpSearch);
    btnHome.append(homeImg);
    btnChat.append(chatImg);
    btnNavigator.append(navigatorImg);
    btnLike.append(likeimg);
    btnProfile.append(profileImg);
    header_elements.append(btnHome, btnChat, btnNavigator, btnLike, btnProfile);
    head_cont.append(header_logo, form, header_elements);

    return head_cont
}