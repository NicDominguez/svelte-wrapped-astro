import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCreateNewFolderProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCreateNewFolder["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCreateNewFolder["size"];
}
interface RuxIconCreateNewFolderEvents {
}
interface RuxIconCreateNewFolderSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCreateNewFolder extends SvelteComponent {
    $$prop_def: RuxIconCreateNewFolderProps;
    $$events_def: RuxIconCreateNewFolderEvents;
    $$slot_def: RuxIconCreateNewFolderSlots;
    $on<K extends keyof RuxIconCreateNewFolderEvents>(type: K, callback: (e: RuxIconCreateNewFolderEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCreateNewFolderProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCreateNewFolderElement | undefined;
}
export default RuxIconCreateNewFolder;
