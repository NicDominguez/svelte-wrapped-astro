import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMotorcycleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMotorcycle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMotorcycle["size"];
}
interface RuxIconMotorcycleEvents {
}
interface RuxIconMotorcycleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMotorcycle extends SvelteComponent {
    $$prop_def: RuxIconMotorcycleProps;
    $$events_def: RuxIconMotorcycleEvents;
    $$slot_def: RuxIconMotorcycleSlots;
    $on<K extends keyof RuxIconMotorcycleEvents>(type: K, callback: (e: RuxIconMotorcycleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMotorcycleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMotorcycleElement | undefined;
}
export default RuxIconMotorcycle;
