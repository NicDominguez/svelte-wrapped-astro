import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTextFormatProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTextFormat["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTextFormat["size"];
}
interface RuxIconTextFormatEvents {
}
interface RuxIconTextFormatSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTextFormat extends SvelteComponent {
    $$prop_def: RuxIconTextFormatProps;
    $$events_def: RuxIconTextFormatEvents;
    $$slot_def: RuxIconTextFormatSlots;
    $on<K extends keyof RuxIconTextFormatEvents>(type: K, callback: (e: RuxIconTextFormatEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTextFormatProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTextFormatElement | undefined;
}
export default RuxIconTextFormat;
