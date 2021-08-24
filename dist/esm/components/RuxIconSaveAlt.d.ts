import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSaveAltProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSaveAlt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSaveAlt["size"];
}
interface RuxIconSaveAltEvents {
}
interface RuxIconSaveAltSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSaveAlt extends SvelteComponent {
    $$prop_def: RuxIconSaveAltProps;
    $$events_def: RuxIconSaveAltEvents;
    $$slot_def: RuxIconSaveAltSlots;
    $on<K extends keyof RuxIconSaveAltEvents>(type: K, callback: (e: RuxIconSaveAltEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSaveAltProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSaveAltElement | undefined;
}
export default RuxIconSaveAlt;
