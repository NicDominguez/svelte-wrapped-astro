import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatQuoteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatQuote["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatQuote["size"];
}
interface RuxIconFormatQuoteEvents {
}
interface RuxIconFormatQuoteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatQuote extends SvelteComponent {
    $$prop_def: RuxIconFormatQuoteProps;
    $$events_def: RuxIconFormatQuoteEvents;
    $$slot_def: RuxIconFormatQuoteSlots;
    $on<K extends keyof RuxIconFormatQuoteEvents>(type: K, callback: (e: RuxIconFormatQuoteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatQuoteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatQuoteElement | undefined;
}
export default RuxIconFormatQuote;
