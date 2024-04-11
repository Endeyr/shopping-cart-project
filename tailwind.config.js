/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      theme: {
        "os_headings": ['PT Serif'],
        "os_body": ['IBM Plex Sans'],
      },
      colors: {
        // osrs color theme
        os_body_border: "#94866d",
        os_body_dark: "#b8a282",
        os_body_mid: "#d0bd97",
        os_body_light: "#d8ccb4",
        os_body_main: "#e2dbc8",
        os_body_background: "#c0a886",
        os_button_border: "#3c352a",
        os_button_dark: "#18140c",
        os_button_light: "#3a301d",
        os_rsw_brown: "#605443",
        os_link_color: "#936039",
        os_background_link_color: "#52351e",
        os_gray_mineshaft: "#333333",
        os_gray_tundora: "#4c4c4c",
        os_gray_boulder: "#777777",
        os_gray_silver: "#cccccc",
        os_gray_gallery: "#eeeeee",
        os_gray_alabaster: "#f9f9f9",
        // osrs status
        os_error: "#801c13",
        os_orange: "#7a3f08",
        os_yellow: "#786300",
        os_success: "#2e5e05",
        os_blue: "#03436b",
        // osrs dark theme
        os_black: "#071022",
        os_brown: "#1b1612",
        // shadcn color theme
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
