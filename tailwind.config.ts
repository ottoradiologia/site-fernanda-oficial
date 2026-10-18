
import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#fdb4be', // Rosa suave (marca)
					foreground: '#4A2F35' // texto escuro sobre o rosa (7,1:1)
				},
				secondary: {
					DEFAULT: '#4A7570', // Verde suave escuro (botões secundários, 5,1:1 com branco)
					foreground: '#ffffff'
				},
				accent: {
					DEFAULT: '#f0f4e3', // Creme/Off-white
					foreground: '#333333'
				},
				muted: {
					DEFAULT: '#f8f9fa', // Cinza claro
					foreground: '#666666'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Paleta suave da Dra. Fernanda: ver PROPOSTA_DESIGN.md
				brand: {
					paper: '#FFFDF9',
					sage: '#F3F5EA',
					mist: '#EEF3EC',
					teal: '#83B2AC',
					tealDeep: '#4A7570',
					ink: '#34413E',
					muted: '#5E6D69',
					rose: '#FDB4BE',
					roseHover: '#FBA9B5',
					roseWash: '#FCEEF0',
					roseDeep: '#C77486',
					roseText: '#A85A6C',
					btnInk: '#4A2F35',
					line: '#E3E8E0'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'sans': ['Montserrat', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
				'display': ['Fraunces', 'Iowan Old Style', 'Georgia', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
