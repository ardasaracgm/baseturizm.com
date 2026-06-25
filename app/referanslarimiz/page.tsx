import PageHero from '@/components/PageHero'
const refs=['Kurumsal Markalar','Bayi Ağları','Kamu Kurumları','Dernekler','Etkinlik Grupları','Kongre Katılımcıları']
export default function Page(){return <><PageHero title="Referanslarımız"/><main className="content"><div className="container"><p>Farklı sektörlerden kurum ve gruplar için toplantı, etkinlik, seyahat ve organizasyon süreçlerinde çözüm ortağı olarak hizmet veriyoruz.</p><div className="refs">{refs.map(r=><div className="ref" key={r}>{r}</div>)}</div></div></main></>}
