import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFeedbackProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFeedback["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFeedback["size"];
}
interface RuxIconFeedbackEvents {
}
interface RuxIconFeedbackSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFeedback extends SvelteComponent {
    $$prop_def: RuxIconFeedbackProps;
    $$events_def: RuxIconFeedbackEvents;
    $$slot_def: RuxIconFeedbackSlots;
    $on<K extends keyof RuxIconFeedbackEvents>(type: K, callback: (e: RuxIconFeedbackEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFeedbackProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFeedbackElement | undefined;
}
export default RuxIconFeedback;
