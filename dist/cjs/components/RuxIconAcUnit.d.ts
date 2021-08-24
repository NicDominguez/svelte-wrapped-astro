import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAcUnitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAcUnit["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAcUnit["size"];
}
interface RuxIconAcUnitEvents {
}
interface RuxIconAcUnitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAcUnit extends SvelteComponent {
    $$prop_def: RuxIconAcUnitProps;
    $$events_def: RuxIconAcUnitEvents;
    $$slot_def: RuxIconAcUnitSlots;
    $on<K extends keyof RuxIconAcUnitEvents>(type: K, callback: (e: RuxIconAcUnitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAcUnitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAcUnitElement | undefined;
}
export default RuxIconAcUnit;
