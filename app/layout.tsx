import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = { title: 'Base Turizm | Kurumsal Seyahat ve Organizasyon', description: 'Bayi toplantıları, teşvik gezileri, etkinlikler ve kongre organizasyonları.' }
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body><SiteHeader/>{children}<SiteFooter/></body></html>}
