import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCallMissedOutgoingProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCallMissedOutgoing["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCallMissedOutgoing["size"];
}
interface RuxIconCallMissedOutgoingEvents {
}
interface RuxIconCallMissedOutgoingSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCallMissedOutgoing extends SvelteComponent {
    $$prop_def: RuxIconCallMissedOutgoingProps;
    $$events_def: RuxIconCallMissedOutgoingEvents;
    $$slot_def: RuxIconCallMissedOutgoingSlots;
    $on<K extends keyof RuxIconCallMissedOutgoingEvents>(type: K, callback: (e: RuxIconCallMissedOutgoingEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCallMissedOutgoingProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCallMissedOutgoingElement | undefined;
}
export default RuxIconCallMissedOutgoing;
