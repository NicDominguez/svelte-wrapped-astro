import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBarChartProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBarChart["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBarChart["size"];
}
interface RuxIconBarChartEvents {
}
interface RuxIconBarChartSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBarChart extends SvelteComponent {
    $$prop_def: RuxIconBarChartProps;
    $$events_def: RuxIconBarChartEvents;
    $$slot_def: RuxIconBarChartSlots;
    $on<K extends keyof RuxIconBarChartEvents>(type: K, callback: (e: RuxIconBarChartEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBarChartProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBarChartElement | undefined;
}
export default RuxIconBarChart;
