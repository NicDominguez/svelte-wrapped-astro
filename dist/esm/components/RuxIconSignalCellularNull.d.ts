import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellularNullProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellularNull["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellularNull["size"];
}
interface RuxIconSignalCellularNullEvents {
}
interface RuxIconSignalCellularNullSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellularNull extends SvelteComponent {
    $$prop_def: RuxIconSignalCellularNullProps;
    $$events_def: RuxIconSignalCellularNullEvents;
    $$slot_def: RuxIconSignalCellularNullSlots;
    $on<K extends keyof RuxIconSignalCellularNullEvents>(type: K, callback: (e: RuxIconSignalCellularNullEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellularNullProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellularNullElement | undefined;
}
export default RuxIconSignalCellularNull;
