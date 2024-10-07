import Layout from '../app/layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'

export default function Confirmation() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [completionMessage, setCompletionMessage] = useState('');

  useEffect(() => {
    fetch('https://yt3ii8lke0.execute-api.ap-northeast-1.amazonaws.com/dev/tasks/incomplete', {
      mode: 'cors',
      headers: {
        'Origin': 'http://localhost:3000'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('APIレスポンス:', data);
        // データが配列であることを確認し、必要な情報を抽出します
        if (Array.isArray(data)) {
          const tasksData = data.map(item => ({
            name: item.Name,
            aiInstruction: item.AIInstruction || '指示なし',
            aiResult: item.AIResult || '結果なし',
          }));
          setTasks(tasksData);
        } else {
          setError('予期せぬデータ形式です');
        }
      })
      .catch(error => {
        console.error('APIリクエストエラー:', error);
        setError(`APIリクエストエラーが発生しました: ${error.message}`);
      });
  }, []);

  // 確認ボタンのクリックハンドラーを追加
  const handleConfirm = (taskName) => {
    fetch('https://yt3ii8lke0.execute-api.ap-northeast-1.amazonaws.com/dev/tasks/complete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://secretary-eta.vercel.app'
      },
      body: JSON.stringify({ taskName: taskName }),
    })
      .then(response => {
        if (response.status === 200) {
          setCompletionMessage(`タスク "${taskName}" を完了に変更しました！`);
          setTasks(prevTasks => prevTasks.filter(task => task.name !== taskName));
        }
        return response.json();
      })
      .then(data => {
        console.log('タスク完了レスポンス:', data);
      })
      .catch(error => {
        console.error('タスク完了エラー:', error);
        setError(`タスク完了エラーが発生しました: ${error.message}`);
      });
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">確認事項</h1>
      {error && <p className="text-red-500">{error}</p>}
      {completionMessage && <p className="text-green-500 mb-4">{completionMessage}</p>}
      {tasks.length === 0 && !error && <p>データを読み込んでいます...</p>}
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{task.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">AI指示: {task.aiInstruction}</p>
              <p className="mb-4">AI結果: {task.aiResult}</p>
              <Button onClick={() => handleConfirm(task.name)}>確認</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  )
}
