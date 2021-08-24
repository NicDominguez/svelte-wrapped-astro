import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellular0BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellular0Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellular0Bar["size"];
}
interface RuxIconSignalCellular0BarEvents {
}
interface RuxIconSignalCellular0BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellular0Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalCellular0BarProps;
    $$events_def: RuxIconSignalCellular0BarEvents;
    $$slot_def: RuxIconSignalCellular0BarSlots;
    $on<K extends keyof RuxIconSignalCellular0BarEvents>(type: K, callback: (e: RuxIconSignalCellular0BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellular0BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellular0BarElement | undefined;
}
export default RuxIconSignalCellular0Bar;
