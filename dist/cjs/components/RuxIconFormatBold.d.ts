import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatBoldProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatBold["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatBold["size"];
}
interface RuxIconFormatBoldEvents {
}
interface RuxIconFormatBoldSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatBold extends SvelteComponent {
    $$prop_def: RuxIconFormatBoldProps;
    $$events_def: RuxIconFormatBoldEvents;
    $$slot_def: RuxIconFormatBoldSlots;
    $on<K extends keyof RuxIconFormatBoldEvents>(type: K, callback: (e: RuxIconFormatBoldEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatBoldProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatBoldElement | undefined;
}
export default RuxIconFormatBold;
