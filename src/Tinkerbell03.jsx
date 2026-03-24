import React, { useState, useEffect } from 'react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import {
  ArrowLeft,
  Activity,
  BellRing,
  TrendingUp,
  ShieldAlert,
  Smartphone,
  Mail,
  MailOpen,
  Zap,
  Clock,
  Users,
  CheckCircle2,
  BarChart3,
  Lightbulb,
  ChevronRight,
  Quote,
  ShieldCheck,
  DoorOpen,
  Percent,
  CreditCard,
  Utensils,
  Tags,
  CarFront,
  BedDouble,
  UserX,
  PieChart,
  Timer,
  CheckCircle
} from 'lucide-react';

// רכיב ספרה בודדת מתגלגלת
const RollingDigit = ({ digit }) => {
  return (
    <div className="inline-block h-[1em] overflow-hidden relative">
      <div
        className="flex flex-col transition-transform duration-700 ease-out"
        style={{ transform: `translateY(-${digit * 10}%)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="leading-none">{n}</span>
        ))}
      </div>
    </div>
  );
};

// רכיב מונה שלם עם אנימציית גלגול ופסיקים
const RollingNumber = ({ value }) => {
  const numberString = value.toString();
  const digits = numberString.split('');

  return (
    <div className="flex items-baseline" dir="ltr">
      <span className="mr-2">₪</span>
      {digits.map((char, index) => {
        const posFromEnd = digits.length - index;
        const needsComma = posFromEnd > 0 && posFromEnd % 3 === 0 && index !== 0;

        return (
          <React.Fragment key={index}>
            {needsComma && <span>,</span>}
            <RollingDigit digit={parseInt(char, 10)} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [accumulatedAmount, setAccumulatedAmount] = useState(245081);
  const [alertIndex, setAlertIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  // התרעות מעורבות - קריטיות וחיוביות
  const alerts = [
    { type: 'critical', title: 'התרעה קריטית', text: 'זוהתה הנחה של ₪450 ללא אישור מנהל בקבלה.', icon: BellRing, color: 'bg-[#9780ED]', textColor: 'text-slate-500' },
    { type: 'success', title: 'אירוע טופל', text: 'דמי ביטול נגבו באופן אוטומטי מחדר 402. נחסך ₪1,200.', icon: CheckCircle, color: 'bg-emerald-500', textColor: 'text-emerald-600' },
    { type: 'critical', title: 'התרעה קריטית', text: 'חדר 302 סומן כאי-הגעה ללא חיוב דמי ביטול.', icon: BellRing, color: 'bg-[#9780ED]', textColor: 'text-slate-500' },
    { type: 'success', title: 'אירוע טופל', text: 'שדרוג חדר לא מאושר חויב רטרואקטיבית. נחסך ₪350.', icon: CheckCircle, color: 'bg-emerald-500', textColor: 'text-emerald-600' },
    { type: 'critical', title: 'התרעה קריטית', text: 'זוהתה עזיבה מאוחרת בחדר 105 ללא תוספת תשלום.', icon: BellRing, color: 'bg-[#9780ED]', textColor: 'text-slate-500' },
    { type: 'success', title: 'אירוע טופל', text: 'חיוב בר חסר שויך בהצלחה לחדר 210. נחסך ₪180.', icon: CheckCircle, color: 'bg-emerald-500', textColor: 'text-emerald-600' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setActiveSection(Math.min(9, Math.floor(window.scrollY / window.innerHeight)));
    };
    window.addEventListener('scroll', handleScroll);

    const counterInterval = setInterval(() => {
      const addition = Math.floor(Math.random() * 40) + 10;
      setAccumulatedAmount(prev => prev + addition);
    }, 15000);

    const alertInterval = setInterval(() => {
      setAlertIndex((prev) => (prev + 1) % alerts.length);
    }, 10000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(counterInterval);
      clearInterval(alertInterval);
    };
  }, []);

  const currentAlert = alerts[alertIndex];

  return (
    <div dir="rtl" className="min-h-screen bg-[#FCFCFD] text-slate-900 selection:bg-[#EDE8FB] selection:text-[#5B2DC1] overflow-x-clip" style={{ fontFamily: "'Polin', system-ui, -apple-system, sans-serif" }}>
      <style dangerouslySetInnerHTML={{__html: `
        @font-face { font-family: 'Polin'; src: url('Polin-Light.woff2') format('woff2'); font-weight: 300; font-style: normal; font-display: swap; }
        @font-face { font-family: 'Polin'; src: url('Polin-Regular.woff2') format('woff2'); font-weight: 400; font-style: normal; font-display: swap; }
        @font-face { font-family: 'Polin'; src: url('Polin-Medium.woff2') format('woff2'); font-weight: 500; font-style: normal; font-display: swap; }
        @font-face { font-family: 'Polin'; src: url('Polin-Semibold.woff2') format('woff2'); font-weight: 600; font-style: normal; font-display: swap; }
        @font-face { font-family: 'Polin'; src: url('Polin-Bold.woff2') format('woff2'); font-weight: 700; font-style: normal; font-display: swap; }

        @keyframes scroll-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-rtl {
          animation: scroll-rtl 60s linear infinite;
        }
        .animate-marquee-ltr {
          animation: scroll-ltr 60s linear infinite;
        }
        .group:hover .animate-marquee-rtl,
        .group:hover .animate-marquee-ltr {
          animation-play-state: paused;
        }

        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-chat-vertical {
          animation: scroll-vertical 25s linear infinite;
        }
        .group:hover .animate-chat-vertical {
          animation-play-state: paused;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.1); }
          30% { transform: scale(1); }
          45% { transform: scale(1.1); }
          60% { transform: scale(1); }
        }
        .animate-heartbeat {
          animation: heartbeat 2.5s ease-in-out infinite;
        }

        @keyframes bell-swing {
          0%, 100% { transform: rotate(0); }
          10%, 30%, 50% { transform: rotate(15deg); }
          20%, 40%, 60% { transform: rotate(-15deg); }
          70% { transform: rotate(0); }
        }
        .animate-bell-swing {
          animation: bell-swing 3s ease-in-out infinite;
          transform-origin: top;
        }

        @keyframes success-pop {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-success-pop {
          animation: success-pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          80% { transform: translateY(14px); opacity: 0; }
          81% { transform: translateY(0); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-float-subtle {
          animation: float-subtle 3s ease-in-out infinite;
        }

        @keyframes glow-and-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .animate-glow-and-float {
          animation: glow-and-float 3s ease-in-out infinite;
        }

        @keyframes car-move {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-car-move {
          animation: car-move 2s ease-in-out infinite;
        }

        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-6px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s ease-in-out infinite;
        }

        @keyframes mail-closed-fade {
          0%, 20% { opacity: 1; transform: translateY(0) scale(1); }
          25%, 75% { opacity: 0; transform: translateY(-2px) scale(1.05); }
          80%, 100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes mail-open-fade {
          0%, 20% { opacity: 0; transform: translateY(2px) scale(0.95); }
          25%, 75% { opacity: 1; transform: translateY(0) scale(1); }
          80%, 100% { opacity: 0; transform: translateY(2px) scale(0.95); }
        }

        @keyframes glow-bulb {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(250, 204, 21, 0.2)); color: #475569; }
          50% { filter: drop-shadow(0 0 8px rgba(250, 204, 21, 0.6)); color: #ca8a04; }
        }
        .animate-glow-bulb {
          animation: glow-bulb 3s ease-in-out infinite;
        }

        @keyframes dissolve-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-dissolve-in {
          animation: dissolve-in 0.6s ease forwards;
        }

        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.5s ease-out forwards;
        }

        @keyframes chatFade {
          0% { opacity: 0; }
          0.1% { opacity: 1; }
          10% { opacity: 1; }
          10.1% { opacity: 0; }
          100% { opacity: 0; }
        }
        .chat-frame {
          position: absolute;
          inset: 0;
          opacity: 0;
          animation: chatFade 60s linear infinite;
          animation-fill-mode: backwards;
        }
        .chat-frame-0 { animation-delay: 0s; }
        .chat-frame-1 { animation-delay: 6s; }
        .chat-frame-2 { animation-delay: 12s; }
        .chat-frame-3 { animation-delay: 18s; }
        .chat-frame-4 { animation-delay: 24s; }
        .chat-frame-5 { animation-delay: 30s; }
        .chat-frame-6 { animation-delay: 36s; }
        .chat-frame-7 { animation-delay: 42s; }
        .chat-frame-8 { animation-delay: 48s; }
        .chat-frame-9 { animation-delay: 54s; }
      `}} />

      {/* Floating Pill Navigation */}
      <nav className="fixed left-0 right-0 z-[100] top-4 lg:top-6">
        <div className="w-[calc(100%-1rem)] md:w-[calc(100%-3rem)] max-w-[88rem] mx-auto">
          <div className={`flex justify-between items-center h-16 lg:h-20 px-5 lg:px-8 rounded-2xl lg:rounded-[2rem] transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-200/60' : 'bg-white/50 backdrop-blur-md border border-white/40 shadow-sm'}`}>
            <div className="flex items-center">
              <img src="/logo-tinkerbell.png" alt="Tinkerbell" className="h-10 lg:h-12 w-auto" />
            </div>

            <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-slate-600">
              <a href="#features" className="hover:text-slate-900 transition-colors">פיצ'רים</a>
              <a href="#how-it-works" className="hover:text-slate-900 transition-colors">איך זה עובד</a>
              <a href="#testimonials" className="hover:text-slate-900 transition-colors">לקוחות</a>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">
                התחברות
              </button>
              <button className="text-[15px] font-semibold bg-[#5B2DC1] text-white px-6 py-2.5 rounded-full hover:bg-[#3d1e87] hover:shadow-lg hover:shadow-[#5B2DC1]/20 hover:-translate-y-0.5 transition-all duration-300">
                התחילו ניסיון בחינם
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section Nav Dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3">
        {['Hero','בעיה','ROI','שינוי','איך עובד','טכנולוגיה','פיצ\'רים','לקוח 1','לקוח 2','לקוח 3'].map((label, i) => (
          <button
            key={i}
            onClick={() => window.scrollTo({ top: i * window.innerHeight, behavior: 'smooth' })}
            title={label}
            className="group relative flex items-center"
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === i ? 'bg-[#5B2DC1] scale-150' : 'bg-slate-500 hover:bg-slate-700'}`} />
            <span className="absolute left-5 text-xs font-medium text-slate-600 bg-white/90 px-2 py-0.5 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">{label}</span>
          </button>
        ))}
      </div>

      <main className="relative w-full">

        {/* Hero Section */}
        <div style={{position:'sticky', top:0, height:'100vh', zIndex:10, overflow:'hidden'}}>
        <AuroraBackground className="h-full bg-transparent items-start justify-start pt-24 pb-0">
        <section className="relative w-full h-full overflow-hidden">

          <div className="max-w-[88rem] mx-auto px-6 lg:px-8 relative z-10 w-full h-full">
            <div className="grid lg:grid-cols-12 gap-16 items-center h-full">

              <div className="lg:col-span-7">

                <h1 className="text-[3.5rem] leading-[1.05] lg:text-[5.5rem] font-semibold tracking-tighter mb-8 text-slate-900">
                  המלון שלך יכול להרוויח יותר.<br />
                  <span className="text-[#5B2DC1] relative inline-block font-black">
                    טינקרבל יודעת איך.
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#EDE8FB] rounded-full"></div>
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-slate-500 mb-10 leading-relaxed max-w-2xl font-light">
                  עוזרת AI חכמה שמבקרת תהליכים, מניעה צוותים ומייצרת התייעלות בזמן אמת.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <button className="group flex items-center justify-center gap-3 bg-[#5B2DC1] text-white px-8 py-4.5 rounded-full text-lg font-semibold hover:bg-[#3d1e87] hover:shadow-xl hover:shadow-[#9780ED]/20 hover:-translate-y-1 transition-all duration-300">
                    התחילו חודש ניסיון
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1.5 transition-transform" />
                  </button>
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-400 font-light text-base">ותגלו את הרווחים האבודים שלכם</span>
                    <span className="text-sm text-slate-400 flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-slate-300" /> ללא עלות התקנה וללא התחייבות
                    </span>
                  </div>
                </div>
              </div>

              {/* Premium UI Widget Mockup */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/5] lg:aspect-square rounded-[2rem] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] ring-1 ring-slate-900/5 relative flex flex-col overflow-hidden transform lg:-rotate-2 hover:rotate-0 transition-transform duration-700">
                  <div className="p-8 pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-12 h-12 rounded-2xl bg-[#F8F6FE] flex items-center justify-center">
                        <Activity className="w-6 h-6 text-[#9780ED] animate-heartbeat" />
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4" /> +13.5% ROI
                      </div>
                    </div>
                    <h3 className="text-slate-500 text-sm font-medium mt-6 mb-1 uppercase tracking-wider">נחסך החודש (Live)</h3>
                    <div className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight h-[1.2em] overflow-hidden flex items-center">
                      <RollingNumber value={accumulatedAmount} />
                    </div>
                  </div>

                  {/* Scrolling Alerts Stream */}
                  <div className="flex-1 relative overflow-hidden mt-6 px-8">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="flex flex-col gap-3 animate-chat-vertical pt-2">
                      {[1, 2].map((set) => (
                        <React.Fragment key={set}>
                          {[
                            { title: "אי-הגעה לא חויבה", time: "לפני 2 דקות", amount: "₪1,200", status: "טופל בהצלחה", color: "bg-[#9780ED]", textStatus: "text-emerald-600" },
                            { title: "טעות גבייה - חדר 402", time: "לפני 15 דקות", amount: "₪890", status: "טופל בהצלחה", color: "bg-emerald-500", textStatus: "text-emerald-600" },
                            { title: "הנחה ללא אישור", time: "לפני שעה", amount: "₪450", status: "ממתין למנהל", color: "bg-yellow-500", textStatus: "text-yellow-600" },
                            { title: "עזיבה מאוחרת", time: "לפני שעתיים", amount: "₪350", status: "חויב אוטומטית", color: "bg-[#9780ED]", textStatus: "text-emerald-600" },
                            { title: "חיוב בר חסר", time: "לפני 3 שעות", amount: "₪120", status: "שויך לחדר", color: "bg-purple-500", textStatus: "text-emerald-600" },
                            { title: "שדרוג חדר שגוי", time: "לפני 5 שעות", amount: "₪600", status: "הפרש נגבה", color: "bg-[#9780ED]", textStatus: "text-emerald-600" }
                          ].map((alert, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/80 group-hover:bg-slate-100 transition-colors shrink-0">
                              <div className="flex items-center gap-4">
                                <div className={`w-2.5 h-2.5 rounded-full ${alert.color}`}></div>
                                <div>
                                  <div className="text-[14px] font-semibold text-slate-900">{alert.title}</div>
                                  <div className="text-xs font-medium text-slate-500 mt-0.5">{alert.time}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-[14px] font-bold text-slate-900">{alert.amount}</div>
                                <div className={`text-[11px] font-medium mt-0.5 ${alert.textStatus}`}>{alert.status}</div>
                              </div>
                            </div>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Video Widget */}
                <div className="absolute -right-[76px] bottom-[-55px] w-[312px] rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.25)] group cursor-pointer z-20" style={{ aspectRatio: '16/9' }}>
                  <img src="/swimming-pool-beach-luxury-hotel-type-entertainment-complex-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey (1).jpg" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="w-10 h-10 rounded-full bg-[#5B2DC1] flex items-center justify-center shadow-lg shadow-[#5B2DC1]/30 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white mr-[3px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Rotating Alert Widget - Raised by 80px from the lowered position */}
                <div className="absolute -left-8 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.12)] ring-1 ring-slate-200/60 max-w-[260px] animate-bounce z-20" style={{ top: 'calc(33.33% + 70px)', animationDuration: '4s'}}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full ${currentAlert.color} flex items-center justify-center shrink-0 shadow-lg shadow-[#C4B5F7] transition-all duration-500`}>
                      <currentAlert.icon
                        key={alertIndex}
                        className={`w-5 h-5 text-white ${currentAlert.type === 'critical' ? 'animate-bell-swing' : 'animate-success-pop'}`}
                      />
                    </div>
                    <div>
                      <div className={`text-[13px] font-bold mb-1 transition-colors duration-500 ${currentAlert.type === 'critical' ? 'text-[#9780ED]' : 'text-emerald-600'}`}>
                        {currentAlert.title}
                      </div>
                      <div key={alertIndex} className={`text-[13px] leading-relaxed animate-fade-in-right font-medium ${currentAlert.textColor}`}>
                        {currentAlert.text}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none">
          <span className="text-xs font-medium text-slate-400 tracking-widest uppercase">גלול</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-slate-400 rounded-full" style={{animation: 'scrollDot 1.6s ease-in-out infinite'}}></div>
          </div>
        </div>
        </section>
        </AuroraBackground>
        </div>

        {/* The Problem Section - Infinite Marquee with Animated Icons */}
        <section className="relative overflow-hidden rounded-t-3xl" style={{position:'sticky', top:0, height:'100vh', zIndex:20}}>
          <img src="/backgrounds/hammocks-with-palm-trees.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{zIndex: 0, filter: 'brightness(1.15)'}} />
          <div className="absolute inset-0 bg-white/80" style={{zIndex: 1}}></div>
          <div className="h-full flex flex-col justify-center gap-10 py-8 relative" style={{zIndex: 2}}>
            <div className="max-w-3xl mx-auto text-center px-6 lg:px-8">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-slate-900 tracking-tight">הכסף נמצא בפרטים הקטנים</h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-4">
                בכל מלון קיימות דליפות כסף יומיומיות.
              </p>
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                לא בגלל ניהול גרוע - אלא בגלל מורכבות תפעולית,<br/>עומס מידע ומחסור בבקרה חכמה בזמן אמת.
              </p>
            </div>

          <div className="relative group w-full overflow-hidden" dir="ltr">
            <div className="absolute inset-y-0 right-0 w-16 md:w-64 bg-gradient-to-l from-[#F8F8F9] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 left-0 w-16 md:w-64 bg-gradient-to-r from-[#F8F8F9] to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-8 animate-marquee-ltr" style={{width: 'max-content'}}>
            {[1, 2].map((track) => (
              <div key={track} className="flex gap-8 shrink-0" aria-hidden={track === 2}>
                {[
                  { icon: Users, anim: "animate-pulse", title: "No-Shows", desc: "אורחים שלא הגיעו והמלון פשוט שכח לחייב על דמי ביטול. כסף שנשאר על הרצפה במקום להכנס לקופה." },
                  { icon: ShieldAlert, anim: "animate-bell-swing", title: "הנחות לא מאושרות", desc: "הנחות או שדרוגים שניתנים בקבלה ללא אישור מנהל או הצדקה תפעולית, החותכים ישירות בשורת הרווח." },
                  { icon: Clock, anim: "animate-spin-slow", title: "זמן תגובה ארוך", desc: "בעיות פיננסיות שמתגלות רק בדוחות סוף החודש של הנהלת החשבונות, כאשר כבר מאוחר מדי לתקן." },
                  { icon: DoorOpen, anim: "animate-float-subtle", title: "עזיבה מאוחרת", desc: "אורחים שנשארו בחדר מעבר לשעת הצ'ק-אאוט הקבועה ולא חויבו בתוספת תשלום כנדרש על פי הנהלים." },
                  { icon: Percent, anim: "animate-heartbeat", title: "עמלות יתר ל-OTA", desc: "תשלום עמלות עודפות לסוכנים (כמו Booking או Agoda) על הזמנות שבוטלו או קוצרו ברגע האחרון." },
                  { icon: CreditCard, anim: "animate-pulse", title: "שגיאות סליקה", desc: "כרטיסי אשראי שנדחו, פגו תוקף או חיובים שבוטלו מבלי שהקבלה טיפלה בגבייה חלופית מהאורח." },
                  { icon: Utensils, anim: "animate-float-subtle", title: "חיובים אבודים ב-F&B", desc: "הזמנות במסעדה, בבר או בשירות החדרים שלא מצאו את דרכן לכרטיס החדר של האורח." },
                  { icon: Tags, anim: "animate-wiggle", title: "קידוד מחיר שגוי", desc: "הזנת תעריף חברה (Corporate Rate) או קודי הנחה לאורחים פרטיים, מה שחותך בעשרות אחוזים את הרווח." },
                  { icon: CarFront, anim: "animate-car-move", title: "תוספות נשכחות", desc: "פספוס חיובים יומיים מצטברים על חניון המלון, כניסה לספא, טיפולים או הוספת מיטות לא מדווחות." },
                  { icon: BedDouble, anim: "animate-float-subtle", title: "שדרוגים 'בחינם'", desc: "מתן חדרים בקטגוריות פרמיום או סוויטות ללא תוספת תשלום (Upsell) וללא אישור מוקדם." },
                  { icon: UserX, anim: "animate-pulse", title: "פרופילים כפולים", desc: "כפילויות במערכת (PMS) שנועלות חדרים פנויים למכירה ומונעות הזמנות חדשות." }
                ].map((item, i) => (
                  <div key={i} className="w-[320px] md:w-[380px] p-8 md:p-10 rounded-[2rem] bg-white ring-1 ring-slate-900/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 shrink-0 cursor-default text-right">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 mr-auto">
                      <item.icon className={`w-6 h-6 text-slate-700 ${item.anim}`} />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-lg font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            ))}
            </div>
          </div>

            <div className="max-w-3xl mx-auto text-center px-6 lg:px-8">
              <p className="text-xl text-slate-700 font-semibold mb-4">
                התוצאה - איבוד הכנסות ורווח בהיקף משמעותי בין 3–7% מהמחזור.
              </p>
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                טינקרבל פועלת 24/7 ומאפשרת למלון להתנהל לפי סטנדרט ביצועי ברור, אחיד ורווחי.
              </p>
            </div>
          </div>

        </section>

{/* ROI Stats Section */}
        <section className="bg-[#F8F8F9] rounded-t-3xl" style={{position:'sticky', top:0, height:'100vh', zIndex:30, overflow:'hidden'}}>
          <div className="max-w-[88rem] mx-auto px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-slate-900 tracking-tight">חיסכון תפעולי מדיד עם המערכת כבר מהיום הראשון</h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-2">מרווחי הרווח בענף נשחקים. אין יותר מקום לניהול עיוור.</p>
              <p className="text-xl text-slate-500 font-light leading-relaxed">במלונות פעילים כל אחוז רווח קובע: טינקרבל מוכיחה את זה בתוצאות.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              <div className="rounded-[2rem] bg-slate-50 ring-1 ring-slate-900/5 p-10 flex flex-col gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="text-5xl lg:text-6xl font-bold text-[#9780ED] tracking-tighter">עד 50%</div>
                <p className="text-lg text-slate-600 font-light leading-relaxed">חיסכון בזמן ובמשאבי ביקורת</p>
              </div>
              <div className="rounded-[2rem] bg-slate-50 ring-1 ring-slate-900/5 p-10 flex flex-col gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="text-5xl lg:text-6xl font-bold text-[#9780ED] tracking-tighter">13%<span className="text-3xl">+</span></div>
                <p className="text-lg text-slate-600 font-light leading-relaxed">הגדלת רווחיות</p>
              </div>
              <div className="rounded-[2rem] bg-slate-50 ring-1 ring-slate-900/5 p-10 flex flex-col gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="text-5xl lg:text-6xl font-bold text-[#9780ED] tracking-tighter">₪100K<span className="text-3xl">+</span></div>
                <p className="text-lg text-slate-600 font-light leading-relaxed">חיסכון חודשי ברשתות של 1,000 חדרים ומעלה</p>
              </div>
            </div>

            {/* Logo Carousel */}
            <div className="text-center mb-10">
              <p className="text-base font-semibold text-slate-400 uppercase tracking-[0.2em]">מלונות שכבר עובדים עם טינקרבל מגלים איפה מסתתר הרווח</p>
            </div>
            <div className="relative group overflow-hidden" dir="ltr">
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8F8F9] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8F8F9] to-transparent z-10 pointer-events-none"></div>
              <div className="flex animate-marquee-rtl items-center" style={{width: 'max-content'}}>
                {[1, 2].map(set => (
                  <div key={set} className="flex gap-16 shrink-0 items-center py-4 px-8" aria-hidden={set === 2}>
                    {[
                      { src: '/HOTELS/AFI.svg', alt: 'AFI' },
                      { src: '/HOTELS/Ana Logo eng.svg', alt: 'Ana Hotels' },
                      { src: '/HOTELS/Atlas Hotels logo.png', alt: 'Atlas Hotels' },
                      { src: '/HOTELS/CROWN.svg', alt: 'Crowne Plaza' },
                      { src: '/HOTELS/David Citadel Jeru Logo.svg', alt: 'David Citadel' },
                      { src: '/HOTELS/Fattal hotels logo.png', alt: 'Fattal Hotels' },
                      { src: '/HOTELS/Leonardo Hotels Logo.png', alt: 'Leonardo Hotels' },
                      { src: '/HOTELS/Mamilla hotel Jerusalem Logo.svg', alt: 'Mamilla Hotel' },
                      { src: '/HOTELS/POLI.svg', alt: 'Poli' },
                      { src: '/HOTELS/VERT.svg', alt: 'Vert Hotel' },
                      { src: '/HOTELS/indigo Hotel.svg', alt: 'Hotel Indigo' },
                      { src: '/HOTELS/לוגו מלונות מטיילים.svg', alt: 'מלונות מטיילים' },
                    ].map((logo, i) => (
                      <div key={i} className="h-24 flex items-center justify-center shrink-0">
                        <img src={logo.src} alt={logo.alt} className="h-24 w-auto object-contain grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Section */}
        <section className="bg-white rounded-t-3xl" style={{position:'sticky', top:0, height:'100vh', zIndex:40, overflow:'hidden'}}>
          <img src="/backgrounds/freepik__talk__38021.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{zIndex:0, filter:'brightness(1.1) saturate(0.3)', opacity: 0.5}} />
          <div className="max-w-[88rem] mx-auto px-6 lg:px-8 h-full flex flex-col justify-center relative" style={{zIndex:1}}>
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-16 text-center">
              טינקרבל – שומרת הסף הפיננסית של המלון
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { before: 'היא לא מחליפה עובדים', after: 'היא מעצימה אותם' },
                { before: 'לא עוד דוחות בדיעבד', after: 'שליטה ריל טיים ברווחיות' },
                { before: 'מחיפוש וגילוי מאוחר', after: 'לכלי עבודה למצויינות תפעולית' },
              ].map((item, i) => (
                <div key={i} className="group rounded-[2rem] bg-slate-50 ring-1 ring-slate-900/5 p-10 flex flex-col items-center gap-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <p className="text-xl font-semibold text-slate-500 leading-snug">{item.before}</p>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#9780ED]/10 animate-float-subtle" style={{animationDuration: '1.2s'}}>
                    <ArrowLeft className="w-5 h-5 text-[#9780ED] -rotate-90" />
                  </div>
                  <p className="text-2xl font-semibold text-slate-900 leading-snug">{item.after}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works + Technology */}
        <section id="how-it-works" className="relative overflow-hidden rounded-t-3xl" style={{position:'sticky', top:0, height:'100vh', zIndex:50}}>
          <img src="/backgrounds/two-beautiful-girls-standing-by-airport.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{zIndex: 0}} />
          <div className="absolute inset-0 bg-[#F8F8F9]/75" style={{zIndex: 1}}></div>
          <div className="max-w-[88rem] mx-auto px-6 lg:px-8 h-full flex flex-col justify-center relative" style={{zIndex: 2}}>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-slate-900 tracking-tight">איך טינקרבל עובדת?</h2>
              <p className="text-xl text-slate-500 font-light">ללא התקנות מורכבות. המערכת מתחברת מאחורי הקלעים ומתחילה לעבוד.</p>
              <p className="text-2xl font-semibold text-slate-600 mt-2">תוך שעות, לא שבועות</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
              <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#C4B5F7] to-transparent z-0"></div>
              {[
                { num: "01", title: "התממשקות (API)", desc: "חיבור שקוף וישיר למערכת ה-PMS שלכם. תהליך של מספר דקות ללא שום השבתה של המלון." },
                { num: "02", title: "התאמה אישית", desc: "סשן קצרצר לבחירת ההתרעות הקריטיות מתוך מאגר של למעלה מ-50 תרחישים עסקיים שונים." },
                { num: "03", title: "התחלת עבודה", desc: "Tinkerbell מתחילה לסרוק, לנטר ולשלוח התרעות בזמן אמת לצוותים הרלוונטיים." }
              ].map((step, i) => (
                <div key={i} className={`relative pt-12 pb-12 px-8 group transition-all duration-500 ${i === 2 ? 'rounded-[2.5rem] ring-4 ring-[#9780ED]/30 hover:ring-8 bg-white/60 shadow-2xl shadow-[#9780ED]/10 hover:shadow-2xl hover:shadow-[#9780ED]/20 backdrop-blur-sm transition-all duration-300' : 'rounded-[2.5rem] ring-2 ring-white/50 bg-white/75 backdrop-blur-sm hover:bg-white/90 hover:ring-[#9780ED]/20 hover:shadow-xl transition-all duration-500'}`}>
                  {i < 2 && (
                    <div className="hidden md:flex absolute top-2 -left-[3rem] w-[3rem] h-16 items-center justify-center z-10">
                      <div className="w-10 h-10 bg-white rounded-full ring-4 ring-[#FCFCFD] shadow-sm flex items-center justify-center animate-bounce-x">
                        <ArrowLeft className="w-5 h-5 text-[#9780ED]" />
                      </div>
                    </div>
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-white ring-1 ring-slate-200 flex items-center justify-center text-xl font-bold text-slate-900 mx-auto md:mx-0 relative z-20 mb-8 shadow-sm group-hover:shadow-md transition-shadow">
                    {step.num}
                  </div>
                  <div className="text-center md:text-right">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-light text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Technology Section */}
        <section className="bg-[#F8F8F9] rounded-t-3xl" style={{position:'sticky', top:0, height:'100vh', zIndex:60, overflow:'hidden'}}>
          <img src="/backgrounds/freepik__-__34843.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{zIndex:0, filter:'brightness(1.3) saturate(0.4)', opacity:0.5}} />
          <div className="max-w-[88rem] mx-auto px-6 lg:px-8 h-full flex flex-col justify-center relative" style={{zIndex:1}}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-4">הטכנולוגיה מאחורי טינקרבל</h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed">מערכת AI ייעודית לעולם המלונאות, המשלבת מודלים מתקדמים של בינה מלאכותית עם מתודולוגיות בקרה וניסיון מקצועי רב-שנים.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: 'מנוע AI ייעודי למלונאות', desc: 'ניתוח תהליכים תפעוליים ופיננסיים ע"י זיהוי חריגות וניתוח דפוסים מבוסס נתונים.' },
                { icon: Lightbulb, title: 'בסיס ידע מקצועי מובנה', desc: 'מתודולוגיות בקרה ותפעול מעולם המלונאות, שהוטמעו כחוקים ופיצ\'רים חכמים.' },
                { icon: BarChart3, title: 'ארכיטקטורה מודולרית וסקלאבילית', desc: 'תשתית מתקדמת לעיבוד נתונים בזמן אמת וניטור תהליכים.' },
                { icon: ShieldCheck, title: 'אבטחת מידע ברמה ארגונית', desc: 'עמידה בתקנים מחמירים, כולל הסמכות ISO27001 / SOC2.' },
              ].map((item, i) => (
                <div key={i} className="rounded-[2rem] bg-white ring-1 ring-slate-900/5 p-10 flex gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-[#9780ED]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Bento Box */}
        <section id="features" className="bg-white relative rounded-t-3xl" style={{position:'sticky', top:0, height:'100vh', zIndex:70, overflow:'hidden'}}>
          <div className="max-w-[88rem] mx-auto px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-slate-900 tracking-tight">מה טינקרבל עושה בשטח?</h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-2">
                עוזרת לביקורת תהליכים ולהגדלת רווחיות המלון,
              </p>
              <p className="text-xl text-slate-700 font-semibold">
                בלי לחפש. בלי לרדוף. בלי כאב ראש.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[270px]">
              <div className="md:col-span-2 row-span-2 rounded-[2.5rem] bg-slate-50 p-10 lg:p-12 flex flex-col relative overflow-hidden group ring-1 ring-slate-900/5">
                <div className="relative z-10 max-w-lg flex items-center gap-5 mb-5 -mt-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    <Activity className="w-7 h-7 text-[#9780ED] animate-heartbeat" />
                  </div>
                  <h3 className="text-4xl font-semibold text-slate-900 tracking-tight">מנתחת נתוני Revenue Leakage בזמן אמת</h3>
                </div>

                <div className="absolute right-0 bottom-0 w-full h-[90%] bg-white rounded-t-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.03)] ring-1 ring-slate-900/5 px-8 pt-8 flex flex-col transform translate-y-28 group-hover:translate-y-20 transition-transform duration-700 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/40 via-white/20 to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/40 to-transparent z-10 pointer-events-none"></div>

                  <div className="relative" style={{height: '312px', perspective: '600px', perspectiveOrigin: '50% 0%'}}>
                  <div style={{transform: 'rotateY(15deg) rotate(-4deg)', transformOrigin: 'left center', transformStyle: 'preserve-3d', width: '100%', height: '312px', position: 'relative'}}>
                    {[
                      [
                        { side: 'end', text: 'חדר 304 סומן כאי-הגעה. לחייב את הכרטיס?' },
                        { side: 'start', text: 'כן, חיוב בוצע בהצלחה (₪1,200).' },
                        { side: 'end', text: 'זוהתה עזיבה מאוחרת בחדר 112 ללא חיוב.' },
                        { side: 'start', text: 'נוספה תוספת חצי יום לחשבון (₪350).' },
                      ],
                      [
                        { side: 'end', text: 'הנחת צוות (100%) הוזנה בחדר 401. לאשר?' },
                        { side: 'start', text: 'לא, נדרש אישור מנכ״ל. ההנחה בוטלה.' },
                        { side: 'end', text: 'שגיאת סליקה בחדר 218 – כרטיס פג תוקף.' },
                        { side: 'start', text: 'נשלחה בקשת עדכון פרטי תשלום לאורח.' },
                      ],
                      [
                        { side: 'end', text: 'חדר 315 – Late Check-Out ללא חיוב נוסף.' },
                        { side: 'start', text: 'חויב תוספת 3 שעות: ₪280. עודכן בחשבון.' },
                        { side: 'end', text: 'הנחה של 30% הוזנה בחדר 502 ללא קוד.' },
                        { side: 'start', text: 'התרעה נשלחה למנהל. ההנחה הוקפאה.' },
                      ],
                    ].map((frame, frameIdx) => (
                      <div
                        key={frameIdx}
                        className={`chat-frame chat-frame-${frameIdx + 7} flex flex-col justify-between h-full py-2`}
                      >
                        {frame.map((msg, i) => (
                          <div key={i} className={`${msg.side === 'end' ? 'self-end bg-[#9780ED] text-white rounded-tr-none' : 'self-start bg-slate-50 text-slate-700 ring-1 ring-slate-200 rounded-tl-none'} py-3 px-6 rounded-2xl shadow-sm text-[15px] font-medium w-fit max-w-[85%]`}>
                            {msg.text}
                          </div>
                        ))}
                      </div>
                    ))}
                    {[4,1,6,2,7,3,5].map((n, i) => (
                      <div
                        key={`screenshot-${n}`}
                        className={`chat-frame chat-frame-${i}`}
                        style={{zIndex: 1}}
                      >
                        <img
                          src={`/screenshots/${n}.png`}
                          alt={`screenshot ${n}`}
                          style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'12px', display:'block'}}
                        />
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              </div>

              <div className="row-span-2 relative overflow-hidden rounded-[2.5rem] bg-slate-50 ring-1 ring-slate-900/5 h-full">
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="flex flex-col animate-chat-vertical">
                  {[1, 2].map(set => (
                    <div key={set} className="flex flex-col gap-4 p-4" aria-hidden={set === 2}>
                      {[
                        { icon: Activity, title: 'ניטור 24/7 בזמן אמת', benefit: 'מאפשרת Cost Control יומי' },
                        { icon: BellRing, title: 'התראות חכמות – Real-Time Alerts', benefit: 'מידע בזמן = תגובה מהירה = פחות הפסד' },
                        { icon: ShieldCheck, title: 'שקיפות מלאה', benefit: 'תדעו בכל רגע איפה אתם עומדים' },
                        { icon: Mail, title: 'מייל יומי למלונאי', benefit: 'חוסך זמן וכסף' },
                        { icon: Lightbulb, title: 'OJT – הדרכה תוך כדי עבודה', benefit: 'בלי הכשרות ממושכות' },
                        { icon: TrendingUp, title: 'צמצום הפסדים והגדלת רווחים', benefit: 'מצמצמת חריגות ומשפרת GOP' },
                      ].map((item, i) => (
                        <div key={i} className="rounded-2xl bg-white ring-1 ring-slate-100 p-4 flex items-center gap-4 shrink-0 transition-colors duration-200 hover:bg-slate-100">
                          <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                            <item.icon className="w-4 h-4 text-[#9780ED]" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 leading-snug">{item.title}</p>
                            <p className="text-xs text-[#9780ED] font-medium mt-0.5">{item.benefit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL 1 */}
        <section id="testimonials" className="bg-slate-100 rounded-t-3xl" style={{position:'sticky', top:0, height:'100vh', zIndex:80, overflow:'hidden'}}>
          <div className="h-full flex flex-col justify-center px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-3 text-slate-900 tracking-tight">השותפים שלנו להצלחה</h2>
              <p className="text-lg text-slate-500 font-light">רשתות המלונאות המובילות כבר עברו לניהול חכם ומבוסס דאטה.</p>
            </div>
            <div className="max-w-[88rem] mx-auto w-full">
              <div className="w-full bg-white rounded-[2rem] lg:rounded-[3rem] p-4 lg:p-6 ring-1 ring-slate-900/5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] rotate-[-1deg] hover:rotate-0 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="relative h-[220px] lg:h-[340px] w-full rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-slate-200 group">
                    <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1600" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-[#F8F6FE] max-w-[180px] group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-1"><div className="w-7 h-7 rounded-lg bg-[#F8F6FE] flex items-center justify-center"><TrendingUp className="w-4 h-4 text-[#9780ED]"/></div><span className="text-sm font-bold text-slate-900">ROI חיובי</span></div>
                      <div className="text-xs text-slate-500 font-medium">החזר השקעה מלא מהחודש הראשון.</div>
                    </div>
                  </div>
                  <div className="p-4 lg:p-8 lg:pr-0">
                    <Quote className="w-8 h-8 text-[#C4B5F7] mb-4" />
                    <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-5 leading-tight tracking-tight">כשאתה מנהל רשת מלונות מרחוק, אתה צריך מערכת שקופה לחלוטין - החיים לפני ואחרי טינקרבל זה עולם אחר.</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-200 shrink-0"><img src="/partners/בת חן.jpg" alt="בת חן ישועה" className="w-full h-full object-cover" /></div>
                      <div><div className="font-bold text-slate-900">בת חן ישועה</div><div className="text-sm text-slate-500">בעלים ומנכ"לית, רשת מלונות מטיילים</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL 2 */}
        <section className="rounded-t-3xl" style={{position:'sticky', top:0, height:'100vh', zIndex:81, overflow:'hidden', background:'transparent'}}>
          <div className="h-full flex flex-col justify-center px-6 lg:px-8">
            <div className="max-w-[88rem] mx-auto w-full">
              <div className="w-full bg-white rounded-[2rem] lg:rounded-[3rem] p-4 lg:p-6 ring-1 ring-slate-900/5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] rotate-[1deg] hover:rotate-0 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="p-4 lg:p-8 lg:pl-0 order-2 lg:order-1">
                    <Quote className="w-8 h-8 text-[#C4B5F7] mb-4" />
                    <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-5 leading-tight tracking-tight">טינקרבל הפכה חלום למציאות! אם עד כה בזבזנו שעות ע"ג שעות בחיפוש נתונים, היא מראה לנו את כל הנתונים הנחוצים בזמן אמת, וחוסכת לנו בזבוז זמן ואנרגיה מיותרים.</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-200 shrink-0"><img src="/partners/קובי.jpg" alt="קובי גוטמן" className="w-full h-full object-cover" /></div>
                      <div><div className="font-bold text-slate-900">קובי גוטמן</div><div className="text-sm text-slate-500">סמנכ"ל כספים, מלונות מצודות דויד וממילא</div></div>
                    </div>
                  </div>
                  <div className="relative h-[220px] lg:h-[340px] w-full rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-slate-200 group order-1 lg:order-2">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-[#F8F6FE] max-w-[180px] group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-1"><div className="w-7 h-7 rounded-lg bg-[#F8F6FE] flex items-center justify-center"><ShieldCheck className="w-4 h-4 text-[#9780ED]"/></div><span className="text-sm font-bold text-slate-900">0 דליפות</span></div>
                      <div className="text-xs text-slate-500 font-medium">סגירה הרמטית של טעויות בקבלה.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL 3 */}
        <section className="rounded-t-3xl" style={{position:'sticky', top:0, height:'100vh', zIndex:82, overflow:'hidden', background:'transparent'}}>
          <div className="h-full flex flex-col justify-center px-6 lg:px-8">
            <div className="max-w-[88rem] mx-auto w-full">
              <div className="w-full bg-slate-50 rounded-[2rem] lg:rounded-[3rem] p-4 lg:p-6 ring-1 ring-slate-900/5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] rotate-[-1deg] hover:rotate-0 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="relative h-[220px] lg:h-[340px] w-full rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-slate-200 group">
                    <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1600" alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-[#F8F6FE] max-w-[180px] group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-1"><div className="w-7 h-7 rounded-lg bg-[#F8F6FE] flex items-center justify-center"><PieChart className="w-4 h-4 text-[#9780ED]"/></div><span className="text-sm font-bold text-slate-900">שליטה בחיובים</span></div>
                      <div className="text-xs text-slate-500 font-medium">אפס פספוסים של חיובים ותוספות.</div>
                    </div>
                  </div>
                  <div className="p-4 lg:p-8 lg:pr-0">
                    <Quote className="w-8 h-8 text-[#C4B5F7] mb-4" />
                    <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-5 leading-tight tracking-tight">טינקרבל מציבה למנהל את כל הכשלים מול העיניים, ונותנת שליטה שלא הייתה לנו קודם.</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-200 shrink-0"><img src="/partners/רן.jpg" alt="רן אמיגה" className="w-full h-full object-cover" /></div>
                      <div><div className="font-bold text-slate-900">רן אמיגה</div><div className="text-sm text-slate-500">סמנכ"ל חדשנות וטכנולוגיה, אגודת אכסניות הנוער בישראל אנ"א</div></div>
                    </div>
                    <div className="flex justify-center mt-10">
                      <button className="flex items-center gap-2 text-[#9780ED] font-semibold hover:gap-3 transition-all">
                        לכל סיפורי הלקוחות <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#3D1E87] text-white relative overflow-hidden" style={{position:'relative', zIndex:95}}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d4a]/80 via-[#3D1E87]/20 to-[#9780ED]/20"></div>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center py-20">
            <h2 className="text-4xl lg:text-5xl mb-6 tracking-tighter"><span className="font-light">בואו לגלות איך המלון שלכם</span><br/><span className="font-semibold">יכול להרוויח יותר</span></h2>
            <p className="text-xl text-[#EDE8FB] mb-10 font-light max-w-2xl mx-auto">התחילו חודש ניסיון חינם וגלו איך טינקרבל הופכת<br/>נתונים לרווח אמיתי, כבר מהיום הראשון.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#5B2DC1] px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-xl shadow-[#5B2DC1]/20">התחילו חודש ניסיון</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 relative" style={{zIndex:95}}>
          <div className="max-w-[88rem] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-12 mb-16">
              <div className="md:col-span-5">
                <span className="text-2xl font-bold tracking-tight text-white mb-6 block">Tinkerbell.</span>
                <p className="text-slate-400 text-lg font-light max-w-sm">טכנולוגיית AI לבקרה פיננסית. אנחנו הופכים דאטה מלונאי לרווחים מיידיים. עובד בשבילך, מסביב לשעון.</p>
              </div>
              <div className="md:col-span-2">
                <h4 className="font-semibold text-white mb-6">המוצר</h4>
                <ul className="space-y-4 text-slate-400 font-light">
                  <li><a href="#" className="hover:text-[#9780ED] transition-colors">פיצ'רים מרכזיים</a></li>
                  <li><a href="#" className="hover:text-[#9780ED] transition-colors">איך זה עובד</a></li>
                  <li><a href="#" className="hover:text-[#9780ED] transition-colors">אבטחת מידע</a></li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h4 className="font-semibold text-white mb-6">חברה</h4>
                <ul className="space-y-4 text-slate-400 font-light">
                  <li><a href="#" className="hover:text-[#9780ED] transition-colors">אודות הצוות</a></li>
                  <li><a href="#" className="hover:text-[#9780ED] transition-colors">לקוחות מספרים</a></li>
                  <li><a href="#" className="hover:text-[#9780ED] transition-colors">יצירת קשר</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-light">
              <div>© {new Date().getFullYear()} Tinkerbell. כל הזכויות שמורות.</div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
                <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
