import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFolderSharedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFolderShared["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFolderShared["size"];
}
interface RuxIconFolderSharedEvents {
}
interface RuxIconFolderSharedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFolderShared extends SvelteComponent {
    $$prop_def: RuxIconFolderSharedProps;
    $$events_def: RuxIconFolderSharedEvents;
    $$slot_def: RuxIconFolderSharedSlots;
    $on<K extends keyof RuxIconFolderSharedEvents>(type: K, callback: (e: RuxIconFolderSharedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFolderSharedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFolderSharedElement | undefined;
}
export default RuxIconFolderShared;
