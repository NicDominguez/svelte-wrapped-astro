import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSpeakerGroupProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSpeakerGroup["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSpeakerGroup["size"];
}
interface RuxIconSpeakerGroupEvents {
}
interface RuxIconSpeakerGroupSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSpeakerGroup extends SvelteComponent {
    $$prop_def: RuxIconSpeakerGroupProps;
    $$events_def: RuxIconSpeakerGroupEvents;
    $$slot_def: RuxIconSpeakerGroupSlots;
    $on<K extends keyof RuxIconSpeakerGroupEvents>(type: K, callback: (e: RuxIconSpeakerGroupEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSpeakerGroupProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSpeakerGroupElement | undefined;
}
export default RuxIconSpeakerGroup;
