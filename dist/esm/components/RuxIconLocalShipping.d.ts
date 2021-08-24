import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalShippingProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalShipping["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalShipping["size"];
}
interface RuxIconLocalShippingEvents {
}
interface RuxIconLocalShippingSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalShipping extends SvelteComponent {
    $$prop_def: RuxIconLocalShippingProps;
    $$events_def: RuxIconLocalShippingEvents;
    $$slot_def: RuxIconLocalShippingSlots;
    $on<K extends keyof RuxIconLocalShippingEvents>(type: K, callback: (e: RuxIconLocalShippingEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalShippingProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalShippingElement | undefined;
}
export default RuxIconLocalShipping;
