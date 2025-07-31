// Grid System Patterns - Padrão Unificado do Projeto
// Arquivo de configuração com classes Tailwind padronizadas

export const GridPatterns = {
  // === CONTAINERS ===
  containers: {
    // Container principal centralizado
    main: "max-w-[1400px] mx-auto px-4 lg:px-6",
    
    // Container de formulário
    form: "w-full max-w-2xl mx-auto",
    
    // Container de página completa
    fullPage: "min-h-screen bg-white",
    
    // Container com padding padrão
    padded: "px-4 lg:px-6 pt-[80px] pb-20"
  },

  // === LAYOUTS ===
  layouts: {
    // Layout com sidebar (280px fixa + conteúdo flexível)
    sidebar: "flex min-h-screen",
    sidebarPanel: "hidden lg:block lg:w-[280px] lg:flex-shrink-0",
    sidebarMain: "flex-1",
    
    // Layout centralizado
    centered: "flex justify-center items-center min-h-screen",
    
    // Layout de formulário centrado
    formCentered: "flex justify-center px-4 pt-[80px] pb-20"
  },

  // === GRIDS RESPONSIVOS ===
  grids: {
    // Grid para cards/itens (1-4 colunas)
    responsive: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6",
    
    // Grid específico para planos de saúde: 6 cards em 1366px, 8 cards em 1920px
    // Mobile: 1 col, SM: 2 cols, LG (1366px): 3 cols (6 cards visíveis), XL+ (1920px): 4 cols (8 cards visíveis)
    planosGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
    
    // Grid para dados em tabela
    dataGrid: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4",
    
    // Grid para inputs de formulário
    formGrid: "grid grid-cols-1 md:grid-cols-2 gap-4",
    
    // Grid compacto
    compact: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
  },

  // === FLEXBOX PATTERNS ===
  flex: {
    // Flex containers básicos
    col: "flex flex-col",
    row: "flex flex-row",
    
    // Flex com gaps padrão
    colGap: "flex flex-col gap-6",
    rowGap: "flex flex-row gap-4",
    
    // Alinhamentos comuns
    center: "flex items-center justify-center",
    between: "flex items-center justify-between",
    start: "flex items-start justify-start",
    
    // Flex responsivo
    responsive: "flex flex-col md:flex-row gap-4"
  },

  // === CARDS E COMPONENTES ===
  cards: {
    // Card padrão
    base: "bg-white rounded-xl border border-gray-200 p-6",
    
    // Card interativo
    interactive: "bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-colors",
    
    // Card selecionado
    selected: "bg-white rounded-xl border-2 border-[#f05223] p-6",
    
    // Card em grid (altura uniforme)
    gridItem: "bg-white rounded-xl border border-gray-200 p-6 h-full flex flex-col"
  },

  // === SPACING ===
  spacing: {
    section: "space-y-6",
    form: "space-y-4",
    tight: "space-y-2",
    loose: "space-y-8"
  },

  // === RESPONSIVIDADE ===
  breakpoints: {
    mobile: "block md:hidden",
    desktop: "hidden md:block",
    tablet: "hidden md:block lg:hidden",
    large: "hidden lg:block"
  }
} as const;

// Função auxiliar para combinar classes
export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Tipos TypeScript para autocompletar
export type ContainerPattern = keyof typeof GridPatterns.containers;
export type LayoutPattern = keyof typeof GridPatterns.layouts;
export type GridPattern = keyof typeof GridPatterns.grids;
export type FlexPattern = keyof typeof GridPatterns.flex;
export type CardPattern = keyof typeof GridPatterns.cards;