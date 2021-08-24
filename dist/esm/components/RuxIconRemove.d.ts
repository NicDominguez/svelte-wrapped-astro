import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRemoveProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRemove["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRemove["size"];
}
interface RuxIconRemoveEvents {
}
interface RuxIconRemoveSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRemove extends SvelteComponent {
    $$prop_def: RuxIconRemoveProps;
    $$events_def: RuxIconRemoveEvents;
    $$slot_def: RuxIconRemoveSlots;
    $on<K extends keyof RuxIconRemoveEvents>(type: K, callback: (e: RuxIconRemoveEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRemoveProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRemoveElement | undefined;
}
export default RuxIconRemove;
