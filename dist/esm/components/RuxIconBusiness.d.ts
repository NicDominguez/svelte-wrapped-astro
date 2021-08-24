import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBusinessProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBusiness["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBusiness["size"];
}
interface RuxIconBusinessEvents {
}
interface RuxIconBusinessSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBusiness extends SvelteComponent {
    $$prop_def: RuxIconBusinessProps;
    $$events_def: RuxIconBusinessEvents;
    $$slot_def: RuxIconBusinessSlots;
    $on<K extends keyof RuxIconBusinessEvents>(type: K, callback: (e: RuxIconBusinessEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBusinessProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBusinessElement | undefined;
}
export default RuxIconBusiness;
