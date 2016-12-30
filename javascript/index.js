
var vanish = function () {
    if (window.scrollY >= 50) {
        document.querySelector('.pic_container').classList.add('vanish');
    } else {
        document.querySelector('.pic_container').classList.remove('vanish');
        }
    }
// 宣告事件
    // 判斷式
    // 執行消失

// 添加監聽
document.addEventListener('scroll', vanish)
