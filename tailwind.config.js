/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				funnel: ["Funnel Display", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				brand: {
					50: "#e6f7fd",  // Lightest
					100: "#cceffd",
					200: "#99dffb",
					300: "#66cff9",
					400: "#33bff6",
					500: "#0195D2",  // Main color
					600: "#017eb2",
					700: "#016690",
					800: "#004d6e",
					900: "#00334b", // Darkest
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0", transform: "translateY(-10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				fadeOut: {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(-10px)" },
				},
				scaleUp: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				  },
			},
			animation: {
				"fade-in": "fadeIn 320ms ease-in-out",
				"fade-out": "fadeOut 320ms ease-in-out",
				scaleUp: 'scaleUp 600ms ease-in-out 1.5s forwards',

			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}



