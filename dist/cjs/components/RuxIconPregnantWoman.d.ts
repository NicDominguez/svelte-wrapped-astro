import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPregnantWomanProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPregnantWoman["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPregnantWoman["size"];
}
interface RuxIconPregnantWomanEvents {
}
interface RuxIconPregnantWomanSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPregnantWoman extends SvelteComponent {
    $$prop_def: RuxIconPregnantWomanProps;
    $$events_def: RuxIconPregnantWomanEvents;
    $$slot_def: RuxIconPregnantWomanSlots;
    $on<K extends keyof RuxIconPregnantWomanEvents>(type: K, callback: (e: RuxIconPregnantWomanEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPregnantWomanProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPregnantWomanElement | undefined;
}
export default RuxIconPregnantWoman;
