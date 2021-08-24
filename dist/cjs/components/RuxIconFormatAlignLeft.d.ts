import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatAlignLeftProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatAlignLeft["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatAlignLeft["size"];
}
interface RuxIconFormatAlignLeftEvents {
}
interface RuxIconFormatAlignLeftSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatAlignLeft extends SvelteComponent {
    $$prop_def: RuxIconFormatAlignLeftProps;
    $$events_def: RuxIconFormatAlignLeftEvents;
    $$slot_def: RuxIconFormatAlignLeftSlots;
    $on<K extends keyof RuxIconFormatAlignLeftEvents>(type: K, callback: (e: RuxIconFormatAlignLeftEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatAlignLeftProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatAlignLeftElement | undefined;
}
export default RuxIconFormatAlignLeft;
