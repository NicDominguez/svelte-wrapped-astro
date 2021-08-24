import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatClearProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatClear["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatClear["size"];
}
interface RuxIconFormatClearEvents {
}
interface RuxIconFormatClearSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatClear extends SvelteComponent {
    $$prop_def: RuxIconFormatClearProps;
    $$events_def: RuxIconFormatClearEvents;
    $$slot_def: RuxIconFormatClearSlots;
    $on<K extends keyof RuxIconFormatClearEvents>(type: K, callback: (e: RuxIconFormatClearEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatClearProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatClearElement | undefined;
}
export default RuxIconFormatClear;
