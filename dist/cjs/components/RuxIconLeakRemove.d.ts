import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLeakRemoveProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLeakRemove["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLeakRemove["size"];
}
interface RuxIconLeakRemoveEvents {
}
interface RuxIconLeakRemoveSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLeakRemove extends SvelteComponent {
    $$prop_def: RuxIconLeakRemoveProps;
    $$events_def: RuxIconLeakRemoveEvents;
    $$slot_def: RuxIconLeakRemoveSlots;
    $on<K extends keyof RuxIconLeakRemoveEvents>(type: K, callback: (e: RuxIconLeakRemoveEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLeakRemoveProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLeakRemoveElement | undefined;
}
export default RuxIconLeakRemove;
