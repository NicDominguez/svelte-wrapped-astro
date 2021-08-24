import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatTextdirectionLToRProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatTextdirectionLToR["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatTextdirectionLToR["size"];
}
interface RuxIconFormatTextdirectionLToREvents {
}
interface RuxIconFormatTextdirectionLToRSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatTextdirectionLToR extends SvelteComponent {
    $$prop_def: RuxIconFormatTextdirectionLToRProps;
    $$events_def: RuxIconFormatTextdirectionLToREvents;
    $$slot_def: RuxIconFormatTextdirectionLToRSlots;
    $on<K extends keyof RuxIconFormatTextdirectionLToREvents>(type: K, callback: (e: RuxIconFormatTextdirectionLToREvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatTextdirectionLToRProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatTextdirectionLToRElement | undefined;
}
export default RuxIconFormatTextdirectionLToR;
