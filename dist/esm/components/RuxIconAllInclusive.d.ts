import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAllInclusiveProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAllInclusive["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAllInclusive["size"];
}
interface RuxIconAllInclusiveEvents {
}
interface RuxIconAllInclusiveSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAllInclusive extends SvelteComponent {
    $$prop_def: RuxIconAllInclusiveProps;
    $$events_def: RuxIconAllInclusiveEvents;
    $$slot_def: RuxIconAllInclusiveSlots;
    $on<K extends keyof RuxIconAllInclusiveEvents>(type: K, callback: (e: RuxIconAllInclusiveEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAllInclusiveProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAllInclusiveElement | undefined;
}
export default RuxIconAllInclusive;
