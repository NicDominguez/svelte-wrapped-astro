import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMonetizationOnProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMonetizationOn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMonetizationOn["size"];
}
interface RuxIconMonetizationOnEvents {
}
interface RuxIconMonetizationOnSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMonetizationOn extends SvelteComponent {
    $$prop_def: RuxIconMonetizationOnProps;
    $$events_def: RuxIconMonetizationOnEvents;
    $$slot_def: RuxIconMonetizationOnSlots;
    $on<K extends keyof RuxIconMonetizationOnEvents>(type: K, callback: (e: RuxIconMonetizationOnEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMonetizationOnProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMonetizationOnElement | undefined;
}
export default RuxIconMonetizationOn;
