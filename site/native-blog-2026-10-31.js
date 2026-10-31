(function () {
  "use strict";
  var attempts = 0;
  function enhance() {
    var root = document.querySelector('.blog-category');
    if (!root) { if (++attempts < 8) setTimeout(enhance, 400); return; }
    if (root.dataset.mtownBlogPolish) return;
    root.dataset.mtownBlogPolish = '2026-10-31';
    if (!document.getElementById('mt-blog-polish-style')) {
      var style = document.createElement('style');
      style.id = 'mt-blog-polish-style';
      style.textContent = "\n.blog-category,.blog-category *{box-sizing:border-box;min-width:0}\nmain .s-section:has(.blog-category){background:#f4f1e9!important;padding:54px 20px 80px!important}\nmain .s-section:has(.blog-category) .s-wrapper{max-width:1180px!important;margin-inline:auto!important}\n#mt-blog-intro{background:radial-gradient(ellipse at 100% 0,#12475d,transparent 65%),#0a2031;color:#f7f3e9;border:1px solid #65859c55;border-radius:26px;padding:clamp(26px,5vw,62px);margin:0 0 36px;box-shadow:0 18px 50px #12263818;font-family:Arial,sans-serif}\n#mt-blog-intro .mt-blog-eyebrow{font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#84e1e2;margin:0 0 18px}\n#mt-blog-intro h1{font:850 clamp(34px,5vw,60px)/1.06 Arial,sans-serif;letter-spacing:-.035em;margin:0 0 22px;max-width:850px;color:#ffdc7d}\n#mt-blog-intro p{font:400 18px/1.7 Arial,sans-serif;max-width:760px;margin:0 0 22px;color:#e0eaf1}\n#mt-blog-intro nav{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}\n#mt-blog-intro nav a{border:1px solid #8ccbd355;background:#ffffff0a;border-radius:30px;color:#e4fbff;padding:11px 17px;font:700 14px/1.45 Arial,sans-serif;text-decoration:none;transition:transform .2s,background .2s}\n#mt-blog-intro nav a:hover{transform:translateY(-2px);background:#ffffff18}\n#mt-blog-intro .mt-blog-actions{display:flex;flex-wrap:wrap;gap:12px}\n#mt-blog-intro .mt-blog-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:50px;border:1px solid #8bcbd76b;border-radius:12px;padding:13px 20px;font:800 15px/1.4 Arial,sans-serif;color:#fff;text-decoration:none;background:#16394e;transition:transform .2s,box-shadow .2s;position:relative;overflow:hidden}\n#mt-blog-intro .mt-blog-actions a:first-child{background:linear-gradient(110deg,#ffe58b,#ffad4c);color:#102538;border-color:#ffd981}\n#mt-blog-intro .mt-blog-actions a:first-child:after{content:'';position:absolute;inset:-30% auto -30% -80%;width:35%;background:linear-gradient(100deg,transparent,#fff8,transparent);transform:skewX(-20deg);animation:mt-blog-gloss 6s ease-in-out infinite;pointer-events:none}\n#mt-blog-intro .mt-blog-actions a:hover{transform:translateY(-2px);box-shadow:0 8px 22px #0003}\n@keyframes mt-blog-gloss{0%,55%{left:-80%}85%,100%{left:150%}}\n.blog-category .gallery-item{background:#fff;border:1px solid #d8e1e5;border-top:4px solid #148fba;border-radius:22px;padding:clamp(22px,4vw,48px)!important;margin:0 0 36px!important;box-shadow:0 10px 32px #172e4110;scroll-margin-top:150px;overflow-wrap:anywhere}\n.blog-category .gallery-item:nth-child(even){border-top-color:#ffaf49;background:#fffdfa}\n.blog-category .blog-item__title h2,.blog-category .blog-item__title h5{font:800 clamp(26px,3.3vw,38px)/1.18 Arial,sans-serif!important;letter-spacing:-.025em;margin:0 0 14px!important;color:#115da8}\n.blog-category .blog-item__create-date p,.blog-category .blog-item__create-date h6{font:600 13px/1.6 Arial,sans-serif!important;color:#536879!important;margin:0 0 26px!important}\n.blog-category .blog-feed__editor{max-width:780px!important;margin-inline:auto!important;font-family:Arial,sans-serif!important;color:#243c4d}\n.blog-category .blog-feed__editor ._paragraph{font-size:18px!important;line-height:1.78!important}\n.blog-category .blog-feed__editor h3.mt-blog-section{display:inline;font:800 clamp(22px,2.5vw,28px)/1.35 Arial,sans-serif!important;letter-spacing:-.015em;color:#1165ad}\n.blog-category .blog-feed__editor a{color:#075fa6!important;text-decoration:underline;text-underline-offset:4px;font-weight:700}\n.blog-category .blog-feed__editor a[href^=\"tel:\"],.blog-category .blog-feed__editor a[href^=\"sms:\"],.blog-category .blog-feed__editor a[href*=\"book.housecallpro.com\"]{display:inline-flex;align-items:center;min-height:46px;padding:9px 14px;border-radius:10px;background:#edf8fb;border:1px solid #b8dfe8;text-decoration:none;margin:4px 0}\n.blog-category .blog-feed__editor a[href*=\"book.housecallpro.com\"]{background:linear-gradient(110deg,#ffdc79,#ffae55);color:#112c40!important;border-color:#f5bc65}\n.blog-category a:focus-visible,#mt-blog-intro a:focus-visible{outline:3px solid #1689ce;outline-offset:4px}\n.blog-category ._image_block img{max-width:100%;height:auto}\n@supports ((background-clip:text) or (-webkit-background-clip:text)){\n#mt-blog-intro h1{background-image:linear-gradient(105deg,#fff0a1,#ffba59 70%,#ff936b);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}\n.blog-category .blog-item__title h2,.blog-category .blog-item__title h5,.blog-category .mt-blog-section{background-image:linear-gradient(110deg,#1453bc,#078381);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}\n.blog-category .gallery-item:nth-child(even) .blog-item__title h2,.blog-category .gallery-item:nth-child(even) .mt-blog-section:nth-of-type(2n){background-image:linear-gradient(110deg,#b42462,#c34517)}\n.blog-category .mt-blog-section:nth-of-type(3n){background-image:linear-gradient(110deg,#b42462,#c34517)}}\n@media(max-width:600px){main .s-section:has(.blog-category){padding:28px 12px 48px!important}.blog-category .gallery-item{padding:24px 18px!important;border-radius:18px;scroll-margin-top:100px}.blog-category .blog-feed__editor ._paragraph{font-size:16px!important;line-height:1.72!important}#mt-blog-intro{border-radius:18px}#mt-blog-intro .mt-blog-actions a{flex:1 1 100%}#mt-blog-intro nav a{flex:1 1 calc(50% - 10px);text-align:center}}\n";
      document.head.appendChild(style);
    }
    var cards = Array.from(root.querySelectorAll('.gallery-item'));
    var labels = ['Oil heating options', 'Spring AC checkups', 'AC maintenance', 'Ductless mini splits'];
    cards.forEach(function (card, i) {
      card.id = 'mt-blog-guide-' + (i + 1);
      var oldTitle = card.querySelector('.blog-item__title h5');
      if (oldTitle) {
        var title = document.createElement('h2');
        while (oldTitle.firstChild) title.appendChild(oldTitle.firstChild);
        oldTitle.replaceWith(title);
      }
      var oldMeta = card.querySelector('.blog-item__create-date h6');
      if (oldMeta) {
        var meta = document.createElement('p');
        while (oldMeta.firstChild) meta.appendChild(oldMeta.firstChild);
        oldMeta.replaceWith(meta);
      }
      var editor = card.querySelector('.blog-feed__editor');
      if (!editor) return;
      Array.from(editor.querySelectorAll('span.editor__mark[style]')).forEach(function (mark) {
        if (mark.style.fontWeight !== 'bold' || mark.closest('a')) return;
        var text = mark.textContent.trim();
        if (!text || text.length > 100 || /[\r\n]/.test(text)) return;
        var heading = document.createElement('h3');
        heading.className = 'mt-blog-section';
        heading.textContent = text;
        mark.replaceWith(heading);
      });
      [['Call 610-500-6416', 'tel:+16105006416'], ['Text 610-510-8338', 'sms:+16105108338']].forEach(function (pair) {
        var walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT), nodes = [], node;
        while ((node = walker.nextNode())) {
          if (node.nodeValue.indexOf(pair[0]) !== -1 && !node.parentElement.closest('a')) nodes.push(node);
        }
        nodes.forEach(function (textNode) {
          var parts = textNode.nodeValue.split(pair[0]), fragment = document.createDocumentFragment();
          parts.forEach(function (part, j) {
            if (j) { var link = document.createElement('a'); link.href = pair[1]; link.textContent = pair[0]; fragment.appendChild(link); }
            fragment.appendChild(document.createTextNode(part));
          });
          textNode.replaceWith(fragment);
        });
      });
    });
    if (!document.getElementById('mt-blog-intro')) {
      var intro = document.createElement('section');
      intro.id = 'mt-blog-intro';
      intro.setAttribute('aria-labelledby', 'mt-blog-title');
      intro.innerHTML = '<p class="mt-blog-eyebrow">From your local Middletown HVAC team</p><h1 id="mt-blog-title">Good advice. A more comfortable home.</h1><p>Understand your equipment, plan its care, and compare your options. Clear answers from a family owned team serving Delaware County, Chester County, and the Main Line.</p><div class="mt-blog-actions"><a href="https://mtownhvac.com/install-estimate/">Explore Installation Pricing</a><a href="sms:+16105108338">Text Our Team</a><a href="tel:+16105006416">Call Now</a><a href="https://book.housecallpro.com/book/Middletown-HVAC-LLC/fee90a1b38e64428a9ebf1cf37e04197?v2=true">Book Online</a></div>';
      var nav = document.createElement('nav'); nav.setAttribute('aria-label', 'Choose a home comfort guide');
      cards.forEach(function (card, i) { var a = document.createElement('a'); a.href = '#' + card.id; a.textContent = labels[i] || 'Guide ' + (i + 1); nav.appendChild(a); });
      intro.appendChild(nav); root.before(intro);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enhance, {once:true});
  else enhance();
}());
