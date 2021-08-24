import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatAlignJustifyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatAlignJustify["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatAlignJustify["size"];
}
interface RuxIconFormatAlignJustifyEvents {
}
interface RuxIconFormatAlignJustifySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatAlignJustify extends SvelteComponent {
    $$prop_def: RuxIconFormatAlignJustifyProps;
    $$events_def: RuxIconFormatAlignJustifyEvents;
    $$slot_def: RuxIconFormatAlignJustifySlots;
    $on<K extends keyof RuxIconFormatAlignJustifyEvents>(type: K, callback: (e: RuxIconFormatAlignJustifyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatAlignJustifyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatAlignJustifyElement | undefined;
}
export default RuxIconFormatAlignJustify;
