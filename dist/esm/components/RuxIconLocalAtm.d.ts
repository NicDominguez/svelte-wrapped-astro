import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalAtmProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalAtm["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalAtm["size"];
}
interface RuxIconLocalAtmEvents {
}
interface RuxIconLocalAtmSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalAtm extends SvelteComponent {
    $$prop_def: RuxIconLocalAtmProps;
    $$events_def: RuxIconLocalAtmEvents;
    $$slot_def: RuxIconLocalAtmSlots;
    $on<K extends keyof RuxIconLocalAtmEvents>(type: K, callback: (e: RuxIconLocalAtmEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalAtmProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalAtmElement | undefined;
}
export default RuxIconLocalAtm;
