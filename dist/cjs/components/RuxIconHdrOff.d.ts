import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHdrOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHdrOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHdrOff["size"];
}
interface RuxIconHdrOffEvents {
}
interface RuxIconHdrOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHdrOff extends SvelteComponent {
    $$prop_def: RuxIconHdrOffProps;
    $$events_def: RuxIconHdrOffEvents;
    $$slot_def: RuxIconHdrOffSlots;
    $on<K extends keyof RuxIconHdrOffEvents>(type: K, callback: (e: RuxIconHdrOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHdrOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHdrOffElement | undefined;
}
export default RuxIconHdrOff;
