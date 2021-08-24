import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFolderOpenProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFolderOpen["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFolderOpen["size"];
}
interface RuxIconFolderOpenEvents {
}
interface RuxIconFolderOpenSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFolderOpen extends SvelteComponent {
    $$prop_def: RuxIconFolderOpenProps;
    $$events_def: RuxIconFolderOpenEvents;
    $$slot_def: RuxIconFolderOpenSlots;
    $on<K extends keyof RuxIconFolderOpenEvents>(type: K, callback: (e: RuxIconFolderOpenEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFolderOpenProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFolderOpenElement | undefined;
}
export default RuxIconFolderOpen;
