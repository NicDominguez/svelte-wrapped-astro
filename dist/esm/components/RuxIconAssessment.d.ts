import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAssessmentProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAssessment["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAssessment["size"];
}
interface RuxIconAssessmentEvents {
}
interface RuxIconAssessmentSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAssessment extends SvelteComponent {
    $$prop_def: RuxIconAssessmentProps;
    $$events_def: RuxIconAssessmentEvents;
    $$slot_def: RuxIconAssessmentSlots;
    $on<K extends keyof RuxIconAssessmentEvents>(type: K, callback: (e: RuxIconAssessmentEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAssessmentProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAssessmentElement | undefined;
}
export default RuxIconAssessment;
