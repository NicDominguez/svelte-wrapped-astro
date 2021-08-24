import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDoneAllProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDoneAll["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDoneAll["size"];
}
interface RuxIconDoneAllEvents {
}
interface RuxIconDoneAllSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDoneAll extends SvelteComponent {
    $$prop_def: RuxIconDoneAllProps;
    $$events_def: RuxIconDoneAllEvents;
    $$slot_def: RuxIconDoneAllSlots;
    $on<K extends keyof RuxIconDoneAllEvents>(type: K, callback: (e: RuxIconDoneAllEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDoneAllProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDoneAllElement | undefined;
}
export default RuxIconDoneAll;
