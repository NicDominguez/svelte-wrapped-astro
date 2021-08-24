import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDehazeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDehaze["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDehaze["size"];
}
interface RuxIconDehazeEvents {
}
interface RuxIconDehazeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDehaze extends SvelteComponent {
    $$prop_def: RuxIconDehazeProps;
    $$events_def: RuxIconDehazeEvents;
    $$slot_def: RuxIconDehazeSlots;
    $on<K extends keyof RuxIconDehazeEvents>(type: K, callback: (e: RuxIconDehazeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDehazeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDehazeElement | undefined;
}
export default RuxIconDehaze;
