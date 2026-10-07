const movies = [
  {
    id: 1,
    title: "インターステラー",
    year: 2014,
    genre: "SF",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80",
    review: "宇宙よりも、父と娘の物語に泣いた。"
  },
  {
    id: 2,
    title: "ショーシャンクの空に",
    year: 1994,
    genre: "ドラマ",
    rating: 4.9,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "どれだけ暗くても、希望だけは捨てたくない。"
  },
  {
    id: 3,
    title: "インセプション",
    year: 2010,
    genre: "SF",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",
    review: "夢の中の夢。観終わっても頭の中が夢だった。"
  },
  {
    id: 4,
    title: "君の名は。",
    year: 2016,
    genre: "アニメ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    review: "出会うはずのない二人が出会う奇跡に弱い。"
  },
  {
    id: 5,
    title: "千と千尋の神隠し",
    year: 2001,
    genre: "アニメ",
    rating: 4.9,
    poster: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    review: "子どもの頃と今とで、見える景色が全然違う。"
  },
  {
    id: 6,
    title: "となりのトトロ",
    year: 1988,
    genre: "アニメ",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
    review: "何度観ても、子どもの頃の夏に戻れる。"
  },
  {
    id: 7,
    title: "バック・トゥ・ザ・フューチャー",
    year: 1985,
    genre: "SF",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "何回観てもワクワクする。これぞ娯楽映画。"
  },
  {
    id: 8,
    title: "フォレスト・ガンプ",
    year: 1994,
    genre: "ドラマ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    review: "まっすぐ生きることが、こんなにも眩しい。"
  },
  {
    id: 9,
    title: "グリーンブック",
    year: 2018,
    genre: "ドラマ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "違う二人だからこそ生まれる友情がいい。"
  },
  {
    id: 10,
    title: "ラ・ラ・ランド",
    year: 2016,
    genre: "ミュージカル",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80",
    review: "夢を追うほど、恋が少し切なくなる。"
  },
  {
    id: 11,
    title: "レオン",
    year: 1994,
    genre: "アクション",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80",
    review: "不器用な優しさほど、最後に心を持っていかれる。"
  },
  {
    id: 12,
    title: "最強のふたり",
    year: 2011,
    genre: "コメディ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=600&q=80",
    review: "人生に必要なのは、少しの遠慮のなさかもしれない。"
  },
  {
    id: 13,
    title: "プラダを着た悪魔",
    year: 2006,
    genre: "ドラマ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    review: "仕事も人生も、自分で選ぶから面白い。"
  },
  {
    id: 14,
    title: "マトリックス",
    year: 1999,
    genre: "SF",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",
    review: "世界の見え方を一度ひっくり返される映画。"
  },
  {
    id: 15,
    title: "ターミナル",
    year: 2004,
    genre: "ドラマ",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=600&q=80",
    review: "空港で待つだけなのに、こんなに心が温まる。"
  },
  {
    id: 16,
    title: "アバウト・タイム",
    year: 2013,
    genre: "恋愛",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    review: "普通の一日こそ、大切にしたくなる映画。"
  },
  {
    id: 17,
    title: "グランド・ブダペスト・ホテル",
    year: 2014,
    genre: "コメディ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    review: "画面の隅まで可愛い。映画そのものがおもちゃ箱。"
  },
  {
    id: 18,
    title: "セッション",
    year: 2014,
    genre: "ドラマ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=80",
    review: "努力と狂気の境界線が怖いほど熱い。"
  },
  {
    id: 19,
    title: "オデッセイ",
    year: 2015,
    genre: "SF",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    review: "絶望的な状況なのに、なぜか前向きになれる。"
  },
  {
    id: 20,
    title: "エターナル・サンシャイン",
    year: 2004,
    genre: "恋愛",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=600&q=80",
    review: "忘れたい恋ほど、忘れたくないものなのかも。"
  },
  {
    id: 21,
    title: "タイタニック",
    year: 1997,
    genre: "恋愛",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80",
    review: "恋愛映画なのに、最後まで息をするのを忘れる。"
  },
  {
    id: 22,
    title: "ココ・アヴァン・シャネル",
    year: 2009,
    genre: "ドラマ",
    rating: 4.4,
    poster: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
    review: "自分の人生を自分で決める強さがかっこいい。"
  },
  {
    id: 23,
    title: "パラサイト 半地下の家族",
    year: 2019,
    genre: "サスペンス",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",
    review: "笑っていたはずなのに、気づけば背筋が凍っていた。"
  },
  {
    id: 24,
    title: "ナイブズ・アウト",
    year: 2019,
    genre: "ミステリー",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    review: "誰を信じればいいのか、最後まで疑ってしまう。"
  },
  {
    id: 25,
    title: "ジョーカー",
    year: 2019,
    genre: "ドラマ",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "笑顔の裏側にある孤独が、ずっと重く残る。"
  },
  {
    id: 26,
    title: "トップガン マーヴェリック",
    year: 2022,
    genre: "アクション",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=600&q=80",
    review: "大画面で観て正解。飛ぶだけでこんなに熱くなる。"
  },
  {
    id: 27,
    title: "スパイダーマン：スパイダーバース",
    year: 2018,
    genre: "アニメ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    review: "映像表現の限界を、軽々と飛び越えていく。"
  },
  {
    id: 28,
    title: "リメンバー・ミー",
    year: 2017,
    genre: "アニメ",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    review: "家族を想う気持ちに、最後は全部持っていかれた。"
  },
  {
    id: 29,
    title: "オール・ユー・ニード・イズ・キル",
    year: 2014,
    genre: "SF",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80",
    review: "死んでは戻る。その繰り返しがクセになる。"
  },
  {
    id: 30,
    title: "キングスマン",
    year: 2014,
    genre: "アクション",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "スタイリッシュなのに容赦ない。爽快感が最高。"
  },

  {
    id: 31,
    title: "花束みたいな恋をした",
    year: 2021,
    genre: "恋愛",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
    review: "好きなものが同じだった二人の、リアルすぎる恋。"
  },
  {
    id: 32,
    title: "君の膵臓をたべたい",
    year: 2017,
    genre: "恋愛",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
    review: "限られた時間だからこそ、出会いが特別になる。"
  },
  {
    id: 33,
    title: "秒速5センチメートル",
    year: 2007,
    genre: "アニメ",
    rating: 4.4,
    poster: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=600&q=80",
    review: "距離よりも、時間が人を遠ざける切なさ。"
  },
  {
    id: 34,
    title: "時をかける少女",
    year: 2006,
    genre: "アニメ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    review: "青春の眩しさと後悔が、タイムリープに詰まってる。"
  },
  {
    id: 35,
    title: "もののけ姫",
    year: 1997,
    genre: "アニメ",
    rating: 4.9,
    poster: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80",
    review: "善悪だけでは割り切れない世界が深すぎる。"
  },
  {
    id: 36,
    title: "魔女の宅急便",
    year: 1989,
    genre: "アニメ",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    review: "知らない街で頑張る姿に、何度でも勇気をもらえる。"
  },
  {
    id: 37,
    title: "風立ちぬ",
    year: 2013,
    genre: "アニメ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
    review: "夢と現実の間で生きる美しさと儚さ。"
  },
  {
    id: 38,
    title: "聲の形",
    year: 2016,
    genre: "アニメ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    review: "後悔した過去と向き合うことの難しさが刺さる。"
  },
  {
    id: 39,
    title: "おおかみこどもの雨と雪",
    year: 2012,
    genre: "アニメ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
    review: "親が子どもを送り出す愛情に、胸がいっぱいになる。"
  },
  {
    id: 40,
    title: "サマーウォーズ",
    year: 2009,
    genre: "アニメ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    review: "家族の力って、やっぱり侮れない。"
  },
  {
    id: 41,
    title: "天空の城ラピュタ",
    year: 1986,
    genre: "アニメ",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
    review: "冒険、友情、ロマン。何歳になってもワクワクする。"
  },
  {
    id: 42,
    title: "天気の子",
    year: 2019,
    genre: "アニメ",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    review: "正しさより大切なものを選ぶ、少し大胆な物語。"
  },
  {
    id: 43,
    title: "君たちはどう生きるか",
    year: 2023,
    genre: "アニメ",
    rating: 4.3,
    poster: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80",
    review: "不思議な世界を旅しながら、生き方を考えさせられる。"
  },
  {
    id: 44,
    title: "グッド・ウィル・ハンティング",
    year: 1997,
    genre: "ドラマ",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "才能よりも、自分を許すことのほうが難しい。"
  },
  {
    id: 45,
    title: "ニュー・シネマ・パラダイス",
    year: 1988,
    genre: "ドラマ",
    rating: 4.9,
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    review: "映画が人生の一部になる瞬間を見せてくれる。"
  },
  {
    id: 46,
    title: "グリーンマイル",
    year: 1999,
    genre: "ドラマ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "優しさと残酷さが同じ場所に存在している。"
  },
  {
    id: 47,
    title: "リトル・ミス・サンシャイン",
    year: 2006,
    genre: "コメディ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "バラバラな家族だからこそ、最後に温かくなる。"
  },
  {
    id: 48,
    title: "イエスマン",
    year: 2008,
    genre: "コメディ",
    rating: 4.4,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "一歩踏み出すだけで、人生は少し変わる。"
  },
  {
    id: 49,
    title: "ホーム・アローン",
    year: 1990,
    genre: "コメディ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    review: "子どもの頃のワクワクが、そのまま映画になってる。"
  },
  {
    id: 50,
    title: "スクール・オブ・ロック",
    year: 2003,
    genre: "コメディ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=80",
    review: "好きなことを全力でやる大人って、やっぱり最高。"
  },
  {
    id: 51,
    title: "グッドフェローズ",
    year: 1990,
    genre: "ドラマ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "華やかさの裏側にある怖さが、じわじわ迫ってくる。"
  },
  {
    id: 52,
    title: "キャッチ・ミー・イフ・ユー・キャン",
    year: 2002,
    genre: "ドラマ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "華やかな逃走劇の裏に、寂しい少年がいる。"
  },
  {
    id: 53,
    title: "マネーボール",
    year: 2011,
    genre: "ドラマ",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80",
    review: "常識を疑うことから、革命は始まる。"
  },
  {
    id: 54,
    title: "ジュマンジ",
    year: 1995,
    genre: "アドベンチャー",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "ゲームの世界が現実になる設定だけでワクワクする。"
  },
  {
    id: 55,
    title: "ライフ・イズ・ビューティフル",
    year: 1997,
    genre: "ドラマ",
    rating: 4.9,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "悲しい現実の中でも、愛は物語を作れる。"
  },
  {
    id: 56,
    title: "ビューティフル・マインド",
    year: 2001,
    genre: "ドラマ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
    review: "天才の苦悩と愛を描いた、静かに強い映画。"
  },
  {
    id: 57,
    title: "トゥルーマン・ショー",
    year: 1998,
    genre: "SF",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",
    review: "自分の人生を自分で選ぶことの意味を考える。"
  },
  {
    id: 58,
    title: "ガタカ",
    year: 1997,
    genre: "SF",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    review: "運命を決めるのは遺伝子だけじゃない。"
  },
  {
    id: 59,
    title: "ブレードランナー",
    year: 1982,
    genre: "SF",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",
    review: "人間とは何かを、雨とネオンの中で問い続ける。"
  },
  {
    id: 60,
    title: "エイリアン",
    year: 1979,
    genre: "SF",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",
    review: "静かな宇宙船だからこそ、恐怖が何倍にもなる。"
  },
  {
    id: 61,
    title: "スター・ウォーズ",
    year: 1977,
    genre: "SF",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80",
    review: "銀河を舞台にした冒険の原点。何度でも熱くなる。"
  },
  {
    id: 62,
    title: "ジュラシック・パーク",
    year: 1993,
    genre: "SF",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80",
    review: "恐竜が現れた瞬間の衝撃は、今観てもすごい。"
  },
  {
    id: 63,
    title: "ターミネーター2",
    year: 1991,
    genre: "アクション",
    rating: 4.9,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "アクションだけじゃない。親子の物語として熱い。"
  },
  {
    id: 64,
    title: "ダイ・ハード",
    year: 1988,
    genre: "アクション",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "普通のおじさんが頑張るから、応援したくなる。"
  },
  {
    id: 65,
    title: "ミッション：インポッシブル",
    year: 1996,
    genre: "アクション",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "スパイ映画の緊張感を、最後まで途切れさせない。"
  },
  {
    id: 66,
    title: "グラディエーター",
    year: 2000,
    genre: "アクション",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "復讐と誇りを背負って戦う姿が、とにかく熱い。"
  },
  {
    id: 67,
    title: "マッドマックス 怒りのデス・ロード",
    year: 2015,
    genre: "アクション",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "ほぼずっと爆走。なのに物語までちゃんと面白い。"
  },
  {
    id: 68,
    title: "ボーン・アイデンティティー",
    year: 2002,
    genre: "アクション",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "記憶を失った男が自分自身を探すスパイ映画。"
  },
  {
    id: 69,
    title: "ミッション：インポッシブル／フォールアウト",
    year: 2018,
    genre: "アクション",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=600&q=80",
    review: "無茶なスタントの連続なのに、全部リアルに見える。"
  },
  {
    id: 70,
    title: "ジョン・ウィック",
    year: 2014,
    genre: "アクション",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "静かに始まり、最後までスタイリッシュに暴れる。"
  },
  {
    id: 71,
    title: "セブン",
    year: 1995,
    genre: "サスペンス",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",
    review: "観終わったあとまで、重たい余韻が残る。"
  },
  {
    id: 72,
    title: "羊たちの沈黙",
    year: 1991,
    genre: "サスペンス",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",
    review: "会話だけでここまで怖くできるのかと思う。"
  },
  {
    id: 73,
    title: "シャッター アイランド",
    year: 2010,
    genre: "ミステリー",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",
    review: "最後まで何が真実なのか疑い続けてしまう。"
  },
  {
    id: 74,
    title: "ユージュアル・サスペクツ",
    year: 1995,
    genre: "ミステリー",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    review: "最後の一瞬で、それまでの景色が変わって見える。"
  },
  {
    id: 75,
    title: "オリエント急行殺人事件",
    year: 2017,
    genre: "ミステリー",
    rating: 4.4,
    poster: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    review: "列車という閉ざされた空間で、全員が怪しく見える。"
  },
  {
    id: 76,
    title: "オーシャンズ11",
    year: 2001,
    genre: "コメディ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "泥棒なのに、なぜか全員を応援したくなる。"
  },
  {
    id: 77,
    title: "キャスト・アウェイ",
    year: 2000,
    genre: "ドラマ",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    review: "孤独の中で、生きることの意味を考えさせられる。"
  },
  {
    id: 78,
    title: "レヴェナント：蘇えりし者",
    year: 2015,
    genre: "ドラマ",
    rating: 4.4,
    poster: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
    review: "自然の美しさと過酷さが同時に迫ってくる。"
  },
  {
    id: 79,
    title: "パルプ・フィクション",
    year: 1994,
    genre: "コメディ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    review: "何が起きるか分からない会話劇がクセになる。"
  },
  {
    id: 80,
    title: "ファイト・クラブ",
    year: 1999,
    genre: "ドラマ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "自分が何者なのか、観終わってから考え込んでしまう。"
  },
  {
    id: 81,
    title: "ローマの休日",
    year: 1953,
    genre: "恋愛",
    rating: 4.8,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "一日だけの自由が、忘れられない恋になる。"
  },
  {
    id: 82,
    title: "ノッティングヒルの恋人",
    year: 1999,
    genre: "恋愛",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
    review: "普通の人とスターの恋だからこそ夢を見られる。"
  },
  {
    id: 83,
    title: "きみに読む物語",
    year: 2004,
    genre: "恋愛",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
    review: "時間を超えて残る愛の強さに泣かされる。"
  },
  {
    id: 84,
    title: "ビフォア・サンライズ 恋人までの距離",
    year: 1995,
    genre: "恋愛",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
    review: "一晩の会話だけで、こんなに恋が始まるなんて。"
  },
  {
    id: 85,
    title: "シェイプ・オブ・ウォーター",
    year: 2017,
    genre: "恋愛",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    review: "言葉を超えた愛を、美しい映像で描いている。"
  },
  {
    id: 86,
    title: "マンチェスター・バイ・ザ・シー",
    year: 2016,
    genre: "ドラマ",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "簡単には癒えない悲しみを、静かに見つめる映画。"
  },
  {
    id: 87,
    title: "万引き家族",
    year: 2018,
    genre: "ドラマ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "家族って何だろうと、観終わってから考え続ける。"
  },
  {
    id: 88,
    title: "そして父になる",
    year: 2013,
    genre: "ドラマ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "親子の時間は、血だけでは決まらないのかもしれない。"
  },
  {
    id: 89,
    title: "おくりびと",
    year: 2008,
    genre: "ドラマ",
    rating: 4.7,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "死を見つめることで、生きることが愛おしくなる。"
  },
  {
    id: 90,
    title: "テルマエ・ロマエ",
    year: 2012,
    genre: "コメディ",
    rating: 4.4,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "風呂という身近なテーマで、ここまで笑えるのがすごい。"
  },
  {
    id: 91,
    title: "ALWAYS 三丁目の夕日",
    year: 2005,
    genre: "ドラマ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "古き良き時代の温かさが、画面いっぱいに広がる。"
  },
  {
    id: 92,
    title: "サマータイムマシン・ブルース",
    year: 2005,
    genre: "コメディ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "くだらないのに巧妙。何も考えず笑いたい日に最高。"
  },
  {
    id: 93,
    title: "カメラを止めるな！",
    year: 2017,
    genre: "コメディ",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    review: "最初の違和感が、後半ですべてひっくり返る。"
  },
  {
    id: 94,
    title: "シン・ゴジラ",
    year: 2016,
    genre: "SF",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80",
    review: "怪獣映画なのに、組織のリアルさが妙に面白い。"
  },
  {
    id: 95,
    title: "るろうに剣心",
    year: 2012,
    genre: "アクション",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    review: "殺陣のスピード感がすごい。日本映画の本気を感じる。"
  },
  {
    id: 96,
    title: "告白",
    year: 2010,
    genre: "サスペンス",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",
    review: "静かな語り口なのに、ずっと胸がざわつく。"
  },
  {
    id: 97,
    title: "孤狼の血",
    year: 2018,
    genre: "サスペンス",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    review: "荒々しい世界だからこそ、人間臭さが際立っている。"
  },
  {
    id: 98,
    title: "鍵泥棒のメソッド",
    year: 2012,
    genre: "コメディ",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    review: "入れ替わった人生が、予想外の方向へ転がっていく。"
  },
  {
    id: 99,
    title: "ハケンアニメ！",
    year: 2022,
    genre: "ドラマ",
    rating: 4.5,
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    review: "作品を作る人たちの情熱が、そのまま伝わってくる。"
  },
  {
    id: 100,
    title: "PERFECT DAYS",
    year: 2023,
    genre: "ドラマ",
    rating: 4.6,
    poster: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
    review: "何気ない毎日の中にある、小さな幸せが沁みる。"
  }
];

export { movies };