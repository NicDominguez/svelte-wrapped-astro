import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellular1BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellular1Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellular1Bar["size"];
}
interface RuxIconSignalCellular1BarEvents {
}
interface RuxIconSignalCellular1BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellular1Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalCellular1BarProps;
    $$events_def: RuxIconSignalCellular1BarEvents;
    $$slot_def: RuxIconSignalCellular1BarSlots;
    $on<K extends keyof RuxIconSignalCellular1BarEvents>(type: K, callback: (e: RuxIconSignalCellular1BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellular1BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellular1BarElement | undefined;
}
export default RuxIconSignalCellular1Bar;
