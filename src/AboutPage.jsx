import React, { useState, useEffect } from 'react';
import { ArrowLeft, Quote, Users } from 'lucide-react';

const FOUNDERS = [
  {
    name: 'מוטי חסון',
    role: 'מייסד · מלונאות, תפעול ופיננסים',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop',
    bio: 'שנים בתוך ענף המלונאות - בתפעול, בפיננסים ובביקורת. יודע בדיוק להיכן הכסף "נעלם", איך זה קורה ולמה אף אחד לא עוצר את זה בזמן.',
  },
  {
    name: 'אליזבת חסון',
    role: 'מייסדת · מלונאות, תפעול ופיננסים',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop',
    bio: 'מבינה את הענף מבפנים - את הפערים בין הדוחות לשטח, ואת הנקודות העיוורות שבהן הרווח נשחק בלי שאיש שם לב. לא מתוך חוסר מקצועיות, אלא מחוסר בכלים חכמים.',
  },
  {
    name: 'עידן כהן',
    role: 'CTO · ביזנס, דאטה ו-BI',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop',
    bio: 'מעל 15 שנות ניסיון בפיתוח מערכות חכמות. מתמחה בלתרגם מידע מורכב להחלטות ברורות בזמן אמת.',
  },
  {
    name: 'בועז דה-האן',
    role: 'מייסד · יזמות וחוויית לקוח',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop',
    bio: 'מעל 20 שנות ניסיון ביזמות ובהובלת חוויית לקוח. מבין לעומק מה הופך מוצר לכלי שאנשים באמת משתמשים בו - ולא עוד מערכת שיושבת על המדף.',
  },
];

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen overflow-x-hidden" style={{ fontFamily: '"Polin", system-ui, sans-serif' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @font-face { font-family: 'Polin'; src: url('/Polin-Light.ttf') format('truetype'); font-weight: 300; font-display: swap; }
          @font-face { font-family: 'Polin'; src: url('/Polin-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
          @font-face { font-family: 'Polin'; src: url('/Polin-Medium.woff2') format('woff2'); font-weight: 500; font-display: swap; }
          @font-face { font-family: 'Polin'; src: url('/Polin-Semibold.woff2') format('woff2'); font-weight: 600; font-display: swap; }
          @font-face { font-family: 'Polin'; src: url('/Polin-Bold.woff2') format('woff2'); font-weight: 700; font-display: swap; }
          html { scroll-behavior: smooth; }
        `
      }} />

      {/* Header - identical to Tinkerbell05 */}
      <nav className="fixed left-0 right-0 z-[100] top-4 lg:top-6">
        <div className="w-[calc(100%-1rem)] md:w-[calc(100%-3rem)] max-w-[88rem] mx-auto">
          <div className={`flex justify-between items-center h-16 lg:h-20 px-5 lg:px-8 rounded-2xl lg:rounded-[2rem] transition-all duration-300 ${scrolled ? 'bg-white/65 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-200/60' : 'bg-white/65 backdrop-blur-md border border-white/40 shadow-sm'}`}>
            <div className="flex items-center">
              <a href="/tinkerbell05.html" className="focus:outline-none">
                <img src="/logo-tinkerbell.png" alt="Tinkerbell" className="h-10 lg:h-12 w-auto" />
              </a>
            </div>

            <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-slate-600">
              <a href="/tinkerbell05.html#testimonials" className="hover:text-slate-900 transition-colors">סיפורי הצלחה</a>
              <a href="/tinkerbell05.html#problem" className="hover:text-slate-900 transition-colors">איפה הכסף?</a>
              <a href="/tinkerbell05.html#roi" className="hover:text-slate-900 transition-colors">לקוחות</a>
              <a href="/tinkerbell05.html#features" className="hover:text-slate-900 transition-colors">פיצ'רים</a>
              <a href="/tinkerbell05.html#how-it-works" className="hover:text-slate-900 transition-colors">איך זה עובד</a>
              <a href="/about.html" className="text-[#5B2DC1] font-semibold">אודות</a>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="/tinkerbell05.html" className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">
                ליצירת קשר
              </a>
              <a href="/tinkerbell05.html" className="text-[15px] font-semibold bg-[#5B2DC1] text-white px-6 py-2.5 rounded-full hover:bg-[#3d1e87] hover:shadow-lg hover:shadow-[#5B2DC1]/20 hover:-translate-y-0.5 transition-all duration-300">
                להתנסות במערכת
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative w-full">

        {/* Hero */}
        <section className="relative pt-40 lg:pt-52 pb-24 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -left-32 w-[40rem] h-[40rem] rounded-full bg-[#EDE8FB] blur-3xl opacity-70"></div>
            <div className="absolute top-40 -right-32 w-[36rem] h-[36rem] rounded-full bg-[#F3F0FC] blur-3xl opacity-80"></div>
          </div>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE8FB] text-[#5B2DC1] text-sm font-semibold mb-8">
              <Users className="w-4 h-4" /> מי אנחנו
            </div>
            <h1 className="text-[3rem] leading-[1.05] lg:text-[5rem] font-semibold tracking-tighter mb-8 text-slate-900">
              לא עוד מערכת ניהול.<br />
              <span className="text-[#5B2DC1] relative inline-block font-black">
                מערכת שחושבת כמו מנהל מלון.
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#EDE8FB] rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-light">
              ארבעה יזמים שהכירו את הענף מבפנים - בתפעול, בפיננסים, בטכנולוגיה ובחוויית הלקוח -
              ובנו את הכלי שתמיד היה חסר להם.
            </p>
          </div>
        </section>

        {/* Founders */}
        <section className="relative px-6 lg:px-8 pb-24">
          <div className="max-w-[88rem] mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {FOUNDERS.map((f, i) => (
                <div key={i} className="group relative bg-white rounded-3xl border border-slate-200/70 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_80px_-15px_rgba(91,45,193,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="flex min-h-[20rem]">
                    <div className="w-2/5 shrink-0 relative bg-[#F8F6FE] overflow-hidden">
                      <img
                        src={f.photo}
                        alt={f.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mb-1">{f.name}</h3>
                      <div className="text-sm font-medium text-[#5B2DC1] mb-5">{f.role}</div>
                      <p className="text-lg text-slate-600 font-light leading-relaxed">{f.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="relative px-6 lg:px-8 py-24 bg-slate-50/60">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-10 text-center">
              איך נולדה <span className="text-[#5B2DC1] font-black">טינקרבל</span>
            </h2>
            <div className="space-y-6 text-lg lg:text-xl text-slate-600 font-light leading-relaxed">
              <p>
                ארבעת היזמים הקימו את מה שלא היה קיים בעולם - מערכת שמכירה את ענף המלונאות מבפנים,
                מדברת את השפה שלו ויודעת בדיוק איפה לחפש ולמצוא.
              </p>
              <p>
                הם לא בנו עוד תוכנת ניהול. הם יצרו את <span className="font-semibold text-slate-900">"האדם" הזה שתמיד רצית שיהיה לצידך</span>,
                זה שרואה הכל, מנחה, מסייע, לא שוכח כלום, ותמיד נמצא שם בשבילך.
              </p>
              <p className="text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight pt-4">
                מערכת AI בשם <span className="text-[#5B2DC1]">טינקרבל</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Quote / Manifesto */}
        <section className="relative px-6 lg:px-8 py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6FE] via-white to-[#FAF8FE]"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Quote className="w-14 h-14 text-[#9780ED] mb-8" />
            <blockquote className="space-y-6 text-xl lg:text-2xl text-slate-700 font-light leading-relaxed">
              <p>
                "לא הגיוני שמנהל מלון יעבוד קשה, יסתבך עם כמויות מידע אינסופיות, ולא יבין להיכן נעלם הכסף -
                ירגיש שהוא רודף אחריו, והעסק לא מנוהל כהלכה.
              </p>
              <p>
                וזו בדיוק הסיבה שהקמנו את טינקרבל - כדי שכל אחד בענף המלונאות, כל מלונאי,
                ירגיש מקצוען ויקבל את מיטב הכלים לניהול המלון שלו ולמיקסום הרווחים.
              </p>
              <p>
                אנחנו מאמינים שמנהל מלון צריך להרגיש <span className="font-semibold text-slate-900">בשליטה מלאה</span>,
                להבין בכל רגע מה קורה עם הכסף, בלי לרדוף אחרי נתונים.
              </p>
              <p className="text-2xl lg:text-3xl font-semibold text-slate-900">
                לנהל כמקצוען: מדויק, בטוח, רגוע."
              </p>
            </blockquote>

            <div className="mt-12 pt-8 border-t border-slate-200 flex justify-center">
              <a
                href="/tinkerbell05.html"
                className="group inline-flex items-center gap-3 bg-[#5B2DC1] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#3d1e87] hover:shadow-xl hover:shadow-[#9780ED]/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                על טינקרבל
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA + Footer - identical pattern to Tinkerbell05 */}
        <section className="text-white relative overflow-hidden" style={{ minHeight: '100vh' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #9780ED 0%, #3D1E87 20%, #1a0d4a 38%, #0f172a 52%)' }}></div>
          <div className="relative z-10 min-h-screen flex flex-col px-6 lg:px-8">

            <div className="flex-1 flex flex-col items-center justify-center text-center py-24">
              <h2 className="text-4xl lg:text-5xl mb-6 tracking-tighter">
                <span className="font-light">בואו לגלות איך המלון שלכם</span><br />
                <span className="font-semibold">יכול להרוויח יותר</span>
              </h2>
              <p className="text-xl text-[#EDE8FB] mb-10 font-light max-w-2xl mx-auto">
                התחילו חודש ניסיון חינם וגלו איך טינקרבל הופכת<br />
                נתונים לרווח אמיתי, כבר מהיום הראשון.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/tinkerbell05.html" className="group flex items-center justify-center gap-3 bg-white text-[#5B2DC1] px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-xl shadow-[#5B2DC1]/20">
                  להתנסות במערכת
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="w-full max-w-[88rem] mx-auto border-t border-white/10 pt-12 pb-10">
              <div className="grid md:grid-cols-12 gap-12 mb-10 text-right">
                <div className="md:col-span-5">
                  <img src="/logo-tinkerbell.png" alt="Tinkerbell" className="h-10 w-auto mb-6 brightness-0 invert" />
                  <p className="text-white/50 text-lg font-light max-w-sm">טכנולוגיית AI לבקרה פיננסית. אנחנו הופכים דאטה מלונאי לרווחים מיידיים. עובד בשבילך, מסביב לשעון.</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-white mb-6">המוצר</h4>
                  <ul className="space-y-4 text-white/50 font-light">
                    <li><a href="/tinkerbell05.html#features" className="hover:text-[#9780ED] transition-colors">פיצ'רים מרכזיים</a></li>
                    <li><a href="/tinkerbell05.html#how-it-works" className="hover:text-[#9780ED] transition-colors">איך זה עובד</a></li>
                    <li><a href="#" className="hover:text-[#9780ED] transition-colors">אבטחת מידע</a></li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-white mb-6">חברה</h4>
                  <ul className="space-y-4 text-white/50 font-light">
                    <li><a href="/about.html" className="hover:text-[#9780ED] transition-colors">אודות הצוות</a></li>
                    <li><a href="/tinkerbell05.html#testimonials" className="hover:text-[#9780ED] transition-colors">לקוחות מספרים</a></li>
                    <li><a href="/tinkerbell05.html" className="hover:text-[#9780ED] transition-colors">יצירת קשר</a></li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30 font-light">
                <div>© {new Date().getFullYear()} Tinkerbell. כל הזכויות שמורות.</div>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
                  <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
                  <a href="#" className="hover:text-white transition-colors">הצהרת נגישות</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
