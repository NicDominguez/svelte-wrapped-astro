import { Components } from '@astrouxds/astro-web-components';
interface RuxIconReportProblemProps {
    /** The fill color for the icon */
    color?: Components.RuxIconReportProblem["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconReportProblem["size"];
}
interface RuxIconReportProblemEvents {
}
interface RuxIconReportProblemSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconReportProblem extends SvelteComponent {
    $$prop_def: RuxIconReportProblemProps;
    $$events_def: RuxIconReportProblemEvents;
    $$slot_def: RuxIconReportProblemSlots;
    $on<K extends keyof RuxIconReportProblemEvents>(type: K, callback: (e: RuxIconReportProblemEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconReportProblemProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconReportProblemElement | undefined;
}
export default RuxIconReportProblem;
