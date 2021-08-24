import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellular3BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellular3Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellular3Bar["size"];
}
interface RuxIconSignalCellular3BarEvents {
}
interface RuxIconSignalCellular3BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellular3Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalCellular3BarProps;
    $$events_def: RuxIconSignalCellular3BarEvents;
    $$slot_def: RuxIconSignalCellular3BarSlots;
    $on<K extends keyof RuxIconSignalCellular3BarEvents>(type: K, callback: (e: RuxIconSignalCellular3BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellular3BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellular3BarElement | undefined;
}
export default RuxIconSignalCellular3Bar;
