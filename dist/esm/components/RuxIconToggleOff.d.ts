import { Components } from '@astrouxds/astro-web-components';
interface RuxIconToggleOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconToggleOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconToggleOff["size"];
}
interface RuxIconToggleOffEvents {
}
interface RuxIconToggleOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconToggleOff extends SvelteComponent {
    $$prop_def: RuxIconToggleOffProps;
    $$events_def: RuxIconToggleOffEvents;
    $$slot_def: RuxIconToggleOffSlots;
    $on<K extends keyof RuxIconToggleOffEvents>(type: K, callback: (e: RuxIconToggleOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconToggleOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconToggleOffElement | undefined;
}
export default RuxIconToggleOff;
