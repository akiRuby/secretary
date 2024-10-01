import './globals.css'  // または適切なパス
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  const navItems = [
    { name: 'ダッシュボード', href: '/' },
    { name: '日報', href: '/daily-report' },
    { name: '確認事項', href: '/confirmation' },
    { name: 'プロンプト管理', href: '/prompt-management' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF00FF] via-[#FF6890] to-[#00FFFF]">
      <nav className="bg-[#000000] text-[#FFFFFF] p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#00FFFF] hover:text-[#FFD21E] transition-colors duration-300">
            クローン大計画
          </Link>
          <div className="space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-[#FFD21E] transition-colors duration-300 ${
                  router.pathname === item.href ? 'underline text-[#7E81FF]' : 'text-[#FFFFFF]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <main className="container mx-auto mt-8 px-4 bg-[#FFFFFF] rounded-lg shadow-xl p-6">
        {children}
      </main>
    </div>
  )
}