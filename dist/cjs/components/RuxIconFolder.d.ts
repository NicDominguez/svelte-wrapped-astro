import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFolderProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFolder["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFolder["size"];
}
interface RuxIconFolderEvents {
}
interface RuxIconFolderSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFolder extends SvelteComponent {
    $$prop_def: RuxIconFolderProps;
    $$events_def: RuxIconFolderEvents;
    $$slot_def: RuxIconFolderSlots;
    $on<K extends keyof RuxIconFolderEvents>(type: K, callback: (e: RuxIconFolderEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFolderProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFolderElement | undefined;
}
export default RuxIconFolder;
