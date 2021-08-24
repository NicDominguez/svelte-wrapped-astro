import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRowingProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRowing["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRowing["size"];
}
interface RuxIconRowingEvents {
}
interface RuxIconRowingSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRowing extends SvelteComponent {
    $$prop_def: RuxIconRowingProps;
    $$events_def: RuxIconRowingEvents;
    $$slot_def: RuxIconRowingSlots;
    $on<K extends keyof RuxIconRowingEvents>(type: K, callback: (e: RuxIconRowingEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRowingProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRowingElement | undefined;
}
export default RuxIconRowing;
