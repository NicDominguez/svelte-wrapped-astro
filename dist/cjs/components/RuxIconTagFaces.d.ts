import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTagFacesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTagFaces["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTagFaces["size"];
}
interface RuxIconTagFacesEvents {
}
interface RuxIconTagFacesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTagFaces extends SvelteComponent {
    $$prop_def: RuxIconTagFacesProps;
    $$events_def: RuxIconTagFacesEvents;
    $$slot_def: RuxIconTagFacesSlots;
    $on<K extends keyof RuxIconTagFacesEvents>(type: K, callback: (e: RuxIconTagFacesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTagFacesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTagFacesElement | undefined;
}
export default RuxIconTagFaces;
