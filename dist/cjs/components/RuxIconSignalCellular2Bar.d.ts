import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellular2BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellular2Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellular2Bar["size"];
}
interface RuxIconSignalCellular2BarEvents {
}
interface RuxIconSignalCellular2BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellular2Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalCellular2BarProps;
    $$events_def: RuxIconSignalCellular2BarEvents;
    $$slot_def: RuxIconSignalCellular2BarSlots;
    $on<K extends keyof RuxIconSignalCellular2BarEvents>(type: K, callback: (e: RuxIconSignalCellular2BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellular2BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellular2BarElement | undefined;
}
export default RuxIconSignalCellular2Bar;
