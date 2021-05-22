_update_code();

if (observer) {
    observer.disconnect();
    observer = null;
}

var target = document.getElementsByClassName('commit-preview')[0];
if (target) {
    var observer = new MutationObserver((mutations) => {
        _update_code();
    });
    var config = {
        childList: true,
        characterData: true,
        subtree: true
    };
    observer.observe(target, config);
}

function _update_code() {
    var elements = document.querySelectorAll('pre[lang="lawtext"] code');
    elements.forEach((element) => {
        element.style.whiteSpace = 'pre-wrap';
    });
}
