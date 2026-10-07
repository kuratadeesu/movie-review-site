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
  }
];

export { movies };