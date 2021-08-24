import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatAlignRightProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatAlignRight["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatAlignRight["size"];
}
interface RuxIconFormatAlignRightEvents {
}
interface RuxIconFormatAlignRightSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatAlignRight extends SvelteComponent {
    $$prop_def: RuxIconFormatAlignRightProps;
    $$events_def: RuxIconFormatAlignRightEvents;
    $$slot_def: RuxIconFormatAlignRightSlots;
    $on<K extends keyof RuxIconFormatAlignRightEvents>(type: K, callback: (e: RuxIconFormatAlignRightEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatAlignRightProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatAlignRightElement | undefined;
}
export default RuxIconFormatAlignRight;
