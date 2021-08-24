import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellularNoSimProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellularNoSim["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellularNoSim["size"];
}
interface RuxIconSignalCellularNoSimEvents {
}
interface RuxIconSignalCellularNoSimSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellularNoSim extends SvelteComponent {
    $$prop_def: RuxIconSignalCellularNoSimProps;
    $$events_def: RuxIconSignalCellularNoSimEvents;
    $$slot_def: RuxIconSignalCellularNoSimSlots;
    $on<K extends keyof RuxIconSignalCellularNoSimEvents>(type: K, callback: (e: RuxIconSignalCellularNoSimEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellularNoSimProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellularNoSimElement | undefined;
}
export default RuxIconSignalCellularNoSim;
