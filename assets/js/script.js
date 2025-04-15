// script.js

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');

    function insertHeadersFooters() {
        removeHeadersFooters();
        const totalPages = slides.length;

        slides.forEach((slide, index) => {
            const pageNum = index + 1;

            // --- ヘッダー要素を作成 (変更なし) ---
            const header = document.createElement('div');
            header.classList.add('print-header');
            header.innerHTML = `
                <div class="header-right">
                    <img src="assets/images/logo/logo-small.png" alt="Logo" class="print-logo">
                </div>
            `;
            slide.prepend(header);

            // --- フッター要素を作成 (HTML構造を少し変更) ---
            const footer = document.createElement('div');
            footer.classList.add('print-footer');
            // ★ 左側の空要素、中央テキスト、右ページ番号の3つのdivを含むように変更
            footer.innerHTML = `
                <div class="footer-left"></div>
                <div class="footer-center">
                    <span class="footer-text">TG GLOBAL CO.LTD.</span>
                </div>
                <div class="footer-right">
                    <span class="print-page-number-footer">Page ${pageNum} / ${totalPages}</span>
                </div>
            `;
            // ★ appendChild は1回だけにする
            slide.appendChild(footer);
        });
    }

    function removeHeadersFooters() {
        const headers = document.querySelectorAll('.print-header');
        const footers = document.querySelectorAll('.print-footer');
        headers.forEach(el => el.remove());
        footers.forEach(el => el.remove());
    }

    window.addEventListener('beforeprint', insertHeadersFooters);
    window.addEventListener('afterprint', removeHeadersFooters);

    // オプションの matchMedia リスナーはそのまま
});