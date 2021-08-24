import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTabUnselectedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTabUnselected["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTabUnselected["size"];
}
interface RuxIconTabUnselectedEvents {
}
interface RuxIconTabUnselectedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTabUnselected extends SvelteComponent {
    $$prop_def: RuxIconTabUnselectedProps;
    $$events_def: RuxIconTabUnselectedEvents;
    $$slot_def: RuxIconTabUnselectedSlots;
    $on<K extends keyof RuxIconTabUnselectedEvents>(type: K, callback: (e: RuxIconTabUnselectedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTabUnselectedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTabUnselectedElement | undefined;
}
export default RuxIconTabUnselected;
