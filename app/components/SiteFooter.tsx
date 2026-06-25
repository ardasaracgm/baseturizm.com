import Link from 'next/link'
export default function SiteFooter(){return <footer className="footer"><div className="container footer-grid">
  <div><strong>Base Turizm</strong><p>Kurumsal seyahat, kongre, etkinlik ve teşvik gezileri için profesyonel çözüm ortağınız.</p></div>
  <div><strong>Hizmetler</strong><p><Link href="/hizmetlerimiz/bayi-toplantilari">Bayi Toplantıları</Link><br/><Link href="/hizmetlerimiz/tesvik-gezileri">Teşvik Gezileri</Link><br/><Link href="/hizmetlerimiz/etkinlikler">Etkinlikler</Link><br/><Link href="/hizmetlerimiz/kongreler">Kongreler</Link></p></div>
  <div><strong>İletişim</strong><p>0850 346 66 06<br/>Yaşamkent Mah. 3158 Cad. Akıncı Plaza 12B/64 Çankaya/Ankara</p></div>
</div></footer>}
