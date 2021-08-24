import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDialerSipProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDialerSip["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDialerSip["size"];
}
interface RuxIconDialerSipEvents {
}
interface RuxIconDialerSipSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDialerSip extends SvelteComponent {
    $$prop_def: RuxIconDialerSipProps;
    $$events_def: RuxIconDialerSipEvents;
    $$slot_def: RuxIconDialerSipSlots;
    $on<K extends keyof RuxIconDialerSipEvents>(type: K, callback: (e: RuxIconDialerSipEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDialerSipProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDialerSipElement | undefined;
}
export default RuxIconDialerSip;
