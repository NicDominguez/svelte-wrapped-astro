import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGpsOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGpsOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGpsOff["size"];
}
interface RuxIconGpsOffEvents {
}
interface RuxIconGpsOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGpsOff extends SvelteComponent {
    $$prop_def: RuxIconGpsOffProps;
    $$events_def: RuxIconGpsOffEvents;
    $$slot_def: RuxIconGpsOffSlots;
    $on<K extends keyof RuxIconGpsOffEvents>(type: K, callback: (e: RuxIconGpsOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGpsOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGpsOffElement | undefined;
}
export default RuxIconGpsOff;
