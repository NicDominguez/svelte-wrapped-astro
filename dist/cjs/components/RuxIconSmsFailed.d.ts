import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSmsFailedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSmsFailed["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSmsFailed["size"];
}
interface RuxIconSmsFailedEvents {
}
interface RuxIconSmsFailedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSmsFailed extends SvelteComponent {
    $$prop_def: RuxIconSmsFailedProps;
    $$events_def: RuxIconSmsFailedEvents;
    $$slot_def: RuxIconSmsFailedSlots;
    $on<K extends keyof RuxIconSmsFailedEvents>(type: K, callback: (e: RuxIconSmsFailedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSmsFailedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSmsFailedElement | undefined;
}
export default RuxIconSmsFailed;
