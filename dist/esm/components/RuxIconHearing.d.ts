import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHearingProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHearing["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHearing["size"];
}
interface RuxIconHearingEvents {
}
interface RuxIconHearingSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHearing extends SvelteComponent {
    $$prop_def: RuxIconHearingProps;
    $$events_def: RuxIconHearingEvents;
    $$slot_def: RuxIconHearingSlots;
    $on<K extends keyof RuxIconHearingEvents>(type: K, callback: (e: RuxIconHearingEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHearingProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHearingElement | undefined;
}
export default RuxIconHearing;
