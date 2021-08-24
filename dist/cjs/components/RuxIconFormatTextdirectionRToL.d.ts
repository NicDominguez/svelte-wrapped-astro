import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatTextdirectionRToLProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatTextdirectionRToL["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatTextdirectionRToL["size"];
}
interface RuxIconFormatTextdirectionRToLEvents {
}
interface RuxIconFormatTextdirectionRToLSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatTextdirectionRToL extends SvelteComponent {
    $$prop_def: RuxIconFormatTextdirectionRToLProps;
    $$events_def: RuxIconFormatTextdirectionRToLEvents;
    $$slot_def: RuxIconFormatTextdirectionRToLSlots;
    $on<K extends keyof RuxIconFormatTextdirectionRToLEvents>(type: K, callback: (e: RuxIconFormatTextdirectionRToLEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatTextdirectionRToLProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatTextdirectionRToLElement | undefined;
}
export default RuxIconFormatTextdirectionRToL;
