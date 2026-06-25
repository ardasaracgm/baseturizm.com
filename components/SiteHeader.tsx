import Link from 'next/link'

const items = [
  ['Anasayfa','/'], ['Hakkımızda','/hakkimizda'], ['Bayi Toplantıları','/hizmetlerimiz/bayi-toplantilari'], ['Teşvik Gezileri','/hizmetlerimiz/tesvik-gezileri'], ['Etkinlikler','/hizmetlerimiz/etkinlikler'], ['Kongreler','/hizmetlerimiz/kongreler'], ['Referanslarımız','/referanslarimiz'], ['İletişim','/iletisim']
]

export default function SiteHeader(){return <>
  <div className="topbar"><div className="container">Telefon : 0850 346 66 06</div></div>
  <header className="header"><div className="container nav">
    <Link className="logo" href="/">Base <span>Turizm</span></Link>
    <nav className="links">{items.map(([t,h])=><Link key={h} href={h}>{t}</Link>)}<Link className="cta" href="/iletisim">Teklif Al</Link></nav>
  </div></header>
</>}
