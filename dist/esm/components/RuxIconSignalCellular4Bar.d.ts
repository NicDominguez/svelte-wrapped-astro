import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalCellular4BarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalCellular4Bar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalCellular4Bar["size"];
}
interface RuxIconSignalCellular4BarEvents {
}
interface RuxIconSignalCellular4BarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalCellular4Bar extends SvelteComponent {
    $$prop_def: RuxIconSignalCellular4BarProps;
    $$events_def: RuxIconSignalCellular4BarEvents;
    $$slot_def: RuxIconSignalCellular4BarSlots;
    $on<K extends keyof RuxIconSignalCellular4BarEvents>(type: K, callback: (e: RuxIconSignalCellular4BarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalCellular4BarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalCellular4BarElement | undefined;
}
export default RuxIconSignalCellular4Bar;
