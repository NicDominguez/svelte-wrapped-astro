import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDirectionsCarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDirectionsCar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDirectionsCar["size"];
}
interface RuxIconDirectionsCarEvents {
}
interface RuxIconDirectionsCarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDirectionsCar extends SvelteComponent {
    $$prop_def: RuxIconDirectionsCarProps;
    $$events_def: RuxIconDirectionsCarEvents;
    $$slot_def: RuxIconDirectionsCarSlots;
    $on<K extends keyof RuxIconDirectionsCarEvents>(type: K, callback: (e: RuxIconDirectionsCarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDirectionsCarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDirectionsCarElement | undefined;
}
export default RuxIconDirectionsCar;
