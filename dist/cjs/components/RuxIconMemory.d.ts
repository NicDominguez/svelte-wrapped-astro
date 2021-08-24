import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMemoryProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMemory["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMemory["size"];
}
interface RuxIconMemoryEvents {
}
interface RuxIconMemorySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMemory extends SvelteComponent {
    $$prop_def: RuxIconMemoryProps;
    $$events_def: RuxIconMemoryEvents;
    $$slot_def: RuxIconMemorySlots;
    $on<K extends keyof RuxIconMemoryEvents>(type: K, callback: (e: RuxIconMemoryEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMemoryProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMemoryElement | undefined;
}
export default RuxIconMemory;
