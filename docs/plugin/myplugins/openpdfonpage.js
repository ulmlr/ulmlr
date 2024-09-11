document.addEventListener('DOMContentLoaded', function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform))) {
    document.querySelectorAll('[href*=pdf]').forEach(e => {
    if (e.href.indexOf('page=') > -1) {
    e.href = e.href.replace('page=', 'page');
    }
    });
    }
    });