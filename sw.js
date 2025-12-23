const CACHE_NAME = 'pilgrimage-quest-cache-v1';
const urlsToCache = [
  './',                // '/' を './' に変更
  'index.html',        // 先頭の / を削除
  'css/style.css',     // 先頭の / を削除
  'js/main.js',        // 先頭の / を削除
  'https://unpkg.com/vue@3/dist/vue.global.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'images/stamp_base.png',    // 先頭の / を削除（以下同様）
  'images/stamp_layer_1.png',
  'images/stamp_layer_2.png',
  'images/stamp_layer_3.png',
  'images/stamp_layer_4.png',
  'images/stamp_layer_5.png',
  'images/oshi_1.png',
  'images/oshi_2.png',
  'images/oshi_3.png',
  'images/oshi_4.png',
  'images/oshi_5.png',
  'images/special_reward.png',
  // ▼▼▼ 新規追加（アニメーションもキャッシュする） ▼▼▼
  'lottie/quest_start.json',
  'lottie/quest_clear.json'
];

// インストール時にファイルをキャッシュする
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// リクエスト時にキャッシュを利用する
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // キャッシュが見つかった場合は、それを返す
        if (response) {
          return response;
        }
        // 見つからなかった場合は、ネットワークから取得する
        return fetch(event.request);
      })
  );
});
