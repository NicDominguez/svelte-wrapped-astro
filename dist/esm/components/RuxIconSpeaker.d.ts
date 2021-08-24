import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSpeakerProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSpeaker["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSpeaker["size"];
}
interface RuxIconSpeakerEvents {
}
interface RuxIconSpeakerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSpeaker extends SvelteComponent {
    $$prop_def: RuxIconSpeakerProps;
    $$events_def: RuxIconSpeakerEvents;
    $$slot_def: RuxIconSpeakerSlots;
    $on<K extends keyof RuxIconSpeakerEvents>(type: K, callback: (e: RuxIconSpeakerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSpeakerProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSpeakerElement | undefined;
}
export default RuxIconSpeaker;
