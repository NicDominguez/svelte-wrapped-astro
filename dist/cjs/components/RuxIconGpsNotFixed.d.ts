import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGpsNotFixedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGpsNotFixed["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGpsNotFixed["size"];
}
interface RuxIconGpsNotFixedEvents {
}
interface RuxIconGpsNotFixedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGpsNotFixed extends SvelteComponent {
    $$prop_def: RuxIconGpsNotFixedProps;
    $$events_def: RuxIconGpsNotFixedEvents;
    $$slot_def: RuxIconGpsNotFixedSlots;
    $on<K extends keyof RuxIconGpsNotFixedEvents>(type: K, callback: (e: RuxIconGpsNotFixedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGpsNotFixedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGpsNotFixedElement | undefined;
}
export default RuxIconGpsNotFixed;
