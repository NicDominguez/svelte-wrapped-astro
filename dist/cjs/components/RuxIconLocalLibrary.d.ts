import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalLibraryProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalLibrary["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalLibrary["size"];
}
interface RuxIconLocalLibraryEvents {
}
interface RuxIconLocalLibrarySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalLibrary extends SvelteComponent {
    $$prop_def: RuxIconLocalLibraryProps;
    $$events_def: RuxIconLocalLibraryEvents;
    $$slot_def: RuxIconLocalLibrarySlots;
    $on<K extends keyof RuxIconLocalLibraryEvents>(type: K, callback: (e: RuxIconLocalLibraryEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalLibraryProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalLibraryElement | undefined;
}
export default RuxIconLocalLibrary;
