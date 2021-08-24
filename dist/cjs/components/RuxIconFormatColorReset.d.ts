import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatColorResetProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatColorReset["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatColorReset["size"];
}
interface RuxIconFormatColorResetEvents {
}
interface RuxIconFormatColorResetSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatColorReset extends SvelteComponent {
    $$prop_def: RuxIconFormatColorResetProps;
    $$events_def: RuxIconFormatColorResetEvents;
    $$slot_def: RuxIconFormatColorResetSlots;
    $on<K extends keyof RuxIconFormatColorResetEvents>(type: K, callback: (e: RuxIconFormatColorResetEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatColorResetProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatColorResetElement | undefined;
}
export default RuxIconFormatColorReset;
