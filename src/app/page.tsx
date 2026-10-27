export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-xl text-center space-y-6">
        <span className="bg-blue-600/30 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">
          開発中プロダクト
        </span>
        <h1 className="text-4xl font-bold tracking-tight">積みプラ管理アプリ</h1>
        <p className="text-slate-300 leading-relaxed">
          バーコード（JANコード）をスキャンするだけで、手持ちのプラモデルをデジタルガレージ化。
          積みの可視化から完成品のポートフォリオ記録までをサポートするモデラー向けサービスです。
        </p>
        <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 text-left space-y-2 text-sm text-slate-400">
          <p><strong className="text-slate-200">主な機能:</strong> JANコードスキャン、積みプラ管理、完成品ギャラリー、SNS共有</p>
          <p><strong className="text-slate-200">開発主体:</strong> 個人開発プロジェクト</p>
          <p><strong className="text-slate-200">お問い合わせ:</strong> info@gunpla-archive.jp</p>
        </div>
        <p className="text-xs text-slate-500">© 2026 積みプラ管理アプリ Project. All rights reserved.</p>
      </div>
    </main>
  );
}
