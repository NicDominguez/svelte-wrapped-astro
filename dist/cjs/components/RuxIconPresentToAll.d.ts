import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPresentToAllProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPresentToAll["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPresentToAll["size"];
}
interface RuxIconPresentToAllEvents {
}
interface RuxIconPresentToAllSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPresentToAll extends SvelteComponent {
    $$prop_def: RuxIconPresentToAllProps;
    $$events_def: RuxIconPresentToAllEvents;
    $$slot_def: RuxIconPresentToAllSlots;
    $on<K extends keyof RuxIconPresentToAllEvents>(type: K, callback: (e: RuxIconPresentToAllEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPresentToAllProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPresentToAllElement | undefined;
}
export default RuxIconPresentToAll;
