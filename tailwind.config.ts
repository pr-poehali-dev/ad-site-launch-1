import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
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
					DEFAULT: '#FF6B35',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#1E3A8A',
					foreground: '#FFFFFF'
				},
				aviator: {
					orange: '#FF6B35',
					blue: '#1E3A8A',
					sky: '#3B82F6',
					cloud: '#F1F5F9',
					dark: '#1F2937',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
				'plane-takeoff': {
					'0%': {
						transform: 'translateX(-100px) translateY(50px) rotate(-10deg)',
						opacity: '0'
					},
					'20%': {
						transform: 'translateX(-20px) translateY(30px) rotate(0deg)',
						opacity: '1'
					},
					'50%': {
						transform: 'translateX(100px) translateY(-20px) rotate(10deg)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(300px) translateY(-100px) rotate(20deg)',
						opacity: '0.8'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'coefficient-pulse': {
					'0%': {
						transform: 'scale(1)',
						color: '#10B981'
					},
					'50%': {
						transform: 'scale(1.05)',
						color: '#F59E0B'
					},
					'100%': {
						transform: 'scale(1)',
						color: '#EF4444'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'plane-takeoff': 'plane-takeoff 10s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'coefficient-pulse': 'coefficient-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;