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
				
				// Mobile frame colors
				'mobile-frame': 'hsl(var(--mobile-frame))',
				'mobile-screen': 'hsl(var(--mobile-screen))',
				
				// Gaming theme colors
				'game-purple': 'hsl(var(--game-purple))',
				'game-purple-dark': 'hsl(var(--game-purple-dark))',
				'game-maroon': 'hsl(var(--game-maroon))',
				
				// Golden accents
				'gold': 'hsl(var(--gold))',
				'gold-light': 'hsl(var(--gold-light))',
				'gold-dark': 'hsl(var(--gold-dark))',
				
				// Action colors
				'success': 'hsl(var(--success))',
				'success-foreground': 'hsl(var(--success-foreground))',
				'warning': 'hsl(var(--warning))',
				
				// Card colors
				'card-glow': 'hsl(var(--card-glow))',
				
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
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			backgroundImage: {
				'gradient-purple': 'var(--gradient-purple)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-shine': 'var(--gradient-shine)',
			},
			boxShadow: {
				'glow-gold': 'var(--glow-gold)',
				'glow-purple': 'var(--glow-purple)',
				'shadow-premium': 'var(--shadow-premium)',
			},
			animation: {
				'glow': 'glow 2s ease-in-out infinite alternate',
				'float': 'float 3s ease-in-out infinite',
				'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'shine': 'shine 2s infinite',
				'premium-glow': 'premium-glow 3s ease-in-out infinite',
			},
			spacing: {
				'safe-top': 'env(safe-area-inset-top)',
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'safe-left': 'env(safe-area-inset-left)',
				'safe-right': 'env(safe-area-inset-right)',
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
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': { 
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)' 
					},
					'50%': { 
						transform: 'translateY(-10px) rotate(180deg)' 
					}
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--gold))' 
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--gold)), 0 0 60px hsl(var(--gold))' 
					}
				},
				'pulse-gold': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)' 
					},
					'50%': { 
						opacity: '0.8',
						transform: 'scale(1.05)' 
					}
				},
				'shine': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'premium-glow': {
					'0%, 100%': { 
						boxShadow: '0 10px 40px hsl(var(--gold) / 0.3)' 
					},
					'50%': { 
						boxShadow: '0 10px 40px hsl(var(--gold) / 0.5), 0 0 60px hsl(var(--gold) / 0.4)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
