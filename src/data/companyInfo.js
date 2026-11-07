export const COMPANY_INFO = {
  name: "Distribuidora Ponto Forte",
  tagline: "Logística, Força & Agilidade na Distribuição Comercial",
  phoneDisplay: "(61) 99117-5823",
  phoneRaw: "5561991175823",
  address: {
    street: "Setor Residencial Leste, Buritis I, Quadra 5",
    city: "Planaltina",
    state: "DF",
    country: "Brasil",
    full: "Setor Residencial Leste, Buritis I, Quadra 5, Planaltina - DF",
    mapsQuery: "Setor+Residencial+Leste+Buritis+I+Quadra+5+Planaltina+DF",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Setor+Residencial+Leste+Buritis+I+Quadra+5+Planaltina+DF"
  },
  whatsappUrl: (message = "Olá! Gostaria de informações institucionais sobre o atendimento da Distribuidora Ponto Forte.") => {
    return `https://wa.me/5561991175823?text=${encodeURIComponent(message)}`;
  },
  disclaimer: "Projeto demonstrativo desenvolvido por Davi Anderson. Esta apresentação é conceitual e não representa um sistema/site oficial da Distribuidora Ponto Forte.",
  brandColors: [
    { name: "Electric Amber", hex: "#F59E0B", rgb: "245, 158, 11", cmyk: "0, 36, 96, 4", role: "Cor Primária / Acento Energético", textDark: true },
    { name: "Solar Gold Highlight", hex: "#FBBF24", rgb: "251, 191, 36", cmyk: "0, 24, 86, 2", role: "Iluminação / Hover & Brilho", textDark: true },
    { name: "Deep Amber Shadow", hex: "#D97706", rgb: "217, 119, 6", cmyk: "0, 45, 97, 15", role: "Profundidade & Contraste do Símbolo", textDark: false },
    { name: "Obsidian Canvas", hex: "#0B0F17", rgb: "11, 15, 23", cmyk: "52, 35, 0, 91", role: "Fundo Institucional Noturno", textDark: false },
    { name: "Charcoal Slate", hex: "#111827", rgb: "17, 24, 39", cmyk: "56, 38, 0, 85", role: "Superfície de Cards & Elevação", textDark: false },
    { name: "Steel Border", hex: "#1F2937", rgb: "31, 41, 55", cmyk: "44, 25, 0, 78", role: "Divisores & Linhas Estruturais", textDark: false },
    { name: "Surgical White", hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0", role: "Tipografia de Alto Contraste & Destaque", textDark: true },
    { name: "Muted Slate", hex: "#94A3B8", rgb: "148, 163, 184", cmyk: "20, 11, 0, 28", role: "Subtítulos & Textos de Apoio", textDark: false },
  ],
  regions: [
    "Buritis I (Região Sede)",
    "Buritis II",
    "Setor Tradicional",
    "Jardim Roriz",
    "Setor Residencial Leste",
    "Setor Residencial Norte",
    "Setor Residencial Sul",
    "Estância Mestre D'Armas",
    "Arapoanga",
    "Vale do Amanhecer",
    "Taquara",
    "Outras Regiões de Planaltina / DF"
  ]
};
