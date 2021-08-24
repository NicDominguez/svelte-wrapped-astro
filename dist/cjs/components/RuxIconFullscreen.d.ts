import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFullscreenProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFullscreen["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFullscreen["size"];
}
interface RuxIconFullscreenEvents {
}
interface RuxIconFullscreenSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFullscreen extends SvelteComponent {
    $$prop_def: RuxIconFullscreenProps;
    $$events_def: RuxIconFullscreenEvents;
    $$slot_def: RuxIconFullscreenSlots;
    $on<K extends keyof RuxIconFullscreenEvents>(type: K, callback: (e: RuxIconFullscreenEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFullscreenProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFullscreenElement | undefined;
}
export default RuxIconFullscreen;
