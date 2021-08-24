import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatUnderlinedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatUnderlined["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatUnderlined["size"];
}
interface RuxIconFormatUnderlinedEvents {
}
interface RuxIconFormatUnderlinedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatUnderlined extends SvelteComponent {
    $$prop_def: RuxIconFormatUnderlinedProps;
    $$events_def: RuxIconFormatUnderlinedEvents;
    $$slot_def: RuxIconFormatUnderlinedSlots;
    $on<K extends keyof RuxIconFormatUnderlinedEvents>(type: K, callback: (e: RuxIconFormatUnderlinedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatUnderlinedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatUnderlinedElement | undefined;
}
export default RuxIconFormatUnderlined;
