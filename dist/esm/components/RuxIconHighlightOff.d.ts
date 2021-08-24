import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHighlightOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHighlightOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHighlightOff["size"];
}
interface RuxIconHighlightOffEvents {
}
interface RuxIconHighlightOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHighlightOff extends SvelteComponent {
    $$prop_def: RuxIconHighlightOffProps;
    $$events_def: RuxIconHighlightOffEvents;
    $$slot_def: RuxIconHighlightOffSlots;
    $on<K extends keyof RuxIconHighlightOffEvents>(type: K, callback: (e: RuxIconHighlightOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHighlightOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHighlightOffElement | undefined;
}
export default RuxIconHighlightOff;
