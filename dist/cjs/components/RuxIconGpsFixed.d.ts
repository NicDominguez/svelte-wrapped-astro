import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGpsFixedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGpsFixed["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGpsFixed["size"];
}
interface RuxIconGpsFixedEvents {
}
interface RuxIconGpsFixedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGpsFixed extends SvelteComponent {
    $$prop_def: RuxIconGpsFixedProps;
    $$events_def: RuxIconGpsFixedEvents;
    $$slot_def: RuxIconGpsFixedSlots;
    $on<K extends keyof RuxIconGpsFixedEvents>(type: K, callback: (e: RuxIconGpsFixedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGpsFixedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGpsFixedElement | undefined;
}
export default RuxIconGpsFixed;
