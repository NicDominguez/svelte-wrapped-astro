import { Components } from '@astrouxds/astro-web-components';
interface RuxIconShowChartProps {
    /** The fill color for the icon */
    color?: Components.RuxIconShowChart["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconShowChart["size"];
}
interface RuxIconShowChartEvents {
}
interface RuxIconShowChartSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconShowChart extends SvelteComponent {
    $$prop_def: RuxIconShowChartProps;
    $$events_def: RuxIconShowChartEvents;
    $$slot_def: RuxIconShowChartSlots;
    $on<K extends keyof RuxIconShowChartEvents>(type: K, callback: (e: RuxIconShowChartEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconShowChartProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconShowChartElement | undefined;
}
export default RuxIconShowChart;
