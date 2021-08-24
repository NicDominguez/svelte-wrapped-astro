import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalPharmacyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalPharmacy["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalPharmacy["size"];
}
interface RuxIconLocalPharmacyEvents {
}
interface RuxIconLocalPharmacySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalPharmacy extends SvelteComponent {
    $$prop_def: RuxIconLocalPharmacyProps;
    $$events_def: RuxIconLocalPharmacyEvents;
    $$slot_def: RuxIconLocalPharmacySlots;
    $on<K extends keyof RuxIconLocalPharmacyEvents>(type: K, callback: (e: RuxIconLocalPharmacyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalPharmacyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalPharmacyElement | undefined;
}
export default RuxIconLocalPharmacy;
