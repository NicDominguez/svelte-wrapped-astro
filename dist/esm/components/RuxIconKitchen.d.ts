import { Components } from '@astrouxds/astro-web-components';
interface RuxIconKitchenProps {
    /** The fill color for the icon */
    color?: Components.RuxIconKitchen["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconKitchen["size"];
}
interface RuxIconKitchenEvents {
}
interface RuxIconKitchenSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconKitchen extends SvelteComponent {
    $$prop_def: RuxIconKitchenProps;
    $$events_def: RuxIconKitchenEvents;
    $$slot_def: RuxIconKitchenSlots;
    $on<K extends keyof RuxIconKitchenEvents>(type: K, callback: (e: RuxIconKitchenEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconKitchenProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconKitchenElement | undefined;
}
export default RuxIconKitchen;
