function changeLanguage(language) {
    switch (language) {
        case 'zh-cn':
            window.location.href = "indexZh.html";
            break;
        case 'zht-cn':
            window.location.href = "indexZht.html";
            break;
        case 'ja-jp':
            window.location.href = 'indexJp.html';
            break;
        case 'ko-kr':
            window.location.href = "indexKr.html";
            break;
        case 'en-us':
            window.location.href = "index.html";
            break;
    }
}