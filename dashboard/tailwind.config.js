export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        // puedes agregar más tokens si los usas: 
        // primary: 'hsl(var(--primary))',
        // secondary: 'hsl(var(--secondary))',
        // etc.
      },
    },
  },
  plugins: [],
};
