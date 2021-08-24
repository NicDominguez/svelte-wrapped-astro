import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWallpaperProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWallpaper["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWallpaper["size"];
}
interface RuxIconWallpaperEvents {
}
interface RuxIconWallpaperSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWallpaper extends SvelteComponent {
    $$prop_def: RuxIconWallpaperProps;
    $$events_def: RuxIconWallpaperEvents;
    $$slot_def: RuxIconWallpaperSlots;
    $on<K extends keyof RuxIconWallpaperEvents>(type: K, callback: (e: RuxIconWallpaperEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWallpaperProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWallpaperElement | undefined;
}
export default RuxIconWallpaper;
