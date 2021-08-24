import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWebProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWeb["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWeb["size"];
}
interface RuxIconWebEvents {
}
interface RuxIconWebSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWeb extends SvelteComponent {
    $$prop_def: RuxIconWebProps;
    $$events_def: RuxIconWebEvents;
    $$slot_def: RuxIconWebSlots;
    $on<K extends keyof RuxIconWebEvents>(type: K, callback: (e: RuxIconWebEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWebProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWebElement | undefined;
}
export default RuxIconWeb;
