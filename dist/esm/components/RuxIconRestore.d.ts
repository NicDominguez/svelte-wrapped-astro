import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRestoreProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRestore["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRestore["size"];
}
interface RuxIconRestoreEvents {
}
interface RuxIconRestoreSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRestore extends SvelteComponent {
    $$prop_def: RuxIconRestoreProps;
    $$events_def: RuxIconRestoreEvents;
    $$slot_def: RuxIconRestoreSlots;
    $on<K extends keyof RuxIconRestoreEvents>(type: K, callback: (e: RuxIconRestoreEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRestoreProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRestoreElement | undefined;
}
export default RuxIconRestore;
