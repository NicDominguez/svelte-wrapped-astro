import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStoreMallDirectoryProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStoreMallDirectory["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStoreMallDirectory["size"];
}
interface RuxIconStoreMallDirectoryEvents {
}
interface RuxIconStoreMallDirectorySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStoreMallDirectory extends SvelteComponent {
    $$prop_def: RuxIconStoreMallDirectoryProps;
    $$events_def: RuxIconStoreMallDirectoryEvents;
    $$slot_def: RuxIconStoreMallDirectorySlots;
    $on<K extends keyof RuxIconStoreMallDirectoryEvents>(type: K, callback: (e: RuxIconStoreMallDirectoryEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStoreMallDirectoryProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStoreMallDirectoryElement | undefined;
}
export default RuxIconStoreMallDirectory;
