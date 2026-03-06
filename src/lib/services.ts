import type { AccentColor } from "./constants";

export interface ServicePage {
  slug: string;
  title: string;
  subtitle: string;
  iconName: string;
  accentColor: AccentColor;
  description: string;
  features: Array<{ iconName: string; title: string; desc: string }>;
  process: Array<{ step: number; title: string; desc: string }>;
  metrics: Array<{ value: string; label: string }>;
  metaTitle: string;
  metaDescription: string;
}

export const services: ServicePage[] = [
  {
    slug: "rpa",
    title: "RPA",
    subtitle: "Robotik Süreç Otomasyonu",
    iconName: "Bot",
    accentColor: "violet",
    description:
      "Tekrarlayan iş süreçlerinizi akıllı robotlarla otomatize edin. İnsan hatasını sıfıra indirin, verimliliği maksimuma çıkartın. RPA çözümlerimizle çalışanlarınız değer yaratan işlere odaklansın.",
    features: [
      { iconName: "Zap", title: "Hızlı Otomasyon", desc: "Haftalarda değil, günlerde hayata geçen otomasyon çözümleri" },
      { iconName: "Shield", title: "Hatasız İşlem", desc: "7/24 çalışan robotlarla sıfır hata oranı" },
      { iconName: "Cpu", title: "Akıllı Robotlar", desc: "Yapay zekâ destekli karar verebilen botlar" },
      { iconName: "BarChart3", title: "ROI Takibi", desc: "Gerçek zamanlı verimlilik ve tasarruf raporları" },
      { iconName: "Settings", title: "Kolay Entegrasyon", desc: "Mevcut sistemlerinizle sorunsuz entegrasyon" },
      { iconName: "Database", title: "Veri İşleme", desc: "Büyük hacimli veri işlemlerini saniyeler içinde tamamlama" },
    ],
    process: [
      { step: 1, title: "Süreç Analizi", desc: "Otomasyona uygun süreçlerin tespiti ve önceliklendirilmesi" },
      { step: 2, title: "Bot Tasarımı", desc: "İş kuralları ve senaryo akışlarının modellenmesi" },
      { step: 3, title: "Geliştirme & Test", desc: "Robot geliştirme, test ve optimizasyon" },
      { step: 4, title: "Canlı & Destek", desc: "Devreye alma, izleme ve sürekli iyileştirme" },
    ],
    metrics: [
      { value: "%85", label: "Süreç Hızlanması" },
      { value: "%99", label: "Doğruluk Oranı" },
      { value: "7/24", label: "Kesintisiz Çalışma" },
      { value: "6", label: "Ay Ortalama ROI" },
    ],
    metaTitle: "RPA Robotik Süreç Otomasyonu",
    metaDescription:
      "Sirdaryo RPA çözümleri ile iş süreçlerinizi otomatize edin. Hatasız, hızlı ve maliyet etkin robotik süreç otomasyonu.",
  },
  {
    slug: "bpmn",
    title: "BPMN",
    subtitle: "İş Süreç Yönetimi",
    iconName: "GitBranch",
    accentColor: "cyan",
    description:
      "İş süreçlerinizi modelleyin, analiz edin ve optimize edin. BPMN 2.0 standartlarına uygun süreç yönetimi ile organizasyonel verimliliği artırın.",
    features: [
      { iconName: "Workflow", title: "Süreç Modelleme", desc: "BPMN 2.0 ile görsel süreç haritalandırma" },
      { iconName: "LineChart", title: "Performans Analizi", desc: "Süreç daralma noktalarının tespiti" },
      { iconName: "Target", title: "Optimizasyon", desc: "Veri odaklı süreç iyileştirme önerileri" },
      { iconName: "Layers", title: "Entegrasyon", desc: "ERP, CRM ve diğer sistemlerle entegrasyon" },
      { iconName: "Clock", title: "Zaman Tasarrufu", desc: "Süreç sürelerinde %40'a varan kısalma" },
      { iconName: "Shield", title: "Uyumluluk", desc: "Yasal ve sektörel standartlara uygunluk" },
    ],
    process: [
      { step: 1, title: "Keşfet", desc: "Mevcut süreçlerin haritalanması ve dokümantasyonu" },
      { step: 2, title: "Analiz Et", desc: "Darboğazların ve iyileştirme alanlarının belirlenmesi" },
      { step: 3, title: "Tasarla", desc: "Optimize edilmiş süreç modellerinin oluşturulması" },
      { step: 4, title: "Uygula", desc: "Yeni süreçlerin hayata geçirilmesi ve eğitim" },
    ],
    metrics: [
      { value: "%40", label: "Süreç Hızlanması" },
      { value: "200+", label: "Modellenen Süreç" },
      { value: "%30", label: "Maliyet Azalması" },
      { value: "%95", label: "Müşteri Memnuniyeti" },
    ],
    metaTitle: "BPMN İş Süreç Yönetimi",
    metaDescription:
      "BPMN 2.0 standartlarında iş süreç modelleme, analiz ve optimizasyon. Sirdaryo ile süreçlerinizi dijitalleştirin.",
  },
  {
    slug: "optimizasyon",
    title: "Optimizasyon",
    subtitle: "Süreç Optimizasyonu",
    iconName: "TrendingUp",
    accentColor: "lime",
    description:
      "Performans analizi, darboğaz tespiti ve maliyet optimizasyonu ile işletmenizin verimliliğini maksimuma çıkartın. Veri odaklı yaklaşımla süreçlerinizi dönüştürün.",
    features: [
      { iconName: "BarChart3", title: "Performans Analizi", desc: "Detaylı KPI takibi ve raporlama" },
      { iconName: "Target", title: "Darboğaz Tespiti", desc: "Süreç tıkanıklıklarının otomatik algılama" },
      { iconName: "TrendingUp", title: "Maliyet Optimizasyonu", desc: "Gereksiz harcamaların eliminasyonu" },
      { iconName: "Zap", title: "Hız Artışı", desc: "Süreç tamamlanma sürelerinin kısaltılması" },
      { iconName: "LineChart", title: "Tahminleme", desc: "Yapay zekâ ile gelecek performans tahminleri" },
      { iconName: "Settings", title: "Sürekli İyileştirme", desc: "Kaizen metodolojisi ile devamlı gelişim" },
    ],
    process: [
      { step: 1, title: "Ölçüm", desc: "Mevcut performansın detaylı ölçümü ve baseline oluşturma" },
      { step: 2, title: "Analiz", desc: "Veri madenciliği ile iyileştirme fırsatlarının keşfedilmesi" },
      { step: 3, title: "Uygulama", desc: "Optimizasyon stratejilerinin hayata geçirilmesi" },
      { step: 4, title: "İzleme", desc: "Sonuçların takibi ve iteratif iyileştirme" },
    ],
    metrics: [
      { value: "%35", label: "Verimlilik Artışı" },
      { value: "%25", label: "Maliyet Azalması" },
      { value: "50+", label: "Optimize Edilen Süreç" },
      { value: "3", label: "Ay Sonuç Süresi" },
    ],
    metaTitle: "Süreç Optimizasyonu",
    metaDescription:
      "Performans analizi ve süreç optimizasyonu ile işletmenizi bir üst seviyeye taşıyın. Sirdaryo optimizasyon danışmanlığı.",
  },
  {
    slug: "yonetim-paneli",
    title: "Yönetim Paneli",
    subtitle: "Dashboard & Admin Panel",
    iconName: "LayoutDashboard",
    accentColor: "amber",
    description:
      "İşletmenizin tüm verilerini tek bir ekranda görün. Özel tasarım dashboard, admin panel, KPI takip ve raporlama sistemleri ile veri odaklı kararlar alın.",
    features: [
      { iconName: "Monitor", title: "Canlı Dashboard", desc: "Gerçek zamanlı veri görselleştirme" },
      { iconName: "BarChart3", title: "KPI Takibi", desc: "Kritik performans göstergelerinin izlenmesi" },
      { iconName: "Lock", title: "Yetki Yönetimi", desc: "Rol bazlı erişim kontrolü" },
      { iconName: "Smartphone", title: "Mobil Uyumlu", desc: "Her cihazda mükemmel deneyim" },
      { iconName: "Database", title: "Veri Entegrasyonu", desc: "Çoklu veri kaynağı birleştirme" },
      { iconName: "LineChart", title: "Otomatik Raporlama", desc: "Planlı rapor oluşturma ve dağıtım" },
    ],
    process: [
      { step: 1, title: "İhtiyaç Analizi", desc: "KPI'ların ve veri kaynaklarının belirlenmesi" },
      { step: 2, title: "UX Tasarımı", desc: "Kullanıcı odaklı arayüz tasarımı ve prototipleme" },
      { step: 3, title: "Geliştirme", desc: "Frontend ve backend geliştirme, API entegrasyonu" },
      { step: 4, title: "Teslim & Eğitim", desc: "Sistem teslimi, kullanıcı eğitimi ve destek" },
    ],
    metrics: [
      { value: "100+", label: "Teslim Edilen Panel" },
      { value: "%60", label: "Karar Hızı Artışı" },
      { value: "50+", label: "Entegre Edilen API" },
      { value: "%99", label: "Uptime Oranı" },
    ],
    metaTitle: "Dashboard Geliştirme",
    metaDescription:
      "Özel tasarım admin panel ve dashboard geliştirme. KPI takibi, raporlama ve veri görselleştirme çözümleri.",
  },
  {
    slug: "ozel-yazilim",
    title: "Özel Yazılım",
    subtitle: "Özel Yazılım Geliştirme",
    iconName: "Code2",
    accentColor: "coral",
    description:
      "İşletmenizin benzersiz ihtiyaçlarına özel web, masaüstü ve mobil yazılım çözümleri. Modern teknolojilerle ölçeklenebilir, güvenli ve performanslı uygulamalar geliştiriyoruz.",
    features: [
      { iconName: "Globe", title: "Web Uygulamaları", desc: "Modern ve responsive web çözümleri" },
      { iconName: "Smartphone", title: "Mobil Uygulamalar", desc: "iOS ve Android için native performans" },
      { iconName: "Monitor", title: "Masaüstü Yazılım", desc: "İşletim sistemi bazlı özel çözümler" },
      { iconName: "Database", title: "API Geliştirme", desc: "RESTful ve GraphQL API tasarımı" },
      { iconName: "Shield", title: "Güvenlik", desc: "OWASP standartlarında güvenli kod" },
      { iconName: "Layers", title: "Mikroservis", desc: "Ölçeklenebilir mimari tasarımı" },
    ],
    process: [
      { step: 1, title: "Planlama", desc: "Gereksinim analizi, teknoloji seçimi ve yol haritası" },
      { step: 2, title: "Tasarım", desc: "UI/UX tasarımı, veritabanı ve mimari modelleme" },
      { step: 3, title: "Geliştirme", desc: "Agile metodoloji ile iteratif yazılım geliştirme" },
      { step: 4, title: "Teslim", desc: "Test, deployment, dokümantasyon ve destek" },
    ],
    metrics: [
      { value: "150+", label: "Tamamlanan Proje" },
      { value: "12+", label: "Yıllık Deneyim" },
      { value: "30+", label: "Teknoloji Uzmanlığı" },
      { value: "%100", label: "Zamanında Teslim" },
    ],
    metaTitle: "Özel Yazılım Geliştirme",
    metaDescription:
      "İhtiyacınıza özel web, mobil ve masaüstü yazılım geliştirme. Sirdaryo ile projelerinizi hayata geçirin.",
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}
