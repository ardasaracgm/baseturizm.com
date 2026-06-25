import Link from 'next/link'
const services = [
  ['🎤','Etkinlikler','Özel günler, lansmanlar, konserler, ödül törenleri ve yaratıcı etkinlik kurguları.','/hizmetlerimiz/etkinlikler'],
  ['🤝','Bayi Toplantıları','Yurt içi ve yurt dışı bayi toplantıları için sonuç odaklı kurumsal organizasyonlar.','/hizmetlerimiz/bayi-toplantilari'],
  ['✈️','Teşvik Gezileri','Ekip ve bayi motivasyonunu artıran özel gezi, tatil ve deneyim programları.','/hizmetlerimiz/tesvik-gezileri'],
  ['🏛️','Kongreler','Kongre, sempozyum ve toplantı süreçlerinde uçtan uca profesyonel yönetim.','/hizmetlerimiz/kongreler']
]
export default function Home(){return <>
<section className="hero"><div className="container"><h1>Hayallerinizin çözüm ortağı.</h1><p>Kurumsal seyahat, etkinlik, kongre ve özel tatil çözümlerinde profesyonel ekip ve kaliteli hizmet anlayışıyla yanınızdayız.</p><div className="hero-actions"><Link className="btn primary" href="/iletisim">Teklif Al</Link><Link className="btn secondary" href="/hakkimizda">Firmayı Tanıyın</Link></div></div></section>
<section className="section"><div className="container"><span className="eyebrow">Turizm & Organizasyon</span><h2>Profesyonel ekip, kaliteli hizmet</h2><p className="lead">İyi bir tatil, başarılı bir toplantı ve kusursuz bir organizasyon için planlama, ulaşım, konaklama ve operasyon süreçlerini tek merkezden yönetiyoruz.</p><div className="grid">{services.map(([i,t,d,h])=><Link className="card" href={h} key={t}><div className="icon">{i}</div><h3>{t}</h3><p>{d}</p></Link>)}</div></div></section>
<section className="section alt"><div className="container two"><div><span className="eyebrow">Hakkımızda</span><h2>A Grubu seyahat acentası deneyimi</h2><p className="lead">Base Turizm Dan. Ltd. Şti.; 9811 belge numarası ve Ata Aslan Turizm Seyahat Acentası ünvanı ile T.C. Kültür ve Turizm Bakanlığı’na bağlı Seyahat Acentaları Birliği üyesidir.</p><Link className="btn primary" href="/hakkimizda">Detaylı Bilgi</Link></div><div className="panel"><h3>Neden Base Turizm?</h3><ul><li>Uzman ve dinamik kadro</li><li>Teknolojik imkanlar</li><li>Kurumsal organizasyon tecrübesi</li><li>Yurt içi ve yurt dışı operasyon ağı</li></ul></div></div></section>
</>}
