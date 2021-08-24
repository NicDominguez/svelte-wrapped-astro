import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhonelinkRingProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhonelinkRing["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhonelinkRing["size"];
}
interface RuxIconPhonelinkRingEvents {
}
interface RuxIconPhonelinkRingSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhonelinkRing extends SvelteComponent {
    $$prop_def: RuxIconPhonelinkRingProps;
    $$events_def: RuxIconPhonelinkRingEvents;
    $$slot_def: RuxIconPhonelinkRingSlots;
    $on<K extends keyof RuxIconPhonelinkRingEvents>(type: K, callback: (e: RuxIconPhonelinkRingEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhonelinkRingProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhonelinkRingElement | undefined;
}
export default RuxIconPhonelinkRing;
