import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSdStorageProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSdStorage["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSdStorage["size"];
}
interface RuxIconSdStorageEvents {
}
interface RuxIconSdStorageSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSdStorage extends SvelteComponent {
    $$prop_def: RuxIconSdStorageProps;
    $$events_def: RuxIconSdStorageEvents;
    $$slot_def: RuxIconSdStorageSlots;
    $on<K extends keyof RuxIconSdStorageEvents>(type: K, callback: (e: RuxIconSdStorageEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSdStorageProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSdStorageElement | undefined;
}
export default RuxIconSdStorage;
