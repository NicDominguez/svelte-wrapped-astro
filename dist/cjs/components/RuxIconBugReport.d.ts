import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBugReportProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBugReport["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBugReport["size"];
}
interface RuxIconBugReportEvents {
}
interface RuxIconBugReportSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBugReport extends SvelteComponent {
    $$prop_def: RuxIconBugReportProps;
    $$events_def: RuxIconBugReportEvents;
    $$slot_def: RuxIconBugReportSlots;
    $on<K extends keyof RuxIconBugReportEvents>(type: K, callback: (e: RuxIconBugReportEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBugReportProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBugReportElement | undefined;
}
export default RuxIconBugReport;
