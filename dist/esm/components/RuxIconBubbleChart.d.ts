import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBubbleChartProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBubbleChart["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBubbleChart["size"];
}
interface RuxIconBubbleChartEvents {
}
interface RuxIconBubbleChartSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBubbleChart extends SvelteComponent {
    $$prop_def: RuxIconBubbleChartProps;
    $$events_def: RuxIconBubbleChartEvents;
    $$slot_def: RuxIconBubbleChartSlots;
    $on<K extends keyof RuxIconBubbleChartEvents>(type: K, callback: (e: RuxIconBubbleChartEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBubbleChartProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBubbleChartElement | undefined;
}
export default RuxIconBubbleChart;
