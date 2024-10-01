import Layout from '../app/layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DailyReport() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">日報</h1>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>やったこと</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>プロジェクトAのタスク1完了</li>
              <li>ミーティング参加</li>
              <li>ドキュメント作成</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>かかった料金と時間</CardTitle>
          </CardHeader>
          <CardContent>
            <p>料金: ¥1,200</p>
            <p>時間: 8時間</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>よりよくするためには</CardTitle>
          </CardHeader>
          <CardContent>
            <p>タスクの優先順位付けを改善する</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>良かった点</CardTitle>
          </CardHeader>
          <CardContent>
            <p>チームとの連携がスムーズだった</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}