import Layout from '../app/layout'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PromptManagement() {
  const prompts = [
    { id: 1, name: 'プロンプト1', content: 'プロンプト1の内容' },
    { id: 2, name: 'プロンプト2', content: 'プロンプト2の内容' },
    { id: 3, name: 'プロンプト3', content: 'プロンプト3の内容' },
  ]

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">プロンプト管理</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>名前</TableHead>
            <TableHead>内容</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prompts.map((prompt) => (
            <TableRow key={prompt.id}>
              <TableCell>{prompt.id}</TableCell>
              <TableCell>{prompt.name}</TableCell>
              <TableCell>{prompt.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Layout>
  )
}