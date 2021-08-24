import { Components } from '@astrouxds/astro-web-components';
interface RuxIconReportOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconReportOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconReportOff["size"];
}
interface RuxIconReportOffEvents {
}
interface RuxIconReportOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconReportOff extends SvelteComponent {
    $$prop_def: RuxIconReportOffProps;
    $$events_def: RuxIconReportOffEvents;
    $$slot_def: RuxIconReportOffSlots;
    $on<K extends keyof RuxIconReportOffEvents>(type: K, callback: (e: RuxIconReportOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconReportOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconReportOffElement | undefined;
}
export default RuxIconReportOff;
