import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStorageProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStorage["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStorage["size"];
}
interface RuxIconStorageEvents {
}
interface RuxIconStorageSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStorage extends SvelteComponent {
    $$prop_def: RuxIconStorageProps;
    $$events_def: RuxIconStorageEvents;
    $$slot_def: RuxIconStorageSlots;
    $on<K extends keyof RuxIconStorageEvents>(type: K, callback: (e: RuxIconStorageEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStorageProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStorageElement | undefined;
}
export default RuxIconStorage;
