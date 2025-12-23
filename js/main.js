// 【重要】Firebaseプロジェクト作成時にコピーした設定情報をここに貼り付けます
const firebaseConfig = {
    apiKey: "AIzaSyAxZffh198by405B4t64hTMyEFatYiX92A",
    authDomain: "point-tuika.firebaseapp.com",
    projectId: "point-tuika",
    storageBucket: "point-tuika.firebasestorage.app",
    messagingSenderId: "763384904606",
    appId: "1:763384904606:web:8d7556d0089b5f9f08b48f"
  };

// Firebaseアプリの初期化
firebase.initializeApp(firebaseConfig);

// --- デモモード用の設定とクラス ---

// デモ用のダミークエストデータ
const DEMO_QUESTS = [
    {
        "id": "7j8wOy0WrPdK1oBh4HUl",
        "title": "度を超した愛で、視界良好！前橋でメガネをかけちゃうぞ☆",
        "description": "「最近、文字がボヤける…」「あのアイドルの顔が見えない…」そんな悩みを抱えていませんか？視界がクリアになるだけで、世界はもっと輝きます！JINS 前橋店に行って、あなたにぴったりの一本を見つけましょう。最新のトレンドフレームを試着するだけでも楽しいですが、ここは思い切って、新しいメガネ（またはサングラス）をゲット！あなたの視力も気分も爆上げだ！クリアの証として、購入した証明を見せてくださいね。",
        "points": 100,
        "clearQRCodeValue": "jins park"
    },
    {
        "id": "D3GPAyFawBM9k287xf42",
        "title": "オランダ気分で「豚」を食らう！ぐりーんふらわー牧場グルメ探検隊",
        "description": "前橋ぐりーんふらわー牧場といえば、雄大な風車と美味しいグルメ！オランダ風の景色を眺めるだけじゃもったいない。牧場名物の豚肉を使った軽食や、濃厚な牧場ソフトクリームなど、美味しいものを食べてこそ観光の醍醐味です。このクエストでは、牧場の美味しいものを500円分以上味わうことをミッションとします。胃袋を満たし、大満足でクリアしましょう！",
        "points": 100,
        "clearQRCodeValue": "green flower farm"
    },
    {
        "id": "NHCM6EvX9mkKqkxPz5Je",
        "title": "いざ、線路はつづくよどこまでも！大胡を巡るプチ旅団！",
        "description": "たまには電車に乗って、ガタンゴトンと旅気分を味わってみない？ 上毛電気鉄道の電車って、カラフルでとっても可愛いんだよ！ どこか遠くまで行かなくてもいいの。ちょこっと乗るだけでも、窓の外の景色が流れていくのを見ていると、なんだか心が洗われるみたい！ 冒険のスタート地点でも、ゴール地点でもいいから、大胡駅と電車が繋がる瞬間を体験してみて！ きっぷを買うところから、もうクエストは始まってるよ！ 無事に乗車・降車した証として、あなたの冒険の証明となる切符を見せてくださいね！",
        "points": 100,
        "clearQRCodeValue": "ogo station"
    },
    {
        "id": "OCvB2XTKceJ5mO82To6p",
        "title": "【至高のひんやり】映え花畑でえもえもアイス！",
        "description": "パーク内の売店で販売しているオリジナルアイスクリームを購入し、園内の「映えスポット」と呼ばれる場所でアイスと一緒に写真を撮って記録しよう！花とアイスの映えコラボで、心も身体もクールダウン！",
        "points": 100,
        "clearQRCodeValue": "flower park"
    },
    {
        "id": "PnNl0n5gEZJVYj6C6Iju",
        "title": "名物ポップコーンでエネルギーチャージ！",
        "description": "パーク内にある売店や軽食コーナーで、ポップコーンやチュロス、ドリンクなどの軽食を購入して味わおう！アトラクションの合間の休憩で、るなぱあくの雰囲気を満喫せよ！",
        "points": 100,
        "clearQRCodeValue": "runa park"
    },
    {
        "id": "So9XsS81Yb1v4T4TP07B",
        "title": "伝説のケチャップ味を追え！",
        "description": "最近、なんだか心があったかくなるような、懐かしい味が恋しいの…。 モモヤさんは昭和31年創業なんだって！きっと、長年の歴史が詰まった、魔法の味がするはず！ たくさんあるメニューの中で、レトロ洋食の代表格、「ナポリタン」か「オムライス」を選んでみて！ 昔ながらのケチャップの香りとか、ふわふわ卵の優しさとか、きっとあなたの心をキュンとさせてくれるよ！ ロケ地にも使われる素敵な空間で、美味しいひとときを過ごしてね！ クリアの証として、あなたの胃袋を満たした証明を見せてください！",
        "points": 100,
        "clearQRCodeValue": "momoya"
    },
    {
        "id": "TgKhymgEwRLA9hcYUb3Y",
        "title": "キングオブPIZZAを食べ尽くせ！炎の釜焼きトライアル！",
        "description": "ねぇねぇ！「キングオブピッツァ」の称号を持つお店のピザを食べずに帰るなんて、もったいなさすぎるよ！ 薪窯で焼かれたアツアツのピッツァは、きっと頬っぺたが落ちちゃうくらい美味しいはず！ マルゲリータみたいに定番のものも素敵だし、ちょっと変わったオリジナルピザにチャレンジするのも楽しいかも！ 表面はパリッと、中はモチモチの生地を一口食べれば、そこはもうイタリアかも！？ さあ、勇気を出して、最高の一枚をオーダーしてね！ クリアの証として、あなたの冒険の記録（レシートかピッツァの写真）を見せてください！",
        "points": 100,
        "clearQRCodeValue": "pesca"
    },
    {
        "id": "VjvXFvacXqyPBEv1ZkJf",
        "title": "【お家でポンチ】家族や友人へ！テイクアウトで味をシェアせよ！",
        "description": "レストランポンチで提供されている、テイクアウト可能なメニュー（例：お弁当、パン、オリジナルドレッシングなど）を一つ購入しよう！お店の味を自宅でも楽しんだり、お土産として贈るべし！",
        "points": 100,
        "clearQRCodeValue": "ponchi"
    },
    {
        "id": "WNTdidGk2PHwNwFFDPDt",
        "title": "レトロカフェで糖分補給せよ！",
        "description": "「昭和庁舎で冒険してたら、お腹がすいちゃった…。そんな時、ふと見つけた秘密のオアシス『G FACE CAFE』！ここには、頑張るみんなを癒やす魔法のドリンクとスイーツがあるんだって！レトロな雰囲気の中でひと休みなんて、えもえもじゃない？キミもここでエネルギーチャージして、ホッと一息ついちゃおう！」",
        "points": 100,
        "clearQRCodeValue": "showa government building"
    },
    {
        "id": "Zjksgzs67TLMOmsKtzAb",
        "title": "座して待つべからず！『未知との遭遇』は五百円から始まる冒険だ！",
        "description": "「退屈なんて、絶対ダメ！」前橋ガレリアでは、色々な楽しいイベントや、新しい体験ができるワークショップが開催されていることがあるんだって！ただお店を見て回るだけじゃなくて、一歩踏み込んで、その場ならではの体験をしてみるのはどうかしら？新しい趣味が見つかるかもしれないし、誰かと素敵な出会いがあるかも！手作りの楽しさに触れたり、プロの技を間近で見たり…あなたの毎日をちょっとカラフルにするような、刺激的な時間を見つけてみて！その特別な体験をした証明として、参加した時のチケットやレシートを見せてくれると嬉しいな。",
        "points": 100,
        "clearQRCodeValue": "gareria"
    },
    {
        "id": "a3y16WI28wLg4oga6a24",
        "title": "【知の探求者】新たな世界への扉！「運命の一冊」を発掘せよ！",
        "description": "書籍フロアで、ジャンルを問わず新しい本を一冊以上購入しよう！気になっていたベストセラーや、偶然見つけた隠れた名作など、「今のあなた」に響く運命の一冊を見つけ出すべし！",
        "points": 100,
        "clearQRCodeValue": "book manz academy"
    },
    {
        "id": "pPO36ENInpc7iISsYmlX",
        "title": "迷宮グルメアタック！500円の至福で満腹ゲージを限界突破せよ！",
        "description": "「今日のお昼、何にする〜？」迷っちゃうほどたくさんお店があるのが、けやきウォークのいいところ！今回は特に、サクッと美味しいものが手に入るフードコートか、お家に持って帰れるテイクアウトのお店に注目よ！あの香ばしい匂い、焼きたてのパン、甘いデザート…どれもこれも魅力的すぎるわ。気分に合わせて選んで、お腹を満足させてあげてね。美味しいものを買って、ニコニコ笑顔になるのが私のクエストよ！クリアの証として、購入した時のレシートを私に見せてほしいな。",
        "points": 100,
        "clearQRCodeValue": "keyaki"
    },
    {
        "id": "r3b177bHIJZiVVPCBlfx",
        "title": "光と音の祭典！チケットをゲットして、２万人の熱狂の渦に飛び込め！",
        "description": "「わくわく！何が始まるの？」巨大なドームの中で、今、何かが開催されているはず！それは白熱のレースかもしれないし、大好きなアーティストのライブかもしれないわ。せっかくグリーンドームに来たんだもの、そのエネルギーを体いっぱいに浴びてみてほしいの。非日常の空間に飛び込んで、思いっきり楽しんじゃおう！大きなイベントに参加すれば、街全体も盛り上がるんだから！この特別な時間の証として、入場した時のチケットを見せてね。",
        "points": 100,
        "clearQRCodeValue": "green dome"
    },
    {
        "id": "rlyUAhzW44bHTG2bbNoS",
        "title": "旅立ちの鐘と700円の誓い！エキナカ最強グルメを手に入れろ！",
        "description": "「旅の始まりと終わりには、やっぱりお土産が必要だわ！」前橋駅の駅ビルには、群馬ならではの美味しいものや、ちょっとしたお洒落なアイテムが詰まっているの。誰かへのプレゼントでもいいし、もちろん、自分への「おつかれさま」のご褒美でもいいわ！駅で地元の商品を買うことで、前橋の魅力をみんなに広げるお手伝いになるんだから。さあ、700円以上の素敵な一品を見つけて、楽しい思い出と一緒に連れて帰ってね！購入した証明のレシートを見せてくれるかな？",
        "points": 100,
        "clearQRCodeValue": "maebashi station"
    }
];

// デモ用のダミースポットデータ
const DEMO_SPOTS = [
    {
        "id": "7j8wOy0WrPdK1oBh4HUl",
        "name": "JINS 前橋店",
        "latitude": "36.425016",
        "longitude": "139.045706",
        "questId": "7j8wOy0WrPdK1oBh4HUl"
    },
    {
        "id": "K7s2vR9murLqYAdgcBoo",
        "name": "前橋ぐりーんふらわー牧場",
        "latitude": 36.4600196266689,
        "longitude": 139.13339118138,
        "questId": "D3GPAyFawBM9k287xf42"
    },
    {
        "id": "OCvB2XTKceJ5mO82To6p",
        "name": "Gunma Flower Park +",
        "latitude": "36.457008",
        "longitude": "139.176877",
        "questId": "OCvB2XTKceJ5mO82To6p"
    },
    {
        "id": "PnNl0n5gEZJVYj6C6Iju",
        "name": "るなぱあく",
        "latitude": 36.395299,
        "longitude": 139.063069,
        "questId": "PnNl0n5gEZJVYj6C6Iju"
    },
    {
        "id": "VjvXFvacXqyPBEv1ZkJf",
        "name": "レストラン ポンチ",
        "latitude": "36.395084",
        "longitude": "139.070254",
        "questId": "VjvXFvacXqyPBEv1ZkJf"
    },
    {
        "id": "a3y16WI28wLg4oga6a24",
        "name": "ブックマンズアカデミー前橋店",
        "latitude": "36.396108",
        "longitude": "139.042696",
        "questId": "a3y16WI28wLg4oga6a24"
    },
    {
        "id": "cOnIG8b8VVBA2b0TZ2ca",
        "name": "大胡駅",
        "latitude": 36.4130765415983,
        "longitude": 139.15664829265,
        "questId": "NHCM6EvX9mkKqkxPz5Je"
    },
    {
        "id": "eVZCoGmiUVaRT6fX1htq",
        "name": "バーラーレストラン モモヤ",
        "latitude": 36.391524,
        "longitude": 139.069128,
        "questId": "So9XsS81Yb1v4T4TP07B"
    },
    {
        "id": "eu8HLpf79Fe5O81oL6M5",
        "name": "前橋まちなかPESCA!",
        "latitude": 36.3910054125375,
        "longitude": 139.068710638701,
        "questId": "TgKhymgEwRLA9hcYUb3Y"
    },
    {
        "id": "fEoMZ0yG0KefRNvkM83G",
        "name": "群馬県庁 昭和庁舎",
        "latitude": 36.3921535536598,
        "longitude": 139.069185047785,
        "questId": "WNTdidGk2PHwNwFFDPDt"
    },
    {
        "id": "j7YnTaSAjPdTalH6PxqZ",
        "name": "まえばしガレリア",
        "latitude": 36.3913465088415,
        "longitude": 139.072377561576,
        "questId": "Zjksgzs67TLMOmsKtzAb"
    },
    {
        "id": "j8jNlhRnQ1Gk4edsU04b",
        "name": "けやきウォーク前橋",
        "latitude": 36.379433,
        "longitude": 139.077013,
        "questId": "pPO36ENInpc7iISsYmlX"
    },
    {
        "id": "jgpHn6MdkKLOOF3Istgq",
        "name": "日本トーターグリーンドーム前橋",
        "latitude": 36.402031,
        "longitude": 139.065361,
        "questId": "r3b177bHIJZiVVPCBlfx"
    },
    {
        "id": "muqtsUk67h3HKBFAaQw1",
        "name": "前橋駅",
        "latitude": 36.3834524086001,
        "longitude": 139.073085057189,
        "questId": "rlyUAhzW44bHTG2bbNoS"
    }
];

// Firestoreの挙動を模倣するクラス
class MockFirestore {
    constructor() {
        this.data = {
            quests: {},
            spots: {},
            users: {},
            authTokens: {}
        };
        this.listeners = {}; 

        this._loadInitialData();
    }

    _loadInitialData() {
        DEMO_QUESTS.forEach(q => this.data.quests[q.id] = q);
        DEMO_SPOTS.forEach(s => this.data.spots[s.id] = s);
        
        const savedUsers = localStorage.getItem('demo_users_data');
        if (savedUsers) {
            this.data.users = JSON.parse(savedUsers);
        }
    }

    _saveUserData() {
        localStorage.setItem('demo_users_data', JSON.stringify(this.data.users));
        Object.keys(this.listeners).forEach(path => {
            if (path.startsWith('users/')) {
                const userId = path.split('/')[1];
                if (this.data.users[userId] && this.listeners[path]) {
                    this.listeners[path]({
                        exists: true,
                        data: () => this.data.users[userId]
                    });
                }
            }
        });
    }

    resetAll() {
        this.data.users = {};
        this.data.authTokens = {};
        localStorage.removeItem('demo_users_data');
    }

    collection(collectionName) {
        return new MockCollectionReference(this, collectionName);
    }
    
    async runTransaction(updateFunction) {
        const transaction = {
            get: async (ref) => ref.get(),
            update: (ref, data) => ref.update(data),
            set: (ref, data) => ref.set(data)
        };
        return await updateFunction(transaction);
    }
}

class MockCollectionReference {
    constructor(db, collectionName) {
        this.db = db;
        this.name = collectionName;
    }

    doc(docId) {
        return new MockDocumentReference(this.db, this.name, docId);
    }

    async get() {
        const docs = Object.values(this.db.data[this.name] || {}).map(data => ({
            id: data.id,
            data: () => data
        }));
        return { docs };
    }
    
    where(field, op, value) {
        return {
            get: async () => {
                const all = Object.values(this.db.data[this.name] || {});
                const filtered = all.filter(item => item[field] === value);
                return {
                    empty: filtered.length === 0,
                    docs: filtered.map(data => ({ id: data.id, data: () => data }))
                };
            }
        };
    }
}

class MockDocumentReference {
    constructor(db, collectionName, docId) {
        this.db = db;
        this.collectionName = collectionName;
        this.docId = docId;
        this.path = `${collectionName}/${docId}`;
    }

    async get() {
        const data = this.db.data[this.collectionName][this.docId];
        return {
            exists: !!data,
            data: () => data
        };
    }

    async set(data, options) {
        if (options && options.merge && this.db.data[this.collectionName][this.docId]) {
            this.db.data[this.collectionName][this.docId] = {
                ...this.db.data[this.collectionName][this.docId],
                ...data
            };
        } else {
            this.db.data[this.collectionName][this.docId] = { id: this.docId, ...data };
        }
        if (this.collectionName === 'users') this.db._saveUserData();
    }

    async update(data) {
        if (!this.db.data[this.collectionName][this.docId]) throw "Document does not exist";
        this.db.data[this.collectionName][this.docId] = {
            ...this.db.data[this.collectionName][this.docId],
            ...data
        };
        if (this.collectionName === 'users') this.db._saveUserData();
    }

    onSnapshot(callback) {
        const currentData = this.db.data[this.collectionName][this.docId];
        callback({
            exists: !!currentData,
            data: () => currentData
        });
        
        this.db.listeners[this.path] = callback;

        return () => {
            delete this.db.listeners[this.path];
        };
    }
}

// ------------------------------

// モード判定
const isDemoMode = localStorage.getItem('app_mode') === 'demo';

// DBインスタンスの切り替え
let db;
let mockDbInstance = null;

if (isDemoMode) {
    console.log("Running in DEMO MODE");
    mockDbInstance = new MockFirestore();
    db = mockDbInstance;
} else {
    console.log("Running in PRODUCTION MODE");
    db = firebase.firestore();
}


// --- 設定項目 ---
// スタンプのレイヤー画像
const STAMP_LAYERS = [
    'images/stamp_layer_1.png',
    'images/stamp_layer_2.png',
    'images/stamp_layer_3.png',
    'images/stamp_layer_4.png',
    'images/stamp_layer_5.png', 
];

// コンプリートに必要なスタンプの数
const STAMP_COMPLETE_COUNT = 1;

// コンプリート時の報酬画像リスト
const REWARD_IMAGES = [
    { name: 'コンプリート報酬', url: 'images/special_reward.png' },
];

// --- 設定項目ここまで ---


// メインアプリの初期化
document.addEventListener('DOMContentLoaded', () => {
    const app = Vue.createApp({
        data() {
            return {
                loading: true,
                userId: null,
                authToken: null,
                isTokenLoading: false,
                errorMessage: '',
                isScannerVisible: false,
                scanResultMessage: '',
                scanResultClass: '',
                videoStream: null,
                userProfile: null,
                allQuests: [],
                map: null,
                spots: [],
                userListener: null,
                // 推しデータは削除（標準ピン使用のため）
                isQuestStartAnimationVisible: false,
                isQuestClearAnimationVisible: false,
                isCompleteScreenVisible: false, 
                rewardImages: REWARD_IMAGES, 
                mapMarkers: [],
                isDemoMode: isDemoMode
            };
        },
        computed: {
            completedQuestCount() {
                if (!this.userProfile || !this.userProfile.questProgress) return 0;
                return Object.values(this.userProfile.questProgress)
                    .filter(status => status === 'completed').length;
            },
            completedStamps() {
                return STAMP_LAYERS.slice(0, this.completedQuestCount);
            },
            isStampCompleted() {
                return this.completedQuestCount >= STAMP_COMPLETE_COUNT;
            },
            inProgressQuests() {
                if (!this.userProfile || !this.userProfile.questProgress || this.allQuests.length === 0) {
                    return [];
                }
                const inProgressQuestIds = Object.keys(this.userProfile.questProgress)
                    .filter(questId => this.userProfile.questProgress[questId] === 'in_progress');
                return this.allQuests.filter(quest => inProgressQuestIds.includes(quest.id));
            },
        },
        async mounted() {
            // 推しID読み込み処理は削除

            await this.initializeUser();
            this.loading = false;
            
            await this.$nextTick();
            this.initializeMap();

            if (this.isStampCompleted) {
                this.showCompleteScreen();
            }
        },
        methods: {
            // --- デモモード制御 ---
            async forceReload() {
                if ('serviceWorker' in navigator) {
                    const registrations = await navigator.serviceWorker.getRegistrations();
                    for (const registration of registrations) {
                        await registration.unregister();
                    }
                }
                const url = new URL(window.location.href);
                url.searchParams.set('reload_time', Date.now());
                window.location.href = url.toString();
            },

            async toggleDemoMode() {
                if (this.isDemoMode) {
                    if(confirm("本番モード（Firebase接続）に切り替えますか？")) {
                        localStorage.removeItem('app_mode');
                        await this.forceReload();
                    }
                } else {
                    if(confirm("デモモード（ローカル動作）に切り替えますか？")) {
                        localStorage.setItem('app_mode', 'demo');
                        await this.forceReload();
                    }
                }
            },

            async resetDemoData() {
                if (this.isDemoMode && mockDbInstance) {
                    if(confirm("デモデータを全てリセットし、初期状態に戻しますか？")) {
                        mockDbInstance.resetAll();
                        localStorage.removeItem('questAppUserId'); 
                        await this.forceReload();
                    }
                }
            },
            // --------------------

            async initializeUser() {
                let savedUserId = localStorage.getItem('questAppUserId');
                
                if (this.isDemoMode && !savedUserId) {
                    savedUserId = 'demo-user-' + Date.now();
                    localStorage.setItem('questAppUserId', savedUserId);
                } else if (!savedUserId) {
                    savedUserId = this.generateUniqueId();
                    localStorage.setItem('questAppUserId', savedUserId);
                }
                this.userId = savedUserId;

                await Promise.all([this.fetchAllQuests(), this.fetchAllSpots()]);
                this.attachUserListener();
            },
            generateUniqueId() {
                return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
            },
            attachUserListener() {
                if (this.userListener) {
                    this.userListener(); // unsubscribe
                }
                const userRef = db.collection("users").doc(this.userId);
                
                this.userListener = userRef.onSnapshot((doc) => {
                    console.log("ユーザーデータの更新を検知しました。");
                    if (doc.exists) {
                        const data = (typeof doc.data === 'function') ? doc.data() : doc.data;
                        
                        const oldQuestCount = this.completedQuestCount;
                        this.userProfile = data;
                        if (this.isStampCompleted && oldQuestCount < STAMP_COMPLETE_COUNT) {
                           this.showCompleteScreen();
                        }
                    } else {
                        const newUserProfile = { userId: this.userId, questProgress: {}, points: 0 };
                        userRef.set(newUserProfile);
                        this.userProfile = newUserProfile;
                    }
                    if (this.map) {
                        this.updateMapMarkers();
                    }
                });
            },
            initializeMap() {
                const mapElement = document.getElementById('map');
                if (mapElement) {
                    // Leafletの初期化
                    // 中心座標はスポットデータがあれば最初のスポット、なければ適当な初期値
                    let centerLat = 36.391618;
                    let centerLng = 139.070804;
                    if(this.spots.length > 0) {
                        centerLat = parseFloat(this.spots[0].latitude);
                        centerLng = parseFloat(this.spots[0].longitude);
                    }

                    this.map = L.map('map').setView([centerLat, centerLng], 16);

                    // OpenStreetMapのタイルレイヤーを追加
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(this.map);

                    this.updateMapMarkers();
                } else {
                    console.error('マップ要素が見つかりません。');
                }
            },
            async fetchAllQuests() {
                const questsSnapshot = await db.collection('quests').get();
                this.allQuests = questsSnapshot.docs.map(doc => {
                    const data = (typeof doc.data === 'function') ? doc.data() : doc.data;
                    return { id: doc.id, ...data };
                });
            },
            async fetchAllSpots() {
                const spotsSnapshot = await db.collection('spots').get();
                this.spots = spotsSnapshot.docs.map(doc => {
                    const data = (typeof doc.data === 'function') ? doc.data() : doc.data;
                    return { id: doc.id, ...data };
                });
            },

            updateMapMarkers() {
                // 既存のマーカーを削除
                this.mapMarkers.forEach(item => {
                    this.map.removeLayer(item.marker);
                });
                this.mapMarkers = [];

                // Leafletのデフォルトアイコン設定（画像パス切れ対策）
                delete L.Icon.Default.prototype._getIconUrl;
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
                    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
                });

                this.spots.forEach(spot => {
                    const lat = parseFloat(spot.latitude);
                    const lng = parseFloat(spot.longitude);
                    
                    const questStatus = this.userProfile ? this.userProfile.questProgress[spot.questId] : undefined;
                    const isCompleted = questStatus === 'completed';

                    // 完了済みなら半透明にする（Leafletのopacityオプション）
                    const opacityVal = isCompleted ? 0.5 : 1.0;

                    const marker = L.marker([lat, lng], { opacity: opacityVal }).addTo(this.map);
                    
                    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;

                    const popupContent = `
                        <div style="text-align:center;">
                            <strong>${spot.name}</strong><br>
                            <a href="${mapsUrl}" target="_blank" class="btn btn-primary btn-sm mt-2" style="color:white; text-decoration:none;">Googleマップでナビ</a>
                        </div>
                    `;

                    marker.bindPopup(popupContent);
                    
                    this.mapMarkers.push({ 
                        marker: marker, 
                        questId: spot.questId 
                    });
                });
            },
            
            // setMyOshi メソッドは削除

            focusOnQuestSpot(questId) {
                const spot = this.spots.find(s => s.questId === questId);
                if (!spot) {
                    console.warn(`クエストID ${questId} に関連するスポットが見つかりません。`);
                    return;
                }

                const markerData = this.mapMarkers.find(m => m.questId === questId);
                
                const lat = parseFloat(spot.latitude);
                const lng = parseFloat(spot.longitude);

                // LeafletのflyToアニメーションで移動
                this.map.flyTo([lat, lng], 18);

                if (markerData) {
                    markerData.marker.openPopup();
                }
            },

            async generateAuthToken() {
                this.isTokenLoading = true;
                this.authToken = null;
                this.errorMessage = '';
                try {
                    const token = Math.floor(100000 + Math.random() * 900000).toString();
                    
                    let expiresAt;
                    if (this.isDemoMode) {
                        expiresAt = new Date(Date.now() + 5 * 60 * 1000);
                    } else {
                        expiresAt = firebase.firestore.Timestamp.fromDate(new Date(Date.now() + 5 * 60 * 1000));
                    }

                    await db.collection('authTokens').doc(token).set({
                        userId: this.userId,
                        expiresAt: expiresAt
                    });
                    this.authToken = token;
                } catch (error) {
                    console.error("合言葉の発行に失敗しました: ", error);
                    this.errorMessage = "エラーが発生しました。時間をおいて再度お試しください。";
                } finally {
                    this.isTokenLoading = false;
                }
            },
            async startScanner() {
                this.isScannerVisible = true;
                this.scanResultMessage = '';
                this.$nextTick(async () => {
                    const video = document.getElementById('scanner-video');
                    if (!video) {
                        console.error("スキャナーのvideo要素が見つかりません。");
                        this.isScannerVisible = false;
                        return;
                    }
                    try {
                        this.videoStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
                        video.srcObject = this.videoStream;
                        video.play();
                        requestAnimationFrame(this.tick.bind(this));
                    } catch (err) {
                        console.error("カメラの起動に失敗:", err);
                        this.scanResultMessage = "カメラの起動に失敗しました。カメラのアクセスを許可してください。";
                        this.scanResultClass = "alert-danger";
                        this.isScannerVisible = false;
                    }
                });
            },
            stopScanner() {
                if (this.videoStream) {
                    this.videoStream.getTracks().forEach(track => track.stop());
                }
                this.isScannerVisible = false;
            },
            tick() {
                if (!this.isScannerVisible) return;
                const video = document.getElementById('scanner-video');
                if (video.readyState === video.HAVE_ENOUGH_DATA) {
                    const canvasElement = document.createElement('canvas');
                    const canvas = canvasElement.getContext('2d');
                    canvasElement.width = video.videoWidth;
                    canvasElement.height = video.videoHeight;
                    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
                    const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
                    const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" });
                    if (code) {
                        this.stopScanner();
                        this.handleQrCode(code.data);
                        return;
                    }
                }
                requestAnimationFrame(this.tick.bind(this));
            },
            async handleQrCode(qrCodeValue) {
                try {
                    const userRef = db.collection("users").doc(this.userId);

                    if (qrCodeValue.startsWith('QUEST_START::')) {
                        const questId = qrCodeValue.split('::')[1];
                        
                        const questProgress = this.userProfile.questProgress || {};

                        if (questProgress[questId]) {
                            this.scanResultMessage = `このクエストは既に開始済み、またはクリア済みです。`;
                            this.scanResultClass = "alert-warning";
                            return;
                        }

                        await userRef.set({
                            questProgress: { [questId]: "in_progress" }
                        }, { merge: true });

                        this.scanResultMessage = `クエストを開始しました！`;
                        this.scanResultClass = "alert-info";
                        this.playQuestStartAnimation();

                    } else {
                        const questsRef = db.collection("quests");
                        const querySnapshot = await questsRef.where("clearQRCodeValue", "==", qrCodeValue).get();
                        
                        if (querySnapshot.empty) {
                            this.scanResultMessage = "無効なQRコードです。";
                            this.scanResultClass = "alert-warning";
                            return;
                        }

                        const questDoc = querySnapshot.docs[0];
                        const questId = questDoc.id;
                        
                        const questData = (typeof questDoc.data === 'function') ? questDoc.data() : questDoc.data;
                        const questPoints = questData.points || 0;

                        const questProgress = this.userProfile.questProgress || {};

                        if (questProgress[questId] === 'completed') {
                            this.scanResultMessage = `クエスト「${questData.title}」は既にクリア済みです。`;
                            this.scanResultClass = "alert-warning";
                            return;
                        }
                        
                        await db.runTransaction(async (transaction) => {
                            const userDoc = await transaction.get(userRef);
                            if (!userDoc.exists) {
                                throw "User document not found!";
                            }
                            
                            const userData = (typeof userDoc.data === 'function') ? userDoc.data() : userDoc.data;

                            const currentPoints = userData.points || 0;
                            const newPoints = currentPoints + questPoints;
                            
                            const newQuestProgress = { ...(userData.questProgress || {}), [questId]: "completed" };

                            transaction.update(userRef, { 
                                questProgress: newQuestProgress,
                                points: newPoints 
                            });
                        });
                        
                        this.scanResultMessage = `クエスト「${questData.title}」をクリア！ ${questPoints}ポイント獲得！`;
                        this.scanResultClass = "alert-success";
                        this.playQuestClearAnimation();
                    }

                } catch (error) {
                    console.error("QRコード処理エラー:", error);
                    this.scanResultMessage = "QRコードの処理中にエラーが発生しました。";
                    this.scanResultClass = "alert-danger";
                }
            },
            playQuestStartAnimation() {
                this.isQuestStartAnimationVisible = true;
                this.$nextTick(() => {
                    const container = document.getElementById('lottie-start-container');
                    container.innerHTML = ''; 
                    const anim = lottie.loadAnimation({
                        container: container,
                        renderer: 'svg',
                        loop: false,
                        autoplay: true,
                        path: 'lottie/quest_start.json'
                    });
                    anim.addEventListener('complete', () => {
                        this.isQuestStartAnimationVisible = false;
                        anim.destroy();
                    });
                });
            },
            playQuestClearAnimation() {
                this.isQuestClearAnimationVisible = true;
                this.$nextTick(() => {
                    const container = document.getElementById('lottie-clear-container');
                    container.innerHTML = '';
                    const anim = lottie.loadAnimation({
                        container: container,
                        renderer: 'svg',
                        loop: false,
                        autoplay: true,
                        path: 'lottie/quest_clear.json'
                    });
                    anim.addEventListener('complete', () => {
                        this.isQuestClearAnimationVisible = false;
                        anim.destroy();
                    });
                });
            },
            showCompleteScreen() {
                this.isCompleteScreenVisible = true;
            },
            closeCompleteScreen() {
                this.isCompleteScreenVisible = false;
            },
            async downloadImage(imageUrl) {
                try {
                    const response = await fetch(imageUrl);
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    const fileName = imageUrl.split('/').pop();
                    a.download = fileName;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    a.remove();
                } catch (error) {
                    console.error('画像のダウンロードに失敗しました:', error);
                    alert('画像のダウンロードに失敗しました。');
                }
            }
        }
    });
    window.pwaVueApp = app.mount('#app');
});