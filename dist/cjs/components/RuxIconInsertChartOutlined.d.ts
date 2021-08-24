import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInsertChartOutlinedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInsertChartOutlined["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInsertChartOutlined["size"];
}
interface RuxIconInsertChartOutlinedEvents {
}
interface RuxIconInsertChartOutlinedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInsertChartOutlined extends SvelteComponent {
    $$prop_def: RuxIconInsertChartOutlinedProps;
    $$events_def: RuxIconInsertChartOutlinedEvents;
    $$slot_def: RuxIconInsertChartOutlinedSlots;
    $on<K extends keyof RuxIconInsertChartOutlinedEvents>(type: K, callback: (e: RuxIconInsertChartOutlinedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInsertChartOutlinedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInsertChartOutlinedElement | undefined;
}
export default RuxIconInsertChartOutlined;
