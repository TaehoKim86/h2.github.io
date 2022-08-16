'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "84f89802b763952989af85e6ebcc4086",
"assets/assets/app_icon.png": "e03d383063367267f6e08bb02d278a08",
"assets/assets/dashboard/bank.svg": "941c0480bea8bdc6ca7d29fc0b4640fc",
"assets/assets/dashboard/calendar.svg": "5da24f42cc2eac5ba7f84b37d2163055",
"assets/assets/dashboard/card.png": "299e694bfe68985abd9c4e3ea19802d2",
"assets/assets/dashboard/clipboard.svg": "908a3ba351834d8111a9184f96ee1d15",
"assets/assets/dashboard/credit-card.svg": "e20c5068e78d4d9a1c719e93f7e84ef6",
"assets/assets/dashboard/document.svg": "3495668510842cd9097776c7db2cd607",
"assets/assets/dashboard/drop.svg": "7b8b2af526b2e2512c2682f889fef14f",
"assets/assets/dashboard/electricity.svg": "b5f6b7666493bd2736f57883b466bb52",
"assets/assets/dashboard/home.svg": "63f7eabb7a7d78c178031926c3c9973a",
"assets/assets/dashboard/invoice.svg": "f7d19983441244e6bd59d7b121b34da0",
"assets/assets/dashboard/mac-action.svg": "2cb979bc37be9018b71aaae1e810e33e",
"assets/assets/dashboard/man-svgrepo-com.svg": "50c204150f96680a495a6112df49b443",
"assets/assets/dashboard/man.jpeg": "3667d100cf087238f2cdf0a45a6c587c",
"assets/assets/dashboard/pie-chart.svg": "23d3f5bae0abfbd169de394912e752af",
"assets/assets/dashboard/ring.svg": "6ed7f9f01871f426e979afb4e2252bf2",
"assets/assets/dashboard/run-svgrepo-com.svg": "c0dce0b775afa3356126abb028d7626e",
"assets/assets/dashboard/salary.svg": "1462f937a1198cff1a8838bbea1cc7b2",
"assets/assets/dashboard/search.svg": "b2feb1c702b9b4c46343cfc222770c0d",
"assets/assets/dashboard/transfer.svg": "d4e0e58b46a323d2b0dcb37ec672f2ce",
"assets/assets/dashboard/trophy.svg": "64a3f4994d8cee75353b4ba56b06428e",
"assets/assets/dashboard/wifi.svg": "c83a375863190fc9862addc8fab99d49",
"assets/assets/dashboard/woman-svgrepo-com.svg": "a74c6216c1b3b7417885f56725024c66",
"assets/assets/done_blue.png": "f301489446a041c38ebde9ee273e657a",
"assets/assets/done_green.png": "e5b03614e5ff41504aa34696d765e617",
"assets/assets/done_red.png": "fadc8d7af95773425d7f6378d207d85e",
"assets/assets/Electric%252012.json": "3441bbc3d82f443674e441a48fe01164",
"assets/assets/gui/alarm.png": "acc8daf3f4b72ceb6c71bdb30fdd268f",
"assets/assets/gui/avatar_ar_sample.png": "868c4ed4a5bff79c5a717950ee42611a",
"assets/assets/gui/avatar_character_sample.png": "7a3750e8c2f4500d737ad93650f05e2e",
"assets/assets/gui/bg_map_status_bar_wave.png": "c9d05631d8af7899499aa823b76c8454",
"assets/assets/gui/bg_switch_bar.png": "d34c24fda9b8c47cea48f85d13cb50e9",
"assets/assets/gui/btn_back.png": "be444f2a7fb6593e6dbbee929b3bc890",
"assets/assets/gui/btn_battle.png": "2ac8ed9b524a06e5a26e1edc335f2934",
"assets/assets/gui/btn_cur_location.png": "789ece5b1fb010157612cdbfbbf0c942",
"assets/assets/gui/btn_feed.png": "c0e49daf758e8338f0c3b82acff1f6b5",
"assets/assets/gui/btn_jump.png": "040240be55cecebeeaa94427505c1a54",
"assets/assets/gui/btn_main.png": "41f4f98c808dc308a83e9ac1508d1799",
"assets/assets/gui/btn_map.png": "f26c676fe8c05de31be06873788fb058",
"assets/assets/gui/btn_mission_flag.png": "dddf1358ef04698990b67299863e99f5",
"assets/assets/gui/btn_mode_battle_ground.png": "a297bd592dddcc0bfa2eab563c9a6e06",
"assets/assets/gui/btn_mode_single.png": "1229c1f3671e709349ffa9303497e5b2",
"assets/assets/gui/btn_more.png": "1577570af8634d7a4ee219e9640e41d3",
"assets/assets/gui/btn_my.png": "a3725554b27c3c4559c0a8268df0d4c5",
"assets/assets/gui/btn_setting.png": "7c0920a7957407632abefed55616005d",
"assets/assets/gui/btn_share.png": "691156285c24476bf2dfa2fe2803c9e5",
"assets/assets/gui/btn_shop.png": "33fb2cc202c25b75f8df34237ac1cae5",
"assets/assets/gui/community.png": "d3edde11b4aaa6e14b7488019a7b7ed6",
"assets/assets/gui/information.png": "c0df2368c2c896e6bc0137ef3010af79",
"assets/assets/gui/journey.png": "c06eaf45151cfbceefb98a90357d130b",
"assets/assets/gui/pause.png": "1ba07e84ade5bf0eb2f0a820524a346c",
"assets/assets/gui/play.png": "73a7c7b0bd98ac80ebdbdd556c57c25c",
"assets/assets/gui/profile.png": "4a1fdb0be32b939c63e1d56ad3db0cf6",
"assets/assets/images/1.jpg": "cb88fb01a601f18484f9bf7844c1434c",
"assets/assets/images/2.jpg": "29c23ad1fa167fcdc1db01220d3e3fe9",
"assets/assets/images/3.jpg": "61d29bb1fc599262ba5af14c243a8a29",
"assets/assets/images/4.jpg": "94c9a5cc9349d9b7fd0c31492fdd6c1a",
"assets/assets/images/apple.png": "c951b15389b73e526f3525ba59f4b507",
"assets/assets/images/app_main_image.png": "ad9458063f956c48b038bbb8433e0fcd",
"assets/assets/images/app_title.png": "f08577f99b8fdc3659ab200a119f69f9",
"assets/assets/images/background.png": "e09aa781fd4ceb4cedc8e4621f086ee7",
"assets/assets/images/coin.png": "a96db274c4ef1e7f48651816a77906bc",
"assets/assets/images/crown.png": "8893014b3a3845e6b155b1f8d7c1cd64",
"assets/assets/images/google.png": "976672b296019efcafb8eec1034acd3d",
"assets/assets/images/h2_team.jpg": "50ffa8f816de6ac2c76dcc25ce16ac20",
"assets/assets/images/insta_logo.png": "f52b04db2d592c96eea0064e5d069f96",
"assets/assets/images/item_attack.png": "537933123336286783361bd9bf4d2a84",
"assets/assets/images/item_boost.png": "076611c55ff364e2401f9121c19b90b5",
"assets/assets/images/item_potion_default.png": "164b340a865f90986dcff22778f1dd6a",
"assets/assets/images/item_shield.png": "73623b907ecf517740f2b7bccb76dbc3",
"assets/assets/images/jewelry.png": "c45f1a581fa488ef7c58c8aa9047f09e",
"assets/assets/images/map_tile.jpg": "e2eb45709abbc81204ef3149989c5084",
"assets/assets/images/profile-bg.jpg": "85b35d367ad98bc305c5101ed97a074a",
"assets/assets/images/shutterstock_1867831525.png": "f9f1139c4ecff68238d1d42a97674fb7",
"assets/assets/images/sign.png": "d99c64dea551a8ac9b1d222b8fd41096",
"assets/assets/images/steps.png": "24718981e8ce20a7c1a484b5960a44c7",
"assets/assets/images/top_dummy_banner.png": "55bc95af3e5666915d1124c46c58ebbc",
"assets/assets/item_random_point.png": "d2321929d8465b6466f22228585fe46c",
"assets/assets/lottie_energy_box.json": "d17c43f0a97f7908b512c66a056c76c9",
"assets/assets/lottie_item_booster.json": "2e9c3ad95ba36372abea23f1da4c68c9",
"assets/assets/lottie_level_up.json": "ad105604965a14fe946c729a91ce688d",
"assets/assets/lottie_tutorial_animation.json": "3828c6e0fc8acbbf0aba8ff73c8e72ff",
"assets/assets/map_loading.png": "1780bc64c6bc81176ac678a14d16ba89",
"assets/assets/map_loading2.png": "eac80bb8f4b041a5d9d8871c6256f9b2",
"assets/assets/map_styles/dark.json": "ead04b4ee37c59a7018d29f129b2886f",
"assets/assets/map_styles/silver.json": "5a6cd16c1d48790c145b896624fa0fe3",
"assets/assets/new_boost.png": "af3500914d73f65cf2f471be96c2f111",
"assets/assets/quest_bg.png": "c336450ece3f514c0f046055f907e51c",
"assets/assets/quest_blue.png": "19bfc79865d9ad1cbde76d16ccc973e2",
"assets/assets/quest_green.png": "89450178ac25bad009718873f6765ffc",
"assets/assets/quest_red.png": "ca244e42804aace1ac1296b2ff49a548",
"assets/assets/quest_title.png": "26b01cb02942ac4f3faa7d8afc2018fb",
"assets/assets/splash_video.mp4": "bd98ebe2d751a14c13d6c0e6f0686e4a",
"assets/assets/thunder.gif": "bb9eb93c322ba4a98be999493fae9026",
"assets/assets/typewriter-1.mp3": "fa9649b1158499d41ca9045001af7e41",
"assets/assets/VFX02_TP_COM2.json": "629a826e0a6ef9741ab212fff2d0d5a2",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "cb0a52d5f636f0cb69b874340da079f6",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6fee9d2ce2384dabf3bfd001bdb9b661",
"/": "6fee9d2ce2384dabf3bfd001bdb9b661",
"main.dart.js": "f354e874e83c740ebdbd8724fb1e5c51",
"manifest.json": "282314d4fec953996137ece730469bfa",
"version.json": "7a128f8977d33195df5b7c3063285d0b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
