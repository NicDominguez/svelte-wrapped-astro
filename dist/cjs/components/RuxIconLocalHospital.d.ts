import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalHospitalProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalHospital["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalHospital["size"];
}
interface RuxIconLocalHospitalEvents {
}
interface RuxIconLocalHospitalSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalHospital extends SvelteComponent {
    $$prop_def: RuxIconLocalHospitalProps;
    $$events_def: RuxIconLocalHospitalEvents;
    $$slot_def: RuxIconLocalHospitalSlots;
    $on<K extends keyof RuxIconLocalHospitalEvents>(type: K, callback: (e: RuxIconLocalHospitalEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalHospitalProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalHospitalElement | undefined;
}
export default RuxIconLocalHospital;
