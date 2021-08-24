import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocationOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocationOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocationOff["size"];
}
interface RuxIconLocationOffEvents {
}
interface RuxIconLocationOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocationOff extends SvelteComponent {
    $$prop_def: RuxIconLocationOffProps;
    $$events_def: RuxIconLocationOffEvents;
    $$slot_def: RuxIconLocationOffSlots;
    $on<K extends keyof RuxIconLocationOffEvents>(type: K, callback: (e: RuxIconLocationOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocationOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocationOffElement | undefined;
}
export default RuxIconLocationOff;
