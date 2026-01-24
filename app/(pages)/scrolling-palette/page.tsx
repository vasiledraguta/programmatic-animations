import { ScrollingPalette } from "@/components/scrolling-palette/ScrollingPalette";
import Source from "@/components/Source";

export default function ScrollingPalettePage() {
	return (
		<main className="relative h-screen w-full bg-[--color-background]">
			<ScrollingPalette />
			<div className="absolute bottom-4 left-1/2 -translate-x-1/2">
				<Source href="https://github.com/vasiledraguta/craft/tree/main/components/scrolling-palette" />
			</div>
		</main>
	);
}
