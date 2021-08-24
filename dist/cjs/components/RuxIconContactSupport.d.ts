import { Components } from '@astrouxds/astro-web-components';
interface RuxIconContactSupportProps {
    /** The fill color for the icon */
    color?: Components.RuxIconContactSupport["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconContactSupport["size"];
}
interface RuxIconContactSupportEvents {
}
interface RuxIconContactSupportSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconContactSupport extends SvelteComponent {
    $$prop_def: RuxIconContactSupportProps;
    $$events_def: RuxIconContactSupportEvents;
    $$slot_def: RuxIconContactSupportSlots;
    $on<K extends keyof RuxIconContactSupportEvents>(type: K, callback: (e: RuxIconContactSupportEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconContactSupportProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconContactSupportElement | undefined;
}
export default RuxIconContactSupport;
