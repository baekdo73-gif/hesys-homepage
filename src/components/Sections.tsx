import { motion } from 'motion/react';
import { Menu, X, Cpu, FlaskConical, CircuitBoard, Layers, Wrench, Mail, Phone, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { COMPANY_NAME, TAGLINE, INTRO, VISION, BUSINESS_AREAS, MILESTONES, PARTNERS, PRODUCTS, CONTACT, CORE_COMPETENCIES, DIFFERENTIATION } from '../constants';

// --- Navbar ---
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '회사소개', href: '#about' },
    { name: '사업분야', href: '#business' },
    { name: '연혁', href: '#history' },
    { name: '제품안내', href: '#products' },
    { name: '고객사', href: '#partners' },
    { name: '문의하기', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container-max flex justify-between items-center px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">HE</div>
          <span className={`text-xl font-display font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>{COMPANY_NAME}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
            상담 문의
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

// --- Hero ---
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      
      <div className="container-max px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">R&D Solution Leader</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-slate-900">
            신속한 공급,<br />
            <span className="text-primary">최적의 솔루션</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            {TAGLINE}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center gap-2">
              문의하기 <ChevronRight size={20} />
            </a>
            <a href="#about" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
              회사 소개
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Semiconductor R&D" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 p-6 glass rounded-2xl shadow-xl z-20 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Established</p>
                <p className="text-xl font-bold text-slate-900">Since 2018</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- About ---
export const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">HE시스템 소개</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {INTRO}
            </p>
            <div className="bg-neutral p-8 rounded-3xl border border-slate-100">
              <h3 className="text-xl text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full" /> Vision
              </h3>
              <p className="text-slate-700 italic font-medium leading-relaxed">
                {VISION}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {DIFFERENTIATION.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-neutral rounded-2xl border border-slate-100 hover:border-primary/30 transition-all hover:shadow-lg group"
              >
                <h4 className="text-primary font-bold mb-2 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
            <div className="col-span-2 mt-4">
              <h4 className="font-bold mb-4 text-slate-900">핵심 경쟁력</h4>
              <div className="space-y-3">
                {CORE_COMPETENCIES.map((comp) => (
                  <div key={comp} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span className="text-sm font-medium">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Business Areas ---
const IconMap: Record<string, any> = { Cpu, FlaskConical, CircuitBoard, Layers, Wrench };

export const BusinessAreas = () => {
  return (
    <section id="business" className="section-padding bg-neutral">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">주요 사업 분야</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">HE시스템은 첨단 기술 분야를 아우르는 장비 및 부품 솔루션을 제공합니다.</p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {BUSINESS_AREAS.map((area, idx) => {
            const Icon = IconMap[area.icon];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900 leading-tight">{area.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{area.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Timeline ---
export const Timeline = () => {
  return (
    <section id="history" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">주요 연혁</h2>
          <p className="text-slate-500">HE시스템의 핵심 성장 기록입니다.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {MILESTONES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-8 p-6 bg-neutral rounded-2xl border border-slate-100 hover:border-primary/20 transition-all"
              >
                <div className="text-2xl font-display font-bold text-primary shrink-0 w-24">
                  {item.year}
                </div>
                <div className="h-8 w-px bg-slate-200 hidden md:block" />
                <div className="text-slate-800 font-semibold text-lg">
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Products ---
export const Products = () => {
  return (
    <section id="products" className="section-padding bg-neutral">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">납품 목록 및 제품 안내</h2>
          <p className="text-slate-500">HE시스템이 공급하는 고품질 소재 및 장비 리스트입니다.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {PRODUCTS.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col lg:flex-row"
            >
              <div className="lg:w-2/5 relative overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.category} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-3/5 p-10 flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 leading-tight group-hover:text-primary transition-colors">
                  {cat.category}
                </h3>
                <ul className="space-y-3 flex-grow">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Partners ---
export const Partners = () => {
  return (
    <section id="partners" className="section-padding bg-white overflow-hidden">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">주요 납품 업체 및 파트너</h2>
          <p className="text-slate-500">국내 유수의 대학교, 연구소 및 기업들이 HE시스템과 함께하고 있습니다.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {PARTNERS.map((partner, idx) => (
            <motion.span
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.02 }}
              className="px-4 py-2 bg-neutral rounded-full text-sm font-medium text-slate-600 border border-slate-100 hover:border-primary/30 hover:text-primary transition-all cursor-default"
            >
              {partner}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact ---
export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-[100px]" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Contact Us</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-md">
              HE시스템은 고객의 성공적인 연구개발을 위해 최선을 다합니다. 궁금하신 점은 언제든 문의해 주세요.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Email</p>
                  <a href={`mailto:${CONTACT.email}`} className="text-xl font-medium hover:text-primary transition-colors">{CONTACT.email}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Phone</p>
                  <a href={`tel:${CONTACT.phone}`} className="text-xl font-medium hover:text-primary transition-colors">{CONTACT.phone}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Address</p>
                  <p className="text-lg text-slate-200 leading-relaxed">{CONTACT.address}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2.5rem] shadow-2xl"
          >
            <h3 className="text-2xl text-slate-900 mb-6">문의 메시지 보내기</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">성함</label>
                  <input type="text" className="w-full bg-neutral border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-primary outline-none" placeholder="홍길동" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">연락처</label>
                  <input type="text" className="w-full bg-neutral border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-primary outline-none" placeholder="010-0000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">이메일</label>
                <input type="email" className="w-full bg-neutral border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-primary outline-none" placeholder="example@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">문의 내용</label>
                <textarea rows={4} className="w-full bg-neutral border-none rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="문의하실 내용을 입력해 주세요."></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
                메시지 전송하기
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 px-6 border-t border-white/5">
      <div className="container-max flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center text-primary font-bold">HE</div>
          <span className="text-white font-bold tracking-tight">{COMPANY_NAME}</span>
        </div>
        <p className="text-sm">© 2026 {COMPANY_NAME}. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
        </div>
      </div>
    </footer>
  );
};
