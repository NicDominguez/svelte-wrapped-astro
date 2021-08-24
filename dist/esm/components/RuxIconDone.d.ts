import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDone["size"];
}
interface RuxIconDoneEvents {
}
interface RuxIconDoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDone extends SvelteComponent {
    $$prop_def: RuxIconDoneProps;
    $$events_def: RuxIconDoneEvents;
    $$slot_def: RuxIconDoneSlots;
    $on<K extends keyof RuxIconDoneEvents>(type: K, callback: (e: RuxIconDoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDoneElement | undefined;
}
export default RuxIconDone;
