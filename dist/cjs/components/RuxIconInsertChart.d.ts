import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInsertChartProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInsertChart["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInsertChart["size"];
}
interface RuxIconInsertChartEvents {
}
interface RuxIconInsertChartSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInsertChart extends SvelteComponent {
    $$prop_def: RuxIconInsertChartProps;
    $$events_def: RuxIconInsertChartEvents;
    $$slot_def: RuxIconInsertChartSlots;
    $on<K extends keyof RuxIconInsertChartEvents>(type: K, callback: (e: RuxIconInsertChartEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInsertChartProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInsertChartElement | undefined;
}
export default RuxIconInsertChart;
