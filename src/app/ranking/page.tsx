///APIテストのためのページ

type Score = { rank: number; name: string; score: number };

const API_URL = "https://k-web-api.vercel.app";

async function getScores(): Promise<Score[]> {
  const res = await fetch(`${API_URL}/scores`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`APIがエラーを返しました: ${res.status}`);
  }
  return res.json();
}

export default async function Ranking() {
  let scores: Score[] = [];
  let failed = false;

  try {
    scores = await getScores();
  } catch (e) {
    console.error("ランキング取得エラー:", e);
    failed = true;
  }

  return (
    <>
      <h1 className="title">ランキング</h1>
      {failed ? (
        <p>ランキングを読み込めませんでした。</p>
      ) : (
        <ol style={{ listStyle: "none", padding: 0 }}>
          {scores.map((s) => (
            <li key={s.rank}>
              {s.rank}位　{s.name}：{s.score}点
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
