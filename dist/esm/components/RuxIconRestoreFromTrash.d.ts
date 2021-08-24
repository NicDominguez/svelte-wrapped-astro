import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRestoreFromTrashProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRestoreFromTrash["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRestoreFromTrash["size"];
}
interface RuxIconRestoreFromTrashEvents {
}
interface RuxIconRestoreFromTrashSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRestoreFromTrash extends SvelteComponent {
    $$prop_def: RuxIconRestoreFromTrashProps;
    $$events_def: RuxIconRestoreFromTrashEvents;
    $$slot_def: RuxIconRestoreFromTrashSlots;
    $on<K extends keyof RuxIconRestoreFromTrashEvents>(type: K, callback: (e: RuxIconRestoreFromTrashEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRestoreFromTrashProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRestoreFromTrashElement | undefined;
}
export default RuxIconRestoreFromTrash;
