import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPersonOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPersonOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPersonOutline["size"];
}
interface RuxIconPersonOutlineEvents {
}
interface RuxIconPersonOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPersonOutline extends SvelteComponent {
    $$prop_def: RuxIconPersonOutlineProps;
    $$events_def: RuxIconPersonOutlineEvents;
    $$slot_def: RuxIconPersonOutlineSlots;
    $on<K extends keyof RuxIconPersonOutlineEvents>(type: K, callback: (e: RuxIconPersonOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPersonOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPersonOutlineElement | undefined;
}
export default RuxIconPersonOutline;
