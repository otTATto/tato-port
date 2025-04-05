// ページ遷移
function move(target, query) {
    let link = target + '.html';
    if (query) link += '?' + query;
    window.location.href = link;
}

// ページを新しいタブで開く
function openUrl(target) {
    let link = '';
    switch (target) {
        case 'fontguessr':
            link = 'https://fontguessr.web.app/';
        case 'x':
            link = 'https://x.com/0123tato';
    }
    window.open(link);
}

// コピー
function copy(text) {
    if (!navigator.clipboard) {
        // 通知
        showToast("fa-solid fa-circle-xmark", "失敗しました", "このブラウザは対応していません", "c-red", "c-pink");
        return;
      }
    
    navigator.clipboard.writeText(text).then(
        () => {
            // 通知
            showToast("fa-solid fa-circle-check", "コピーしました！", text, "c-tato-dark-green", "c-tato-green");
        },
        () => {
            // 通知
            showToast("fa-solid fa-circle-xmark", "失敗しました", "コピーできませんでした", "c-red", "c-pink");
        }
    );
}

// toastクラスがついている要素にBootStrapのトーストを適用する
var toastElList = [].slice.call(document.querySelectorAll(".toast"));
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, {
        // オプション
        delay: 3000, // トーストを隠すまでの時間
    });
});

// トースト（通知）を表示する
function showToast(icon, providerName, text, colorName, colorText){
    // 要素の取得
    let toastProviderName = document.getElementById("toastProviderName");
    let toastText = document.getElementById("toastText");

    // 要素の代入
    $("#toastIcon").addClass(icon);
    $("#toastIcon").addClass(colorText);
    toastProviderName.innerHTML = providerName;
    toastText.innerHTML = text;

    // 色の変更
    $("#toastProviderName").addClass(colorName);
    $("#toastText").addClass(colorText);

    // トーストを表示する
    toastList[0].show();
}

window.move = move;
window.openUrl = openUrl;
window.copy = copy;
export { move, openUrl, copy };