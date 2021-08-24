import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalOfferProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalOffer["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalOffer["size"];
}
interface RuxIconLocalOfferEvents {
}
interface RuxIconLocalOfferSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalOffer extends SvelteComponent {
    $$prop_def: RuxIconLocalOfferProps;
    $$events_def: RuxIconLocalOfferEvents;
    $$slot_def: RuxIconLocalOfferSlots;
    $on<K extends keyof RuxIconLocalOfferEvents>(type: K, callback: (e: RuxIconLocalOfferEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalOfferProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalOfferElement | undefined;
}
export default RuxIconLocalOffer;
