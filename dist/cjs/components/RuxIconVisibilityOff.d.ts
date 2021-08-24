import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVisibilityOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVisibilityOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVisibilityOff["size"];
}
interface RuxIconVisibilityOffEvents {
}
interface RuxIconVisibilityOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVisibilityOff extends SvelteComponent {
    $$prop_def: RuxIconVisibilityOffProps;
    $$events_def: RuxIconVisibilityOffEvents;
    $$slot_def: RuxIconVisibilityOffSlots;
    $on<K extends keyof RuxIconVisibilityOffEvents>(type: K, callback: (e: RuxIconVisibilityOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVisibilityOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVisibilityOffElement | undefined;
}
export default RuxIconVisibilityOff;
