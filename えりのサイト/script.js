/* ========================================
   NEWS
======================================== */

const newsData = [

     {
        date: "2026.10.16",
        title: "元モー娘。生田衣梨奈、美肩＆美脚際立つミニ丈衣装ショット披露「お人形さんみたい」「美しすぎる」の声",
        description: "モデルプレス",
        url: "https://news.yahoo.co.jp/articles/794ee3f275675ede1df0e862cc9d5bbb4098dd8b"
    },


     {
        date: "2026.10.15",
        title: "元モー娘。生田衣梨奈「今、モーニング娘。に入る子は勇者」長年続くグループならではの苦労明かす",
        description: "モデルプレス",
        url: "https://mdpr.jp/news/4859813"
    },

     {
        date: "2026.10.15",
        title: "歴代最長の１４年間モー娘。に在籍の生田衣梨奈が本音「今、モーニング娘。に入る子は勇者だと思います」",
        description: "スポーツ報知",
        url: "https://www.msn.com/ja-jp/news/other/%E6%AD%B4%E4%BB%A3%E6%9C%80%E9%95%B7%E3%81%AE%EF%BC%91%EF%BC%94%E5%B9%B4%E9%96%93%E3%83%A2%E3%83%BC%E5%A8%98-%E3%81%AB%E5%9C%A8%E7%B1%8D%E3%81%AE%E7%94%9F%E7%94%B0%E8%A1%A3%E6%A2%A8%E5%A5%88%E3%81%8C%E6%9C%AC%E9%9F%B3-%E4%BB%8A-%E3%83%A2%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0%E5%A8%98-%E3%81%AB%E5%85%A5%E3%82%8B%E5%AD%90%E3%81%AF%E5%8B%87%E8%80%85%E3%81%A0%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99/ar-AA2edRee?ocid=BingNewsVerp"
    },
    
       
     {
        date: "2026.10.15",
        title: "生田衣梨奈が現役時代の歌割りの悩みを告白、見切れてでも目立つ工夫",
        description: "livedoor News",
        url: "https://news.livedoor.com/article/detail/32569679/"
    },

     {
        date: "2026.10.15",
        title: "元モー娘。生田衣梨奈、現役時代の悩み赤裸々告白 歌唱パートが「歌詞の“る”だけとか…」",
        description: "モデルプレス",
        url: "https://mdpr.jp/news/detail/4859791"
    },

     {
        date: "2026.10.15",
        title: "元モー娘。生田衣梨奈、現役時代の切実な悩み…上田晋也「涙ぐましいな」",
        description: "オリコンニュース",
        url: "https://www.msn.com/ja-jp/entertainment/celebrities/%E5%85%83%E3%83%A2%E3%83%BC%E5%A8%98-%E7%94%9F%E7%94%B0%E8%A1%A3%E6%A2%A8%E5%A5%88-%E7%8F%BE%E5%BD%B9%E6%99%82%E4%BB%A3%E3%81%AE%E5%88%87%E5%AE%9F%E3%81%AA%E6%82%A9%E3%81%BF-%E4%B8%8A%E7%94%B0%E6%99%8B%E4%B9%9F-%E6%B6%99%E3%81%90%E3%81%BE%E3%81%97%E3%81%84%E3%81%AA/ar-AA2efJKJ?ocid=BingNewsVerp"
    },

    {
        date: "2026.09.30",
        title: "ハロプロファン三上悠亜、元モー娘。生田衣梨奈との対面に大興奮！",
        description: "Yahoo!NEWS",
        url: "https://news.yahoo.co.jp/articles/beef895f4023331a57e35d14e57685b4a3b3429d"
    },

    {
        date: "2026.09.09",
        title: "吉本移籍の元モー娘。生田衣梨奈、まさかの再デビュー?",
        description: "オリコンニュース",
        url: "https://www.oricon.co.jp/news/2479020/full/"
    },

     {
        date: "2026.09.24",
        title: "「冠番組がほしい」、得意のスポーツで狙っています",
        description: "テレ朝news",
        url: "https://www.msn.com/ja-jp/entertainment/%E5%85%A8%E8%88%AC/%E7%94%9F%E7%94%B0%E8%A1%A3%E6%A2%A8%E5%A5%88-%E5%86%A0%E7%95%AA%E7%B5%84%E3%81%8C%E3%81%BB%E3%81%97%E3%81%84-%E5%BE%97%E6%84%8F%E3%81%AE%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%81%A7%E7%8B%99%E3%81%A3%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99-%E8%8A%B8%E8%83%BD%E5%8B%95%E7%94%BB/ar-AA2c3HXn?ocid=BingNewsVerp"
    }, 

      {
        date: "2026.10.09",
        title: "地熱フェス目玉企画を発表",
        description: "朝日新聞",
        url: "https://www.asahi.com/and/pressrelease/16955382"
    }, 
]


/* ========================================
   NEWS ページネーション
======================================== */

/* 新しい日付順 */

newsData.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
});


/* NEWS表示エリア */

const newsList = document.getElementById("news-list");


/* 1ページに表示する件数 */

const newsPerPage = 5;


/* 現在のページ */

let currentNewsPage = 1;


/* ページ数 */

const totalNewsPages = Math.ceil(newsData.length / newsPerPage);


/* ========================================
   NEWSを表示
======================================== */

function displayNews(page) {

    currentNewsPage = page;

    newsList.innerHTML = "";


    /* 表示するニュースの範囲 */

    const start = (page - 1) * newsPerPage;

    const end = start + newsPerPage;


    /* 今のページのニュースだけ取得 */

    const currentNews = newsData.slice(start, end);


    /* ニュースを表示 */

    currentNews.forEach(function(item) {

        const article = document.createElement("article");

        article.className = "news-item";

        article.innerHTML = `

            <time>${item.date}</time>

            <h3>
                <a
                    href="${item.url}"
                    target="_blank"
                    rel="noopener"
                >
                    ${item.title}
                </a>
            </h3>

            <p>
                ${item.description}
            </p>

        `;

        newsList.appendChild(article);

    });


    /* ページ番号を表示 */

    createNewsPagination();

}


/* ========================================
   NEWS ページ番号を作る
======================================== */

function createNewsPagination() {

    /* 以前のページネーションを削除 */

    const oldPagination =
        document.querySelector(".news-pagination");

    if (oldPagination) {
        oldPagination.remove();
    }


    /* 1ページ以内なら表示しない */

    if (totalNewsPages <= 1) {
        return;
    }


    /* ページネーション本体 */

    const pagination = document.createElement("div");

    pagination.className = "news-pagination";


    /* ========================================
       前へボタン
    ======================================== */

    const prevButton = document.createElement("button");

    prevButton.textContent = "‹ 前へ";

    prevButton.className = "page-button";


    if (currentNewsPage === 1) {
        prevButton.disabled = true;
    }


    prevButton.addEventListener("click", function() {

        if (currentNewsPage > 1) {

            displayNews(currentNewsPage - 1);

            scrollToNews();

        }

    });


    pagination.appendChild(prevButton);


    /* ========================================
       ページ番号
    ======================================== */

    for (let i = 1; i <= totalNewsPages; i++) {

        const pageButton = document.createElement("button");

        pageButton.textContent = i;

        pageButton.className = "page-number";


        /* 現在のページ */

        if (i === currentNewsPage) {
            pageButton.classList.add("active");
        }


        pageButton.addEventListener("click", function() {

            displayNews(i);

            scrollToNews();

        });


        pagination.appendChild(pageButton);

    }


    /* ========================================
       次へボタン
    ======================================== */

    const nextButton = document.createElement("button");

    nextButton.textContent = "次へ ›";

    nextButton.className = "page-button";


    if (currentNewsPage === totalNewsPages) {
        nextButton.disabled = true;
    }


    nextButton.addEventListener("click", function() {

        if (currentNewsPage < totalNewsPages) {

            displayNews(currentNewsPage + 1);

            scrollToNews();

        }

    });


    pagination.appendChild(nextButton);


    /* NEWSの下に追加 */

    newsList.parentNode.appendChild(pagination);

}


/* ========================================
   NEWSの位置まで戻る
======================================== */

function scrollToNews() {

    document.querySelector(".news").scrollIntoView({
        behavior: "smooth"
    });

}


/* ========================================
   最初のNEWSを表示
======================================== */

displayNews(1);


/* ========================================
   イベント
======================================== */

const eventData = [

    {
        date: "2026.10.18",

        title: "NS23par Nissa Golfスペシャルイベント",

        description: "大阪あべのハルカス近鉄本店にてスペシャルイベント開催",

        /* 詳細ページ */
        detailUrl: "https://www.instagram.com/p/DeBqdM2HaxL/?utm_source=ig_web_button_share_sheet"
    },

    {
        date: "2026.11.21",

        title: "地熱シンポジウム in 福岡",

        description: "未定",

        /* 詳細ページ */
        detailUrl: "https://chinetsu-sympo.jogmec.go.jp/"

        /* 公式サイト・チケットは現在なし */
    }

];


/* ========================================
   イベントを日付順に並べる
======================================== */

eventData.sort(function(a, b) {

    return new Date(a.date) - new Date(b.date);

});


/* ========================================
   イベント表示エリア
======================================== */

const eventList = document.getElementById("event-list");


/* ========================================
   イベントを表示
======================================== */

eventData.forEach(function(item) {

    const article = document.createElement("article");

    article.className = "event-item";


    /* ========================================
       リンクボタンを作る
    ======================================== */

    let links = "";


    /* 詳細 */

    if (item.detailUrl) {

        links += `
            <a
                href="${item.detailUrl}"
                target="_blank"
                rel="noopener"
            >
                詳細
            </a>
        `;

    }


    /* 公式サイト */

    if (item.officialUrl) {

        links += `
            <a
                href="${item.officialUrl}"
                target="_blank"
                rel="noopener"
            >
                公式サイト
            </a>
        `;

    }


    /* チケット */

    if (item.ticketUrl) {

        links += `
            <a
                href="${item.ticketUrl}"
                target="_blank"
                rel="noopener"
            >
                チケット
            </a>
        `;

    }


    /* ========================================
       イベント本体
    ======================================== */

    article.innerHTML = `

        <time>${item.date}</time>

        <h3>
            ${item.title}
        </h3>

        <p>
            ${item.description}
        </p>

        <div class="event-links">
            ${links}
        </div>

    `;


    eventList.appendChild(article);

});

/* ========================================
   生配信のお知らせ
======================================== */

const liveData = [

  {
    date: "次回未定",
    title: "次回の生配信について",
    description: "情報が出次第更新します。",
    liveUrl: ""
  }

];


/* ========================================
   生配信を日付順に並べる
======================================== */

liveData.sort(function(a, b) {

    return new Date(a.date) - new Date(b.date);

});


/* ========================================
   生配信表示エリア
======================================== */

const liveList = document.getElementById("live-list");


/* ========================================
   生配信を表示
======================================== */

liveData.forEach(function(item) {

    const article = document.createElement("article");

    article.className = "live-item";


    let links = "";


    /* 配信を見るボタン */

    if (item.liveUrl) {

        links += `
            <a
                href="${item.liveUrl}"
                target="_blank"
                rel="noopener"
            >
                配信を見る
            </a>
        `;

    }


    article.innerHTML = `

        <time>${item.date}</time>

        <h3>
            ${item.title}
        </h3>

        <p>
            ${item.description}
        </p>

        <div class="live-links">
            ${links}
        </div>

    `;


    liveList.appendChild(article);

});

/* ========================================
   YouTube
======================================== */

const youtubeData = [

    {
        date: "2026.10.15",
        title: "えりぽんYouTube更新!",
        url: "https://youtu.be/ItZuVWFTjxU?si=NTMV8vaJJ6WgRI47"
    },

];


const youtubeList =
    document.getElementById("youtube-list");


youtubeData.forEach(function(item) {

    const div = document.createElement("div");

    div.className = "media-item";

    div.innerHTML = `

        <time>${item.date}</time>

        <a
            href="${item.url}"
            target="_blank"
            rel="noopener"
        >
            ${item.title}
        </a>

    `;

    youtubeList.appendChild(div);

});



/* ========================================
   FC配信
======================================== */

const fcData = [

    {
        date: "2026.10.04",
        title: "FC配信",
    },

];


const fcList =
    document.getElementById("fc-list");


fcData.forEach(function(item) {

    const div = document.createElement("div");

    div.className = "media-item";

    div.innerHTML = `

        <time>${item.date}</time>

        <a
            href="${item.url}"
            target="_blank"
            rel="noopener"
        >
            ${item.title}
        </a>

    `;

    fcList.appendChild(div);

});



/* ========================================
   TVer
======================================== */

const tverData = [

     {
        date: "2026.10.14",
        title: "かまいたちの瞬間回答～60秒でお悩み解決～知られざる工場裏側潜入！＆裏技一茂ジャッジ(10/23まで配信中)",
        url: "https://tver.jp/episodes/epdqx67e4u?utm_medium=share"
    },

     {
        date: "2026.10.14",
        title: "上田と女が吠える夜~今なら話せる女性アイドルのリアル!昭和平成令和(秘)50年史~(10/21まで配信中)",
        url: "https://tver.jp/episodes/epzdwyx9f3?utm_medium=share"
    },
    
     {
        date: "2026.08.16",
        title: "ナインティナイン岡村隆史の花の駐在さん～駐在さんと赤い糸～",
        url: "https://tver.jp/episodes/eps7jfo9lf?utm_medium=share"
    }, 

     {
        date: "2026.08.02",
        title: "イースト駅前クリニック presents イケてる芸人に大変身！？ドンデコルテのドンナコーデ #2",
        url: "https://tver.jp/episodes/ep654qp1op?utm_medium=share"
    }, 


      {
        date: "2026.07.26",
        title: "イースト駅前クリニック presents イケてる芸人に大変身！？ドンデコルテのドンナコーデ #1",
        url: "https://tver.jp/episodes/epvps6xftn?utm_medium=share"
    },

      {
        date: "2026.07.18",
        title: "タカトシ&ライオンの!新ゴルフやろうぜ!30",
        url: "https://tver.jp/episodes/epv5sf4w1a?utm_medium=share"
    },

       {
        date: "2026.07.04",
        title: "タカトシ&ライオンの!新ゴルフやろうぜ!29",
        url: "https://tver.jp/episodes/eprexdh2nk?utm_medium=share"
    },


      {
        date: "2026.06.21",
        title: "水田信二の注文の多い料理教室90",
        url: "https://tver.jp/episodes/epxggy3yhu?utm_medium=share"
    }, 

     {
        date: "2026.06.13",
        title: "タカトシ&ライオンの!新ゴルフやろうぜ!28",
        url: "https://tver.jp/episodes/ep8lquc8a1?utm_medium=share"
    },

     {
        date: "2026.06.06",
        title: "タカトシ&ライオンの!新ゴルフやろうぜ!27",
        url: "https://tver.jp/episodes/epzh44k4hc?utm_medium=share"
    },
];


const tverList =
    document.getElementById("tver-list");


tverData.forEach(function(item) {

    const div = document.createElement("div");

    div.className = "media-item";

    div.innerHTML = `

        <time>${item.date}</time>

        <a
            href="${item.url}"
            target="_blank"
            rel="noopener"
        >
            ${item.title}
        </a>

    `;

    tverList.appendChild(div);

});
