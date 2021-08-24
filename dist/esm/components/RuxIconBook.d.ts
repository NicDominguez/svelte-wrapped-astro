import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBookProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBook["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBook["size"];
}
interface RuxIconBookEvents {
}
interface RuxIconBookSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBook extends SvelteComponent {
    $$prop_def: RuxIconBookProps;
    $$events_def: RuxIconBookEvents;
    $$slot_def: RuxIconBookSlots;
    $on<K extends keyof RuxIconBookEvents>(type: K, callback: (e: RuxIconBookEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBookProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBookElement | undefined;
}
export default RuxIconBook;
