import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMultilineChartProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMultilineChart["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMultilineChart["size"];
}
interface RuxIconMultilineChartEvents {
}
interface RuxIconMultilineChartSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMultilineChart extends SvelteComponent {
    $$prop_def: RuxIconMultilineChartProps;
    $$events_def: RuxIconMultilineChartEvents;
    $$slot_def: RuxIconMultilineChartSlots;
    $on<K extends keyof RuxIconMultilineChartEvents>(type: K, callback: (e: RuxIconMultilineChartEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMultilineChartProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMultilineChartElement | undefined;
}
export default RuxIconMultilineChart;
