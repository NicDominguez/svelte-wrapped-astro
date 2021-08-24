import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatIndentIncreaseProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatIndentIncrease["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatIndentIncrease["size"];
}
interface RuxIconFormatIndentIncreaseEvents {
}
interface RuxIconFormatIndentIncreaseSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatIndentIncrease extends SvelteComponent {
    $$prop_def: RuxIconFormatIndentIncreaseProps;
    $$events_def: RuxIconFormatIndentIncreaseEvents;
    $$slot_def: RuxIconFormatIndentIncreaseSlots;
    $on<K extends keyof RuxIconFormatIndentIncreaseEvents>(type: K, callback: (e: RuxIconFormatIndentIncreaseEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatIndentIncreaseProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatIndentIncreaseElement | undefined;
}
export default RuxIconFormatIndentIncrease;
