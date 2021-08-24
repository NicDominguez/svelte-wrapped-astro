import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatListNumberedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatListNumbered["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatListNumbered["size"];
}
interface RuxIconFormatListNumberedEvents {
}
interface RuxIconFormatListNumberedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatListNumbered extends SvelteComponent {
    $$prop_def: RuxIconFormatListNumberedProps;
    $$events_def: RuxIconFormatListNumberedEvents;
    $$slot_def: RuxIconFormatListNumberedSlots;
    $on<K extends keyof RuxIconFormatListNumberedEvents>(type: K, callback: (e: RuxIconFormatListNumberedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatListNumberedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatListNumberedElement | undefined;
}
export default RuxIconFormatListNumbered;
