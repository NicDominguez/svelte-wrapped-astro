import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRotate90DegreesCcProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRotate90DegreesCc["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRotate90DegreesCc["size"];
}
interface RuxIconRotate90DegreesCcEvents {
}
interface RuxIconRotate90DegreesCcSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRotate90DegreesCc extends SvelteComponent {
    $$prop_def: RuxIconRotate90DegreesCcProps;
    $$events_def: RuxIconRotate90DegreesCcEvents;
    $$slot_def: RuxIconRotate90DegreesCcSlots;
    $on<K extends keyof RuxIconRotate90DegreesCcEvents>(type: K, callback: (e: RuxIconRotate90DegreesCcEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRotate90DegreesCcProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRotate90DegreesCcElement | undefined;
}
export default RuxIconRotate90DegreesCc;
