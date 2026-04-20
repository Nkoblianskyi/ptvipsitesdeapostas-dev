export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  dopbonus?: string
  modalBonus?: string
  url: string
  rating: number
  stars: number
  reviews: number
  reviewCount?: number
  badges: string[]
  description?: string
  features?: string[]
  welcomeOffer?: string
  terms?: string
  disclaimer?: string
  category?: string
  featured?: boolean
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "BWIN",
    logo: "/bwin.png",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "Aposta Grátis por Nossa Conta!",
    rating: 9.8,
    stars: 5,
    reviews: 3718,
    reviewCount: 3718,
    url: "https://www.bwin.pt/",
    featured: true,
    badges: ["MARCA INTERNACIONAL"],
    isTopLine: true,
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
    disclaimer:
      "18+. Novos clientes apenas. Aposta grátis disponível após primeiro depósito qualificativo. T&Cs aplicam-se. Licença SRIJ. Jogue responsavelmente.",
  },
  {
    id: 2,
    name: "Betano",
    logo: "/betano.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "10€ Apostas + 50 Rodadas Grátis",
    dopbonus: "no Registo",
    modalBonus: "10€ Apostas + 50 Rodadas Grátis no Registo",
    rating: 9.6,
    stars: 5,
    reviews: 3847,
    reviewCount: 3847,
    url: "https://www.betano.pt/",
    featured: true,
    badges: ["LINHA SUPERIOR"],
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
    disclaimer:
      "18+. Promoção para novos utilizadores. 10€ em apostas grátis mais 50 rodadas grátis no registo. Depósito mínimo de 10€. Requisitos de rollover aplicam-se. Válido 30 dias. Licença SRIJ. Jogue responsavelmente.",
    isTopRating: true,
  },
  {
    id: 3,
    name: "Betclic",
    logo: "/betclic.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "100% Até 20€",
    rating: 9.4,
    stars: 5,
    reviews: 3075,
    reviewCount: 3075,
    url: "https://www.betclic.pt/",
    featured: true,
    badges: ["MELHOR AVALIAÇÃO"],
    isPopular: true,
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
    disclaimer:
      "18+. Apenas novos clientes. Bónus de 100% até 20€ no primeiro depósito. Odds mínimas de 1.50. Rollover de 3x o valor do bónus. Válido por 21 dias. Licença SRIJ. Jogue responsavelmente.",
  },
  {
    id: 4,
    name: "Solverde",
    logo: "/solverde.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "300% até 30€",
    dopbonus: "em Aposta Grátis",
    modalBonus: "300% até 30€ em Aposta Grátis",
    rating: 9.2,
    stars: 5,
    reviews: 2495,
    reviewCount: 2495,
    url: "https://www.solverde.pt/",
    featured: true,
    badges: ["MARCA PORTUGUESA"],
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
    disclaimer:
      "18+. Oferta válida para novos registos. Bónus de 300% até 30€ em apostas grátis no primeiro depósito. Requisitos de apostas 5x. Válido por 30 dias. Licença SRIJ. Jogue responsavelmente.",
  },
  {
    id: 5,
    name: "ESC Online",
    logo: "/esc.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "Até 250€ em Freebets",
    rating: 9.0,
    stars: 5,
    reviews: 2463,
    reviewCount: 2463,
    url: "https://www.estorilsolcasinos.pt/",
    featured: true,
    badges: ["ESTORIL SOL CASINOS"],
    isTrending: true,
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
    disclaimer:
      "18+. Novos utilizadores. Até 250€ em freebets no primeiro depósito. Depósito mínimo 10€. Requisitos de apostas aplicam-se. Licença SRIJ. Jogue responsavelmente.",
  },
  {
    id: 6,
    name: "Lebull",
    logo: "/lebull.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "250% até 400€",
    dopbonus: "+ 50€ de Aposta Grátis",
    modalBonus: "250% até 400€ + 50€ de Aposta Grátis",
    rating: 8.8,
    stars: 4,
    reviews: 2064,
    reviewCount: 2064,
    url: "https://www.lebull.pt/",
    featured: true,
    badges: ["BÓNUS GENEROSO"],
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
    disclaimer:
      "18+. Promoção para novos utilizadores. Bónus de 250% até 400€ mais 50€ em aposta grátis. Depósito mínimo de 10€. Requisitos de rollover 6x. Odds mínimas 1.60. Válido 45 dias. Licença SRIJ. Jogue responsavelmente.",
  },
  {
    id: 7,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "Aposta Grátis de 2€",
    dopbonus: "Atualmente Disponível",
    modalBonus: "Aposta Grátis de 2€ Atualmente",
    rating: 8.6,
    stars: 4,
    reviews: 3394,
    reviewCount: 3394,
    url: "https://www.casinoportugal.pt/",
    featured: true,
    badges: ["APOSTAS & DESPORTO"],
    terms: "18+ | Jogo seguro e responsável | Licença SRIJ | Aplicam-se termos e condições",
    disclaimer:
      "18+. Novos clientes apenas. Aposta grátis de 2€ disponível após registo e verificação. T&Cs aplicam-se. Licença SRIJ. Jogue responsavelmente.",
  },
]
