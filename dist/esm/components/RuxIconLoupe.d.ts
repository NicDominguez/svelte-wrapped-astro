import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLoupeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLoupe["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLoupe["size"];
}
interface RuxIconLoupeEvents {
}
interface RuxIconLoupeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLoupe extends SvelteComponent {
    $$prop_def: RuxIconLoupeProps;
    $$events_def: RuxIconLoupeEvents;
    $$slot_def: RuxIconLoupeSlots;
    $on<K extends keyof RuxIconLoupeEvents>(type: K, callback: (e: RuxIconLoupeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLoupeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLoupeElement | undefined;
}
export default RuxIconLoupe;
