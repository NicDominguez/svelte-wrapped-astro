import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTableChartProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTableChart["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTableChart["size"];
}
interface RuxIconTableChartEvents {
}
interface RuxIconTableChartSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTableChart extends SvelteComponent {
    $$prop_def: RuxIconTableChartProps;
    $$events_def: RuxIconTableChartEvents;
    $$slot_def: RuxIconTableChartSlots;
    $on<K extends keyof RuxIconTableChartEvents>(type: K, callback: (e: RuxIconTableChartEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTableChartProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTableChartElement | undefined;
}
export default RuxIconTableChart;
