import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatIndentDecreaseProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatIndentDecrease["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatIndentDecrease["size"];
}
interface RuxIconFormatIndentDecreaseEvents {
}
interface RuxIconFormatIndentDecreaseSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatIndentDecrease extends SvelteComponent {
    $$prop_def: RuxIconFormatIndentDecreaseProps;
    $$events_def: RuxIconFormatIndentDecreaseEvents;
    $$slot_def: RuxIconFormatIndentDecreaseSlots;
    $on<K extends keyof RuxIconFormatIndentDecreaseEvents>(type: K, callback: (e: RuxIconFormatIndentDecreaseEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatIndentDecreaseProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatIndentDecreaseElement | undefined;
}
export default RuxIconFormatIndentDecrease;
