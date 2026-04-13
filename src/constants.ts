import { Milestone, BusinessArea, Product, ContactInfo } from './types';

export const COMPANY_NAME = "HE System";
export const TAGLINE = "신속한 공급, 최적의 솔루션 – R&D 장비 및 기자재 납품 전문 HE시스템";
export const INTRO = "에이치이(HE)시스템은 2018년 2월 설립되어 반도체, 이화학기기, 전자·광학 부품 등 첨단 기술 분야를 아우르는 장비 및 기자재를 신속하고 정확하게 공급하고 있는 납품 전문 기업입니다. 주요 고객층은 대학교 연구실, 기업 및 국가연구소 등으로, 다양한 R&D 분야에서 필요로 하는 맞춤형 실험장비와 소모품을 최적의 조건으로 제공하고 있습니다.";
export const VISION = "HE시스템의 비전은 ‘신뢰할 수 있는 제품과 신속한 공급으로 연구개발의 효율성을 지원하는 것’ 입니다. 고객이 필요로 하는 장비와 부품을 빠르게 파악하고, 실험에 가장 적합한 솔루션을 맞춤형으로 공급함으로써 연구의 진보를 돕습니다.";

export const BUSINESS_AREAS: BusinessArea[] = [
  {
    title: "실험 장비 및 기자재 납품",
    description: "대학교 및 연구소에 필요한 고정밀 실험 장비와 기자재를 신속하게 공급합니다.",
    icon: "FlaskConical"
  },
  {
    title: "반도체 소재 및 부품 공급",
    description: "반도체 공정에 필수적인 고순도 소재와 핵심 부품을 안정적으로 납품합니다.",
    icon: "Layers"
  },
  {
    title: "맞춤형 장비 솔루션",
    description: "고객의 연구 목적에 최적화된 맞춤형 장비 솔루션을 제안하고 공급합니다.",
    icon: "Cpu"
  },
  {
    title: "전자부품 및 계측기 납품",
    description: "다양한 전자부품, 전선, PCB 및 정밀 계측기를 전문적으로 취급합니다.",
    icon: "CircuitBoard"
  },
  {
    title: "실험 컨설팅 및 기술 지원",
    description: "실험에 적합한 기자재 선정부터 기술 지원까지 토탈 서비스를 제공합니다.",
    icon: "Wrench"
  }
];

export const MILESTONES: Milestone[] = [
  { year: "2018", month: "02", event: "HE시스템 창업" },
  { year: "2019", month: "00", event: "연구전담개발부서 설립" },
  { year: "2021", month: "00", event: "현대자동차 협력업체 등록" },
  { year: "2022", month: "00", event: "삼성SDI 납품 (TEST Board)" },
  { year: "2023", month: "00", event: "아이마켓코리아 협력업체 등록" }
];

export const PARTNERS = [
  "가천대학교", "광운대학교", "경북대학교", "동국대학교", "단국대학교", "명지대학교", "서울대학교", "세종대학교", "성균관대학교", "인하대학교", "동아대학교", "덕성여자대학교", "이화여자대학교", "안동대학교", "한국항공대학교", "서울과학기술대학교", "포항공과대학교", "한국전자기술연구원", "한국과학기술연구원", "나노종합기술원", "나노융합기술원", "한국재료연구원", "한국방재시험연구원", "한국생산기술연구원", "현대자동차", "삼성 SDI", "웨이비스"
];

export const PRODUCTS: Product[] = [
  {
    category: "Materials (Target & Source)",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=800",
    items: [
      "Pure Metals: Al, Cr, Cu, Ag, Au, In, Ni, Pt, Ti, W, Zn etc.",
      "Alloys: Al-Cu, Al-Cr, Ni-Cr, Cu-Zr, Ni-Al, Ni-V, Ti-Ni, Mo-Si etc.",
      "Ceramics: Oxide, Nitride, Carbide, Fluoride, Silicide etc.",
      "Evaporator Source: Pure metals, Fluoride, metal, Oxide etc."
    ]
  },
  {
    category: "Wafer Solutions",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    items: [
      "Glass: 2, 4, 6, 8, 12inch Round & Square (Quartz, Corning)",
      "Si: 2, 4, 6, 8, 12inch (P-type, N-type, Prime-grade)",
      "Oxidation (Wet, Dry), Nitride (PE, LPCVD)",
      "SiC Wafers & Customizing"
    ]
  },
  {
    category: "실험기자재 및 소모품",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800",
    items: [
      "기초 실험 장비: Hot plate, Stirrer, Glove Box, 항온항습기 외",
      "분석/여과/측정: 온도계, PH meter, Balance, filter 외",
      "초자/플라스틱기구: Dishes, Vials, Cylinders, Beakers 외",
      "실험 소모품: Tubing, Wipers, Syninge, Gloves 외"
    ]
  },
  {
    category: "반도체 단위공정",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    items: [
      "Thin Film Deposition: Al, Ni, Cu, Ti, Au, Ni-Cr, Pt, ITO",
      "Photo Lithograph: ~ 300mm Wafer",
      "Etching: Metal, Oxide, Silicon, Poly 외",
      "Plating: Electric & Electroless Plating"
    ]
  },
  {
    category: "전자부품 및 실습기자재",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800",
    items: [
      "계측기: Power supply, Function generator, Oscilloscope 외",
      "실습기자재 시뮬레이터: 회로실험실습, PLC실습, 전기시퀀스제어",
      "전자부품: 전원, 전선, PCB, 전자키트, 모터 외"
    ]
  }
];

export const CONTACT: ContactInfo = {
  email: "wsjang@hesys-ai.com",
  phone: "010-3269-4588",
  address: "경기도 안양시 동안구 흥안대로 457-25 914호(인덕원역 AK밸리)"
};

export const CORE_COMPETENCIES = [
  "실험 장비 및 소모품 원스톱 솔루션 제공",
  "반도체 단위공정 대응 기술력 보유",
  "고객 맞춤형 설계 및 커스터마이징 대응",
  "국내 유수 연구기관 및 기업과의 협업 실적"
];

export const DIFFERENTIATION = [
  { title: "신속성", desc: "고객이 필요로 하는 제품을 가장 빠르게 파악하고 공급" },
  { title: "다양성", desc: "소재부터 장비까지 연구에 필요한 모든 솔루션 보유" },
  { title: "신뢰성", desc: "국내 유수 연구기관과의 장기적인 납품 실적 보유" },
  { title: "전문성", desc: "실험 공정에 최적화된 기자재를 선별하는 전문 안목" }
];
