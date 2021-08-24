import { Components } from '@astrouxds/astro-web-components';
interface RuxClassificationMarkingProps {
    /** Defines which classification marking will be displayed. */
    classification?: Components.RuxClassificationMarking["classification"];
    /** Allows additional text labels to be added to the a marking */
    label?: Components.RuxClassificationMarking["label"];
    /** Declares the marking as a `tag` rather than the default banner style */
    tag?: Components.RuxClassificationMarking["tag"];
}
interface RuxClassificationMarkingEvents {
}
interface RuxClassificationMarkingSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxClassificationMarking extends SvelteComponent {
    $$prop_def: RuxClassificationMarkingProps;
    $$events_def: RuxClassificationMarkingEvents;
    $$slot_def: RuxClassificationMarkingSlots;
    $on<K extends keyof RuxClassificationMarkingEvents>(type: K, callback: (e: RuxClassificationMarkingEvents[K]) => any): () => void;
    $set($$props: Partial<RuxClassificationMarkingProps>): void;
    constructor(options: any);
    get classification(): any;
    set classification(classification: any);
    get label(): any;
    set label(label: any);
    get tag(): any;
    set tag(tag: any);
    get getWebComponent(): HTMLRuxClassificationMarkingElement | undefined;
}
export default RuxClassificationMarking;
