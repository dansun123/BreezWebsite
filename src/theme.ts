// Breez Labs Brand Theme - "Quiet Confidence"

export const theme = {
  colors: {
    primary: '#0A0F1F',      // Midnight - main text, buttons
    secondary: '#78716C',    // Stone - secondary text
    background: '#FAFAF9',   // Warm White - page background
    accent: '#065F46',       // Emerald - CTAs, highlights
    callout: '#F1F5F9',      // Fog - cards, sections
    white: '#FFFFFF',
  },
} as const;

export type Theme = typeof theme;
