import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatColorFillProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatColorFill["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatColorFill["size"];
}
interface RuxIconFormatColorFillEvents {
}
interface RuxIconFormatColorFillSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatColorFill extends SvelteComponent {
    $$prop_def: RuxIconFormatColorFillProps;
    $$events_def: RuxIconFormatColorFillEvents;
    $$slot_def: RuxIconFormatColorFillSlots;
    $on<K extends keyof RuxIconFormatColorFillEvents>(type: K, callback: (e: RuxIconFormatColorFillEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatColorFillProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatColorFillElement | undefined;
}
export default RuxIconFormatColorFill;
