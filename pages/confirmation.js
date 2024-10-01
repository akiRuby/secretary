import Layout from '../app/layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Confirmation() {
  const tasks = [
    { name: 'タスク1', content: 'タスク1の実行内容' },
    { name: 'タスク2', content: 'タスク2の実行内容' },
    { name: 'タスク3', content: 'タスク3の実行内容' },
  ]

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">確認事項</h1>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{task.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{task.content}</p>
              <Button>確認</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  )
}