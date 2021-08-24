import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatColorTextProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatColorText["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatColorText["size"];
}
interface RuxIconFormatColorTextEvents {
}
interface RuxIconFormatColorTextSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatColorText extends SvelteComponent {
    $$prop_def: RuxIconFormatColorTextProps;
    $$events_def: RuxIconFormatColorTextEvents;
    $$slot_def: RuxIconFormatColorTextSlots;
    $on<K extends keyof RuxIconFormatColorTextEvents>(type: K, callback: (e: RuxIconFormatColorTextEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatColorTextProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatColorTextElement | undefined;
}
export default RuxIconFormatColorText;
