import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEquipmentProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEquipment["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEquipment["size"];
}
interface RuxIconEquipmentEvents {
}
interface RuxIconEquipmentSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEquipment extends SvelteComponent {
    $$prop_def: RuxIconEquipmentProps;
    $$events_def: RuxIconEquipmentEvents;
    $$slot_def: RuxIconEquipmentSlots;
    $on<K extends keyof RuxIconEquipmentEvents>(type: K, callback: (e: RuxIconEquipmentEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEquipmentProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEquipmentElement | undefined;
}
export default RuxIconEquipment;
