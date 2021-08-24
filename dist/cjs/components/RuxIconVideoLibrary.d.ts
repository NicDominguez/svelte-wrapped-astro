import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVideoLibraryProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVideoLibrary["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVideoLibrary["size"];
}
interface RuxIconVideoLibraryEvents {
}
interface RuxIconVideoLibrarySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVideoLibrary extends SvelteComponent {
    $$prop_def: RuxIconVideoLibraryProps;
    $$events_def: RuxIconVideoLibraryEvents;
    $$slot_def: RuxIconVideoLibrarySlots;
    $on<K extends keyof RuxIconVideoLibraryEvents>(type: K, callback: (e: RuxIconVideoLibraryEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVideoLibraryProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVideoLibraryElement | undefined;
}
export default RuxIconVideoLibrary;
