import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGridOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGridOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGridOff["size"];
}
interface RuxIconGridOffEvents {
}
interface RuxIconGridOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGridOff extends SvelteComponent {
    $$prop_def: RuxIconGridOffProps;
    $$events_def: RuxIconGridOffEvents;
    $$slot_def: RuxIconGridOffSlots;
    $on<K extends keyof RuxIconGridOffEvents>(type: K, callback: (e: RuxIconGridOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGridOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGridOffElement | undefined;
}
export default RuxIconGridOff;
