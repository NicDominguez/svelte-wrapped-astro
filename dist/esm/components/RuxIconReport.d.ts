import { Components } from '@astrouxds/astro-web-components';
interface RuxIconReportProps {
    /** The fill color for the icon */
    color?: Components.RuxIconReport["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconReport["size"];
}
interface RuxIconReportEvents {
}
interface RuxIconReportSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconReport extends SvelteComponent {
    $$prop_def: RuxIconReportProps;
    $$events_def: RuxIconReportEvents;
    $$slot_def: RuxIconReportSlots;
    $on<K extends keyof RuxIconReportEvents>(type: K, callback: (e: RuxIconReportEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconReportProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconReportElement | undefined;
}
export default RuxIconReport;
