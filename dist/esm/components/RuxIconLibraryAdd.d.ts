import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLibraryAddProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLibraryAdd["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLibraryAdd["size"];
}
interface RuxIconLibraryAddEvents {
}
interface RuxIconLibraryAddSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLibraryAdd extends SvelteComponent {
    $$prop_def: RuxIconLibraryAddProps;
    $$events_def: RuxIconLibraryAddEvents;
    $$slot_def: RuxIconLibraryAddSlots;
    $on<K extends keyof RuxIconLibraryAddEvents>(type: K, callback: (e: RuxIconLibraryAddEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLibraryAddProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLibraryAddElement | undefined;
}
export default RuxIconLibraryAdd;
