import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInsertDriveFileProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInsertDriveFile["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInsertDriveFile["size"];
}
interface RuxIconInsertDriveFileEvents {
}
interface RuxIconInsertDriveFileSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInsertDriveFile extends SvelteComponent {
    $$prop_def: RuxIconInsertDriveFileProps;
    $$events_def: RuxIconInsertDriveFileEvents;
    $$slot_def: RuxIconInsertDriveFileSlots;
    $on<K extends keyof RuxIconInsertDriveFileEvents>(type: K, callback: (e: RuxIconInsertDriveFileEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInsertDriveFileProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInsertDriveFileElement | undefined;
}
export default RuxIconInsertDriveFile;
