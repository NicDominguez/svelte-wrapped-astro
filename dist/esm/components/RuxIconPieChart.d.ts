import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPieChartProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPieChart["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPieChart["size"];
}
interface RuxIconPieChartEvents {
}
interface RuxIconPieChartSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPieChart extends SvelteComponent {
    $$prop_def: RuxIconPieChartProps;
    $$events_def: RuxIconPieChartEvents;
    $$slot_def: RuxIconPieChartSlots;
    $on<K extends keyof RuxIconPieChartEvents>(type: K, callback: (e: RuxIconPieChartEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPieChartProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPieChartElement | undefined;
}
export default RuxIconPieChart;
