import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMobileOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMobileOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMobileOff["size"];
}
interface RuxIconMobileOffEvents {
}
interface RuxIconMobileOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMobileOff extends SvelteComponent {
    $$prop_def: RuxIconMobileOffProps;
    $$events_def: RuxIconMobileOffEvents;
    $$slot_def: RuxIconMobileOffSlots;
    $on<K extends keyof RuxIconMobileOffEvents>(type: K, callback: (e: RuxIconMobileOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMobileOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMobileOffElement | undefined;
}
export default RuxIconMobileOff;
