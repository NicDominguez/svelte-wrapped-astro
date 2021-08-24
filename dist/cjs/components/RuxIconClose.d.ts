import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCloseProps {
    /** The fill color for the icon */
    color?: Components.RuxIconClose["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconClose["size"];
}
interface RuxIconCloseEvents {
}
interface RuxIconCloseSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconClose extends SvelteComponent {
    $$prop_def: RuxIconCloseProps;
    $$events_def: RuxIconCloseEvents;
    $$slot_def: RuxIconCloseSlots;
    $on<K extends keyof RuxIconCloseEvents>(type: K, callback: (e: RuxIconCloseEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCloseProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCloseElement | undefined;
}
export default RuxIconClose;
