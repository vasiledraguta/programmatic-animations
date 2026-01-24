export interface GradientDefinition {
	id: string;
	name: string;
	description: string;
	background: string;
}

export const gradients: GradientDefinition[] = [
	{
		id: "linear",
		name: "Linear",
		description: "Vertical sky-to-blush gradient with soft transitions",
		background:
			"linear-gradient(180deg, #A8E0F8 0%, #D4EEF9 25%, #F0F5FA 50%, #FDF4F0 75%, #FBE8E4 100%)",
	},
	{
		id: "radial",
		name: "Radial",
		description: "Bright center fading to soft blue edges",
		background:
			"radial-gradient(circle at 50% 50%, #FFFFFF 0%, #FFFFFF 15%, #D4EEF9 40%, #A8E0F8 70%, #8BD3F4 100%)",
	},
	{
		id: "conic",
		name: "Conic",
		description: "Angular sweep creating a soft pinwheel effect",
		background: `
      conic-gradient(from 0deg at 50% 50%, 
        #A8E0F8 0deg, 
        #FBE8E4 60deg, 
        #A8E0F8 120deg, 
        #FBE8E4 180deg, 
        #A8E0F8 240deg, 
        #FBE8E4 300deg, 
        #A8E0F8 360deg
      )
    `,
	},
	{
		id: "shapeblur",
		name: "Shape Blur",
		description: "Soft organic blobs with dreamy blur effect",
		background: `
      radial-gradient(ellipse 50% 80% at 20% 20%, rgba(168, 224, 248, 0.9) 0%, transparent 70%),
      radial-gradient(ellipse 70% 50% at 75% 30%, rgba(197, 230, 246, 0.8) 0%, transparent 70%),
      radial-gradient(ellipse 60% 70% at 30% 70%, rgba(248, 224, 220, 0.85) 0%, transparent 70%),
      radial-gradient(ellipse 80% 60% at 80% 80%, rgba(251, 232, 228, 0.9) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 50% 50%, rgba(255, 255, 255, 0.7) 0%, transparent 60%),
      linear-gradient(180deg, #E8F4FB 0%, #F5F8FC 50%, #FDF6F3 100%)
    `,
	},
	{
		id: "mesh",
		name: "Mesh",
		description: "Distinct color orbs floating on soft base",
		background: `
      radial-gradient(circle at 15% 15%, #A8E0F8 0%, transparent 35%),
      radial-gradient(circle at 85% 20%, #C5E6F6 0%, transparent 30%),
      radial-gradient(circle at 80% 80%, #FBE8E4 0%, transparent 35%),
      radial-gradient(circle at 20% 85%, #F8E0DC 0%, transparent 30%),
      radial-gradient(circle at 50% 50%, #FFFFFF 0%, transparent 40%),
      linear-gradient(180deg, #E8F4FB 0%, #FAFCFD 50%, #FDF8F6 100%)
    `,
	},
	{
		id: "noise",
		name: "Noise",
		description: "Visible grain texture over gradient",
		background: `
      url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E"),
      linear-gradient(180deg, #A8E0F8 0%, #D4EEF9 50%, #FBE8E4 100%)
    `,
	},
	{
		id: "aurora",
		name: "Aurora",
		description: "Horizontal bands of flowing light",
		background: `
      linear-gradient(180deg, 
        #A8E0F8 0%, 
        #C5E6F6 15%,
        #E8F4FB 25%,
        #F5F8FC 35%,
        #FDFBFA 50%,
        #FDF6F3 65%,
        #FBE8E4 75%,
        #F8E0DC 85%,
        #FBE8E4 100%
      )
    `,
	},
	{
		id: "prismatic",
		name: "Prismatic",
		description: "Diagonal split with color bands",
		background: `
      linear-gradient(135deg, 
        #A8E0F8 0%, 
        #A8E0F8 20%,
        #C5E6F6 20%,
        #C5E6F6 35%,
        #F0F5FA 35%,
        #F0F5FA 50%,
        #FDF4F0 50%,
        #FDF4F0 65%,
        #FBE8E4 65%,
        #FBE8E4 80%,
        #F8E0DC 80%,
        #F8E0DC 100%
      )
    `,
	},
	{
		id: "reflected",
		name: "Reflected",
		description: "Symmetrical mirror effect from center line",
		background: `
      linear-gradient(180deg, 
        #A8E0F8 0%, 
        #C5E6F6 20%, 
        #E8F4FB 40%, 
        #FFFFFF 50%, 
        #E8F4FB 60%, 
        #C5E6F6 80%, 
        #A8E0F8 100%
      )
    `,
	},
	{
		id: "spotlight",
		name: "Spotlight",
		description: "Dramatic off-center light beam effect",
		background: `
      radial-gradient(ellipse 60% 100% at 30% 0%, rgba(168, 224, 248, 0.9) 0%, transparent 50%),
      radial-gradient(ellipse 80% 60% at 70% 100%, rgba(251, 232, 228, 0.8) 0%, transparent 50%),
      linear-gradient(135deg, #E0EDF5 0%, #F5F8FC 50%, #FDF6F3 100%)
    `,
	},
];
